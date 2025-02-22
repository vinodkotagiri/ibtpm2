import {
  BarBenderRates,
  CabinetRates,
  ConcreteRates,
  DFinsulationRates,
  DFRates,
  DoorRates,
  ElecRates,
  ElectricianRates,
  EngineerRates,
  ExhaustRates,
  FCeilingRates,
  FFMasonRates,
  FFRates,
  FloorRates,
  FurnishRates,
  HelperRates,
  KCtop40sftRates,
  LitWfixRates,
  MasonRates,
  MechMasonRates,
  MechRates,
  MetalFormworkRates,
  PlasterManualRates,
  PlumberRates,
  PlumbRates,
  PPaintRates,
  Redclayper1000Rates,
  SteelRates,
  WaterRates,
  WPRates
} from "../constants/rates";
import { DrawingData, roomType, Task, TaskType } from "../constants/types";

export function updateTasksFromDrawingData(tasks, drawingData: DrawingData): Array<Task> {
  const levels = [];
  if (drawingData?.secondFloor?.rooms?.length > 0) {
    levels.push(2);
  }
  if (drawingData?.thirdFloor?.rooms?.length > 0) {
    levels.push(3);
  }
  if (drawingData?.fourthFloor?.rooms?.length > 0) {
    levels.push(4);
  }
  if (drawingData?.fifthFloor?.rooms?.length > 0) {
    levels.push(5);
  }
  const lastIndex = tasks?.findIndex((task) => task.id == `EL110`);
  const currentIndex = tasks?.findIndex((task) => task.id == `LL2`);

  const finalTasksToPush = [];
  const levelsMap = {
    0: "groundFloor",
    1: "firstFloor",
    2: "secondFloor",
    3: "thirdFloor",
    4: "fourthFloor",
    5: "fifthFloor"
  };
  for (const level of levels) {
    const length = drawingData[levelsMap[level]]?.length;
    const width = drawingData[levelsMap[level]]?.width;
    const height = drawingData.floorHeight;

    const tasksToPush = [
      {
        id: `LL${level}`,
        name: `Level-${level} Structure`,
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: "CON"
      },

      {
        id: `L${level}C`,
        name: `Level-${level} Columns`,
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `LL${level}`
      },
      {
        id: `F${level}TF${level + 1}`,
        name: `Columns-F${level}-F${level + 1}`,
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        numbersRequired: 1,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `L${level}C`
      },
      {
        id: `F${level}TF${level + 1}S`,
        name: "Columns Steel",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `F${level}TF${level + 1}`,
        resources: [
          {
            id: `GCT11${level}`,
            resource: "SftDia8Steel",
            description: "Stirrups&Hooks",
            length: length,
            diameter: 8,
            noOfBars: 2,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `GCT12${level}`,
            resource: "SftDia16Steel",
            description: "Main Bars",
            length: length,
            diameter: 16,
            noOfBars: 4,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `GCT13${level}`,
            resource: "SftDia12Steel",
            description: "Distribution Bars",
            length: 3,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `GCT14${level}`,
            resource: "HourlyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Hourly,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `GCT15${level}`,
            resource: "HourlyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `F${level}TF${level + 1}F`,
        name: "Columns Formwork",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`F${level}TF${level + 1}S`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `F${level}TF${level + 1}`,
        resources: [
          {
            id: `GCT110${level}`,
            resource: "SqmFootingMetalFormwork",
            description: "Metal",
            length: length,
            breadth: 0.23,
            thickness: 0.23,
            perimeter: 0,
            rate: MetalFormworkRates.Footing.Sqm,
            units: "Sqm",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `GCT111${level}`,
            resource: "HourlyMason",
            description: "Mason",
            rate: MasonRates.Mason.Hourly,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `GCT112${level}`,
            resource: "HourlyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `F${level}TF${level + 1}FCC`,
        name: "Columns Concrete",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`F${level}TF${level + 1}F`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `F${level}TF${level + 1}`,
        resources: [
          {
            id: "ST78",
            resource: "CumM25Concrete",
            description: "M25Concrete",
            length: height,
            breadth: 0.23,
            thickness: 0.23,
            area: 0,
            rate: ConcreteRates.M25.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: "ST79",
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Hourly,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: "ST710",
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },

      //Beam Type-1// 3x0.23x0.45
      {
        id: `L${level}B`,
        name: `Level-${level} Beams`,
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `LL${level}`
      },
      {
        id: `L${level}BT1`,
        name: `Beam Level${level}-Level${level + 1}-Typ-1 3x0.23x0.45`,
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        numbersRequired: 1,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `L${level}B`
      },
      {
        id: `L${level}BTF`,
        name: "Beam Formwork",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`F${level}TF${level + 1}FCC`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `L${level}BT1`,
        resources: [
          {
            id: `BT111${level}`,
            resource: "SqmFootingMetalFormwork",
            description: "Metal",
            length: length,
            breadth: 0.23,
            thickness: 0.45,
            perimeter: 0,
            rate: MetalFormworkRates.Footing.Sqm,
            units: "Sqm",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `BT112${level}`,
            resource: "HourlyMason",
            description: "Mason",
            rate: MasonRates.Mason.Hourly,
            units: "Hour",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `BT113${level}`,
            resource: "HourlyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Hour",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `L${level}BT1S`,
        name: "Beam Steel",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: ["BT11"],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `L${level}BTF`,
        resources: [
          {
            id: `BT121${level}`,
            resource: "SftDia8Steel",
            description: "Stirrups&Hooks",
            length: length,
            diameter: 8,
            noOfBars: 2,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `BT122${level}`,
            resource: "SftDia12Steel",
            description: "Top Bars",
            length: length,
            diameter: 12,
            noOfBars: 4,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `BT123${level}`,
            resource: "SftDia16Steel",
            description: "Bottom Bars",
            length: length,
            diameter: 16,
            noOfBars: 6,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `BT124${level}`,
            resource: "HourlyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Hourly,
            units: "Hour",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `BT125${level}`,
            resource: "HourlyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Hour",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `L${level}BTI`,
        name: "Inspection",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `L${level}BT1`,
        resources: [
          {
            id: `BT131${level}`,
            resource: "VisitEngineer",
            description: "Inspection",
            rate: EngineerRates.Inspection.Visit,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `L${level}BTC`,
        name: "Beam Concrete",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`L${level}BTI`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `L${level}BT1`,
        resources: [
          {
            id: `BT141${level}`,
            resource: "CumM30Concrete",
            description: "M30Concrete",
            length: length,
            breadth: 0.23,
            thickness: 0.45,
            area: 0,
            rate: ConcreteRates.M30.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `BT142${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Hourly,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `BT143${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },

      //slab//
      {
        id: `SL${level}`,
        name: `Slab Level-${level}`,
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `LL${level}`
      },
      {
        id: `SL${level}F`,
        name: "Slab Formwork",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}`,
        resources: [
          {
            id: `SLB11${level}`,
            resource: "SqmFootingMetalFormwork",
            description: "Metal",
            length: length,
            breadth: width,
            thickness: 0.15,
            perimeter: 0,
            rate: MetalFormworkRates.Footing.Sqm,
            units: "Sqm",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SLB12${level}`,
            resource: "HourlyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB13${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 4,
            totalCost: 0
          }
        ]
      },
      {
        id: `SL${level}SB`,
        name: "Slab Steel-Bottom",
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}`
      },
      {
        id: `SL${level}SBL`,
        name: "Slab Steel-Length",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`SL${level}F`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}SB`,
        resources: [
          {
            id: `SSL11${level}`,
            resource: "SftDia16Steel",
            description: "Bottom Main Bars",
            length: length,
            diameter: 16,
            noOfBars: 16,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SSL12${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 8,
            totalCost: 0
          },
          {
            id: `SSL13${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SSL14${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `SL${level}SBB`,
        name: "Slab Steel-Breadth",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FF",
        dependencies: [`SL${level}SBL`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}SB`,
        resources: [
          {
            id: `SSB11${level}`,
            resource: "SftDia8Steel",
            description: "Bottom Distri Bars",
            breadth: width,
            diameter: 12,
            noOfBars: 21,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SSB12${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 8,
            totalCost: 0
          },
          {
            id: `SSB13${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SSB14${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      //SLAB MEP 1st Fix START//
      {
        id: `L${level}MEP`,
        name: "MEP 1st Fix",
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}`
      },
      {
        id: `SL${level}ELE`,
        name: "Slab Electrical",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        numbersRequired: 1,
        strategy: "FS",
        dependencies: ["SLB21"],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `L${level}MEP`,
        resources: [
          {
            id: `SLB31${level}`,
            resource: "mPVCElec",
            description: "Electrical",
            rate: ElecRates.PVC.m,
            units: "m",
            quantity: 10,
            totalCost: 0
          },
          {
            id: `SLB32${level}`,
            resource: "DailyMason",
            description: "Electrical",
            rate: ElectricianRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB33${level}`,
            resource: "DailyHelper",
            description: "Electrical",
            rate: ElectricianRates.Mason.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `SL${level}ME`,
        name: "Slab Mechanical",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        numbersRequired: 1,
        strategy: "FS",
        dependencies: [`SL${level}ELE`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `L${level}MEP`,
        resources: [
          {
            id: `SLB41${level}`,
            resource: "mHangersMech",
            description: "Mechanical",
            rate: MechRates.Hangers.m,
            units: "m",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB42${level}`,
            resource: "DailyMason",
            description: "Mechanical",
            rate: MechMasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB43${level}`,
            resource: "DailyHelper",
            description: "Mechanical",
            rate: MechMasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `SL${level}PB`,
        name: "Slab Plumbing",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        numbersRequired: 1,
        strategy: "FS",
        dependencies: [`SL${level}ME`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `L${level}MEP`,
        resources: [
          {
            id: `SLB51${level}`,
            resource: "mCPVCPlumb",
            description: "Plumbing",
            rate: PlumbRates.CPVC.m,
            units: "m",
            quantity: 10,
            totalCost: 0
          },
          {
            id: `SLB52${level}`,
            resource: "DailyMason",
            description: "Plumbing",
            rate: PlumberRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB53${level}`,
            resource: "DailyHelper",
            description: "Plumbing",
            rate: PlumberRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `SL${level}FIF`,
        name: "Slab Firefighting",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        numbersRequired: 1,
        strategy: "FS",
        dependencies: [`SL${level}PB`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `L${level}MEP`,
        resources: [
          {
            id: `SLB61${level}`,
            resource: "mHangerssprinklerFF",
            description: "FireFighting",
            rate: FFRates.Hangerssprinkler.m,
            units: "m",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB62${level}`,
            resource: "DailyMason",
            description: "FireFighting",
            rate: FFMasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB63${level}`,
            resource: "DailyHelper",
            description: "FireFighting",
            rate: FFMasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      //SLAB MEP 1st Fix END//
      {
        id: `SL${level}ST`,
        name: "Slab Steel-Top",
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}`
      },
      {
        id: `SL${level}SBL2`,
        name: "Slab Steel-Length",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`SL${level}ELE`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}ST`,
        resources: [
          {
            id: `SSL21${level}`,
            resource: "SftDia16Steel",
            description: "Bottom Main Bars",
            length: length,
            diameter: 16,
            noOfBars: 16,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SSL22${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 8,
            totalCost: 0
          },
          {
            id: `SSL23${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SSL24${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `SL${level}SBB2`,
        name: "Slab Steel-Breadth",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FF",
        dependencies: [`SL${level}SBL2`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}ST`,
        resources: [
          {
            id: `SLB21${level}`,
            resource: "SftDia12Steel",
            description: "Bottom Distri Bars",
            breadth: width,
            diameter: 12,
            noOfBars: 21,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SLB22${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 8,
            totalCost: 0
          },
          {
            id: `SLB23${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB24${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },

      {
        id: `SL${level}CON`,
        name: "Slab Concrete",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`SL${level}SBB2`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}`,
        resources: [
          {
            id: `SLB71${level}`,
            resource: "VisitEngineer",
            description: "Inspection",
            rate: EngineerRates.Inspection.Visit,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB72${level}`,
            resource: "CumM30Concrete",
            description: "M30Concrete",
            length: length,
            breadth: width,
            thickness: 0.15,
            area: 0,
            rate: ConcreteRates.M30.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `SLB73${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB74${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 5,
            totalCost: 0
          }
        ]
      },
      {
        id: `SL${level}CUR`,
        name: "Slab Curing",
        start: "",
        end: "",
        duration: 7,
        cost: 0,
        strategy: "FS",
        dependencies: [`SL${level}CON`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}`,
        resources: [
          {
            id: `SLB81${level}`,
            resource: "CumWater",
            description: "Curing Water",
            length: length,
            breadth: width,
            thickness: 0.15,
            area: 0,
            rate: WaterRates.Water.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `SLB82${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Hour",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB83${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Hour",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `SL${level}RFW`,
        name: "Remove Formwork",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`SL${level}CUR`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `SL${level}`,
        resources: [
          {
            id: `SLB91${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB92${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },

      //G-L1 Staircase//
      {
        id: `STCL${level}${level + 1}`,
        name: `Staircase-L${level}-$L{level+1}`,
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `LL${level}`
      },
      {
        id: `FFL${level}${level + 1}`,
        name: `First Flight-L${level}-L${level + 1}`,
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `STCL${level}${level + 1}`
      },
      {
        id: `FFL${level}${level + 1}FB`,
        name: "Foundation Bed",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`SL${level}CUR`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `STCL${level}${level + 1}`,
        resources: [
          {
            id: `FFG101${level}`,
            resource: "SftDia12Steel",
            description: "Main bars top",
            length: 1.5,
            diameter: 12,
            noOfBars: 7,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG102${level}`,
            resource: "SftDia12Steel",
            description: "Main bars bottom",
            length: 1.5,
            diameter: 12,
            noOfBars: 7,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG103${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars top",
            length: 0.5,
            diameter: 8,
            noOfBars: 9,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG104${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars bottom",
            length: 0.5,
            diameter: 8,
            noOfBars: 9,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG105${level}`,
            resource: "SftDia12Steel",
            description: "Anchorage bars",
            length: 0.7,
            diameter: 10,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG106${level}`,
            resource: "SftDia12Steel",
            description: "Ld bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG107${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG108${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG109${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 3,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFL${level}${level + 1}SF`,
        name: "Slab Formwork",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "SS",
        dependencies: [`FFL${level}${level + 1}FB`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `STCL${level}${level + 1}`,
        resources: [
          {
            id: `SLB11${level}`,
            resource: "SqmFootingMetalFormwork",
            description: "Metal",
            length: 4.5,
            breadth: 1.7,
            thickness: 0.15,
            perimeter: 0,
            rate: MetalFormworkRates.Footing.Sqm,
            units: "Sqm",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SLB12${level}`,
            resource: "HourlyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SLB13${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 4,
            totalCost: 0
          }
        ]
      },

      {
        id: `FFL${level}${level + 1}WS`,
        name: "Waist Slab Steel",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`FFL${level}${level + 1}SF`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FFL${level}${level + 1}`,
        resources: [
          {
            id: `FFG141${level}`,
            resource: "SftDia12Steel",
            description: "Main bars top",
            length: 5.7,
            diameter: 12,
            noOfBars: 11,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG142${level}`,
            resource: "SftDia12Steel",
            description: "Main bars bottom",
            length: 5.7,
            diameter: 10,
            noOfBars: 11,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG143${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars top",
            length: 1.15,
            diameter: 8,
            noOfBars: 19,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG144${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars bottom",
            length: 1.15,
            diameter: 8,
            noOfBars: 19,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG145${level}`,
            resource: "SftDia12Steel",
            description: "Anchorage bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG146${level}`,
            resource: "SftDia12Steel",
            description: "Ld bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG147${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG148${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG149${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFL${level}${level + 1}LN`,
        name: "Landing Slab",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FF",
        dependencies: [`FFL${level}${level + 1}WS`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FFL${level}${level + 1}`,
        resources: [
          {
            id: `FFG121${level}`,
            resource: "SftDia12Steel",
            description: "Main bars top",
            length: 2.1,
            diameter: 12,
            noOfBars: 9,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG122${level}`,
            resource: "SftDia12Steel",
            description: "Main bars bottom",
            length: 2.1,
            diameter: 12,
            noOfBars: 9,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG123${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars top",
            length: 1.15,
            diameter: 8,
            noOfBars: 7,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG124${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars bottom",
            length: 1.15,
            diameter: 8,
            noOfBars: 7,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG125${level}`,
            resource: "SftDia12Steel",
            description: "Anchorage bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG126${level}`,
            resource: "SftDia12Steel",
            description: "Ld bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG127${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG128${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG129${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },

      {
        id: `FFL${level}${level + 1}BSLPS`,
        name: "Beam Steel (Landing Portion Support)",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`FFL${level}${level + 1}LN`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FFL${level}${level + 1}`,
        resources: [
          {
            id: `FFG141${level}`,
            resource: "SftDia16Steel",
            description: "Main bars top",
            length: 2.1,
            diameter: 16,
            noOfBars: 2,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG142${level}`,
            resource: "SftDia16Steel",
            description: "Main bars bottom",
            length: 2.1,
            diameter: 16,
            noOfBars: 2,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG143${level}`,
            resource: "SftDia8Steel",
            description: "Stirrups",
            length: 0.48,
            diameter: 8,
            noOfBars: 9,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG144${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG145${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG146${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFL${level}${level + 1}STC`,
        name: "Staircase Concrete",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`FFL${level}${level + 1}BSLPS`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FFL${level}${level + 1}`,
        resources: [
          {
            id: `FFG151${level}`,
            resource: "VisitEngineer",
            description: "Inspection",
            rate: EngineerRates.Inspection.Visit,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG152${level}`,
            resource: "CumM20Concrete",
            description: "M20Concrete",
            length: 5,
            breadth: 1.6,
            thickness: 0.175,
            area: 0,
            rate: ConcreteRates.M20.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `FFG153${level}`,
            resource: "CumM20Concrete",
            description: "M20Concrete",
            length: 1.3,
            breadth: 0.9,
            thickness: 0.9,
            area: 0,
            rate: ConcreteRates.M20.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `FFG154${level}`,
            resource: "CumM20Concrete",
            description: "M20Concrete",
            length: 1.3,
            breadth: 0.9,
            thickness: 1.3,
            area: 0,
            rate: ConcreteRates.M20.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `FFG155${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG156${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 5,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFL${level}${level + 1}SCU`,
        name: "Staircase Curing",
        start: "",
        end: "",
        duration: 7,
        cost: 0,
        strategy: "FS",
        dependencies: ["FFG15"],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FFL${level}${level + 1}`,
        resources: [
          {
            id: `FFG161${level}`,
            resource: "CumWater",
            description: "Curing Water",
            length: length,
            breadth: width,
            thickness: 0.15,
            area: 0,
            rate: WaterRates.Water.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `FFG162${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Hour",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG163${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Hour",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFL${level}${level + 1}SRF`,
        name: "Remove Formwork",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`FFL${level}${level + 1}SCU`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FFL${level}${level + 1}`,
        resources: [
          {
            id: `FFG171${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `FFG172${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },

      {
        id: `FSL${level}${level + 1}`,
        name: "Second Flight-G-L1",
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `STCL${level}${level + 1}`
      },

      {
        id: `FFLL${level}L${level + 1}`,
        name: "Formwork 2nd Flight Slab",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FF",
        dependencies: ["FFG16"],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FSL${level}${level + 1}`,
        resources: [
          {
            id: `SFG121${level}`,
            resource: "SqmFootingMetalFormwork",
            description: "Metal",
            length: 4.5,
            breadth: 1.7,
            thickness: 0.15,
            perimeter: 0,
            rate: MetalFormworkRates.Footing.Sqm,
            units: "Sqm",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG122${level}`,
            resource: "HourlyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG123${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 4,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFLL${level}L${level + 1}BSLP`,
        name: "Beam Steel (Landing portion)",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`FFLL${level}L${level + 1}`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FSL${level}${level + 1}`,
        resources: [
          {
            id: `SFG131${level}`,
            resource: "SftDia16Steel",
            description: "Main bars top",
            length: 2.1,
            diameter: 16,
            noOfBars: 2,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG132${level}`,
            resource: "SftDia16Steel",
            description: "Main bars bottom",
            length: 2.1,
            diameter: 16,
            noOfBars: 2,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG133${level}`,
            resource: "SftDia8Steel",
            description: "Stirrups",
            length: 0.48,
            diameter: 8,
            noOfBars: 9,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG134${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG135${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG136${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFLL${level}L${level + 1}LSS`,
        name: "Landing Steel",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FF",
        dependencies: [`FFLL${level}L${level + 1}BSLP`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FSL${level}${level + 1}`,
        resources: [
          {
            id: `SFG141${level}`,
            resource: "SftDia12Steel",
            description: "Main bars top",
            length: 1.2,
            diameter: 12,
            noOfBars: 9,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG142${level}`,
            resource: "SftDia12Steel",
            description: "Main bars bottom",
            length: 1.2,
            diameter: 12,
            noOfBars: 9,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG143${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars top",
            length: 1.2,
            diameter: 8,
            noOfBars: 8,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG144${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars bottom",
            length: 1.2,
            diameter: 8,
            noOfBars: 8,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG145${level}`,
            resource: "SftDia12Steel",
            description: "Anchorage bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG146${level}`,
            resource: "SftDia12Steel",
            description: "Ld bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG147${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG148${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG149${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },

      {
        id: `FFLL${level}L${level + 1}WSS`,
        name: "Waist Slab Steel",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`FFLL${level}L${level + 1}LS`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FSL${level}${level + 1}`,
        resources: [
          {
            id: `SFG151${level}`,
            resource: "SftDia12Steel",
            description: "Main bars top",
            length: 5.7,
            diameter: 12,
            noOfBars: 11,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG152${level}`,
            resource: "SftDia12Steel",
            description: "Main bars bottom",
            length: 5.7,
            diameter: 12,
            noOfBars: 11,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG153${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars top",
            length: 1.15,
            diameter: 8,
            noOfBars: 18,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG154${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars bottom",
            length: 1.15,
            diameter: 8,
            noOfBars: 18,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG155${level}`,
            resource: "SftDia12Steel",
            description: "Anchorage bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG156${level}`,
            resource: "SftDia12Steel",
            description: "Ld bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG157${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG158${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG159${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFLL${level}L${level + 1}LSSL`,
        name: "Landing Slab",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FF",
        dependencies: [`FFLL${level}L${level + 1}WSS`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FSL${level}${level + 1}`,
        resources: [
          {
            id: `SFG161${level}`,
            resource: "SftDia12Steel",
            description: "Main bars top",
            length: 1.5,
            diameter: 12,
            noOfBars: 5,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG162${level}`,
            resource: "SftDia12Steel",
            description: "Main bars bottom",
            length: 1.5,
            diameter: 12,
            noOfBars: 5,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG163${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars top",
            length: 1,
            diameter: 8,
            noOfBars: 7,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG164${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars bottom",
            length: 1,
            diameter: 8,
            noOfBars: 7,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG165${level}`,
            resource: "SftDia12Steel",
            description: "Anchorage bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG166${level}`,
            resource: "SftDia12Steel",
            description: "Ld bars",
            length: 0.48,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `SFG167${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG168${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG169${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFLL${level}L${level + 1}WCON`,
        name: "Staircase Concrete",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`FFLL${level}L${level + 1}LSSL`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FSL${level}${level + 1}`,
        resources: [
          {
            id: `SFG171${level}`,
            resource: "VisitEngineer",
            description: "Inspection",
            rate: EngineerRates.Inspection.Visit,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG172${level}`,
            resource: "CumM20Concrete",
            description: "M20Concrete",
            length: 5,
            breadth: 1.6,
            thickness: 0.175,
            area: 0,
            rate: ConcreteRates.M20.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `SFG173${level}`,
            resource: "CumM20Concrete",
            description: "M20Concrete",
            length: 1.3,
            breadth: 0.9,
            thickness: 0.09,
            area: 0,
            rate: ConcreteRates.M20.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `SFG174${level}`,
            resource: "CumM20Concrete",
            description: "M20Concrete",
            length: 1.3,
            breadth: 0.9,
            thickness: 0.013,
            area: 0,
            rate: ConcreteRates.M20.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `SFG175${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG176${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 5,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFLL${level}L${level + 1}LSCU`,
        name: "Staircase Curing",
        start: "",
        end: "",
        duration: 7,
        cost: 0,
        strategy: "FS",
        dependencies: [`FFLL${level}L${level + 1}WCON`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FSL${level}${level + 1}`,
        resources: [
          {
            id: `SFG181${level}`,
            resource: "CumWater",
            description: "Curing Water",
            length: length,
            breadth: width,
            thickness: 0.15,
            area: 0,
            rate: WaterRates.Water.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `SFG182${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Hour",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG183${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Hour",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `FFLL${level}L${level + 1}LSRF`,
        name: "Remove Formwork",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [`FFLL${level}L${level + 1}LSCU`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `FSL${level}${level + 1}`,
        resources: [
          {
            id: `SFG191${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `SFG192${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },

      //G-L1 Staircase

      //Elevator Core Wall//
      {
        id: `ELECL${level}L${level + 1}`,
        name: "Elevator Core",
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `LL${level}`
      },
      {
        id: `ELECL${level}L${level + 1}1`,
        name: "Foundation Columns Steel",
        start: "",
        end: "",
        duration: 4,
        cost: 0,
        numbersRequired: 4,
        strategy: "SS",
        dependencies: [`FFLL${level}L${level + 1}WCON`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: `EL111${level}`,
            resource: "SftDia12Steel",
            description: "Main bars top",
            length: 1.5,
            diameter: 12,
            noOfBars: 5,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL112${level}`,
            resource: "SftDia12Steel",
            description: "Main bars bottom",
            length: 1.5,
            diameter: 12,
            noOfBars: 5,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL113${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars top",
            length: 1.5,
            diameter: 8,
            noOfBars: 7,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL114${level}`,
            resource: "SftDia8Steel",
            description: "Distri bars bottom",
            length: 1.5,
            diameter: 8,
            noOfBars: 7,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `FFG15${level}`,
            resource: "SftDia8Steel",
            description: "Stirrups",
            length: 0.48,
            diameter: 8,
            noOfBars: 9,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL116${level}`,
            resource: "DailyBarbender",
            description: "BarBender",
            rate: BarBenderRates.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL117${level}`,
            resource: "DailyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL118${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `ELECL${level}L${level + 1}2`,
        name: "Inspection",
        start: "",
        end: "",
        duration: 4,
        cost: 0,
        numbersRequired: 1,
        strategy: "FS",
        dependencies: [`ELECL${level}L${level + 1}1`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: "EL121",
            resource: "VisitEngineer",
            description: "Inspection",
            rate: EngineerRates.Inspection.Visit,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `ELECL${level}L${level + 1}3`,
        name: "Foundation Columns Concrete",
        start: "",
        end: "",
        duration: 4,
        cost: 0,
        numbersRequired: 4,
        strategy: "FF",
        dependencies: [`ELECL${level}L${level + 1}2`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: `EL131${level}`,
            resource: "VisitEngineer",
            description: "Inspection",
            rate: EngineerRates.Inspection.Visit,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL132${level}`,
            resource: "CumM20Concrete",
            description: "M20Concrete",
            length: 1.3,
            breadth: 0.9,
            thickness: 0.15,
            area: 0,
            rate: ConcreteRates.M20.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `EL133${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL134${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Daily,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `ELECL${level}L${level + 1}4`,
        name: "Columns Steel",
        start: "",
        end: "",
        duration: 4,
        cost: 0,
        numbersRequired: 4,
        strategy: "SS",
        dependencies: [`ELECL${level}L${level + 1}3`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: `EL141${level}`,
            resource: "SftDia8Steel",
            description: "Stirrups&Hooks",
            length: 2,
            diameter: 8,
            noOfBars: 2,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL142${level}`,
            resource: "SftDia16Steel",
            description: "Main Bars",
            length: 3,
            diameter: 16,
            noOfBars: 4,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL143${level}`,
            resource: "SftDia12Steel",
            description: "Distribution Bars",
            length: 3,
            diameter: 12,
            noOfBars: 2,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL144${level}`,
            resource: "HourlyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Hourly,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL145${level}`,
            resource: "HourlyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `ELECL${level}L${level + 1}5`,
        name: "Columns Formwork",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: "FS",
        dependencies: [`ELECL${level}L${level + 1}4`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: `EL150${level}`,
            resource: "SqmFootingMetalFormwork",
            description: "Metal",
            length: 3,
            breadth: 0.23,
            thickness: 0.23,
            perimeter: 0,
            rate: MetalFormworkRates.Footing.Sqm,
            units: "Sqm",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL151${level}`,
            resource: "HourlyMason",
            description: "Mason",
            rate: MasonRates.Mason.Hourly,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL152${level}`,
            resource: "HourlyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `ELECL${level}L${level + 1}6`,
        name: "Columns Concrete",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: "FS",
        dependencies: [`ELECL${level}L${level + 1}5`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: `EL168${level}`,
            resource: "CumM25Concrete",
            description: "M25Concrete",
            length: 3,
            breadth: 0.23,
            thickness: 0.23,
            area: 0,
            rate: ConcreteRates.M25.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `EL169${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Hourly,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL1610${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      //Elevator Beams//
      {
        id: `ELECL${level}L${level + 1}7`,
        name: "Beam Formwork",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: "FS",
        dependencies: [`ELECL${level}L${level + 1}6`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: `EL171${level}`,
            resource: "SqmFootingMetalFormwork",
            description: "Metal",
            length: 2,
            breadth: 0.23,
            thickness: 0.45,
            perimeter: 0,
            rate: MetalFormworkRates.Footing.Sqm,
            units: "Sqm",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL172${level}`,
            resource: "HourlyMason",
            description: "Mason",
            rate: MasonRates.Mason.Hourly,
            units: "Hour",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL173${level}`,
            resource: "HourlyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Hour",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `ELECL${level}L${level + 1}8`,
        name: "Beam Steel",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: "FS",
        dependencies: [`ELECL${level}L${level + 1}7`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: `EL181${level}`,
            resource: "SftDia8Steel",
            description: "Stirrups&Hooks",
            length: 2,
            diameter: 8,
            noOfBars: 2,
            rate: SteelRates.Dia8.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL182${level}`,
            resource: "SftDia12Steel",
            description: "Top Bars",
            length: 2,
            diameter: 12,
            noOfBars: 4,
            rate: SteelRates.Dia12.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL183${level}`,
            resource: "SftDia16Steel",
            description: "Bottom Bars",
            length: 2,
            diameter: 16,
            noOfBars: 6,
            rate: SteelRates.Dia16.Kgs,
            units: "Kgs",
            quantity: 0,
            totalCost: 0
          }, // qty and cost will be calculated in code
          {
            id: `EL184${level}`,
            resource: "HourlyMason",
            description: "Steelfixer",
            rate: MasonRates.Mason.Hourly,
            units: "Hour",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL185${level}`,
            resource: "HourlyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Hour",
            quantity: 2,
            totalCost: 0
          }
        ]
      },
      {
        id: `ELECL${level}L${level + 1}9`,
        name: "Inspection",
        start: "",
        end: "",
        duration: 3,
        cost: 0,
        strategy: "FS",
        dependencies: [`ELECL${level}L${level + 1}8`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: `EL191${level}`,
            resource: "VisitEngineer",
            description: "Inspection",
            rate: EngineerRates.Inspection.Visit,
            units: "Day",
            quantity: 1,
            totalCost: 0
          }
        ]
      },
      {
        id: `ELECL${level}L${level + 1}110`,
        name: "Beam Concrete",
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: "FS",
        dependencies: [`ELECL${level}L${level + 1}9`],
        type: "task",
        progress: 0,
        hideChildren: false,
        parent: `ELECL${level}L${level + 1}`,
        resources: [
          {
            id: `EL1101${level}`,
            resource: "CumM30Concrete",
            description: "M30Concrete",
            length: 2,
            breadth: 0.23,
            thickness: 0.45,
            area: 0,
            rate: ConcreteRates.M30.Cum,
            units: "Cum",
            quantity: 0,
            totalCost: 0
          },
          {
            id: `EL1102${level}`,
            resource: "DailyMason",
            description: "Mason",
            rate: MasonRates.Mason.Hourly,
            units: "Day",
            quantity: 1,
            totalCost: 0
          },
          {
            id: `EL1103${level}`,
            resource: "DailyHelper",
            description: "Helper",
            rate: HelperRates.Helper.Hourly,
            units: "Day",
            quantity: 2,
            totalCost: 0
          }
        ]
      }
    ];
    finalTasksToPush.push(...tasksToPush);
  }

  if (currentIndex < 0) {
    tasks = [...tasks.slice(0, lastIndex + 1), ...finalTasksToPush, ...tasks.slice(lastIndex + 1)];
  }

  tasks = updateFinishes(tasks, drawingData, levelsMap, levels);

  return tasks;
}

function updateFinishes(tasks, drawingData: DrawingData, levelsMap, levels) {
  const lastIndex = tasks?.findIndex((task) => task.id == `OTBW15`);
  const currentIndex = tasks?.findIndex((task) => task.id == `L0FIN`);
  const finalTasksToPush = [];
  levels.unshift(0, 1);

  if (!drawingData?.firstFloor?.rooms?.length) levels.pop();
  for (const level of levels) {
    let tasksToPush = [
      {
        id: `L${level}FIN`,
        name: `${levelsMap[level]}`.toUpperCase() + " FINISHES",
        start: "",
        end: "",
        duration: 0,
        cost: 0,
        strategy: "FS",
        dependencies: ["PROJ"],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: "PROJ"
      },
      {
        id: `${level}FRIN`,
        name: `ROUGH IN`,
        start: "",
        end: "",
        duration: 1,
        cost: 0,
        strategy: "FS",
        dependencies: [],
        type: "project",
        progress: 0,
        hideChildren: false,
        parent: `L${level}FIN`
      }
    ];
    let roomsData = [];
    for (const index in drawingData[levelsMap[level]]?.rooms) {
      const room: roomType = drawingData[levelsMap[level]]?.rooms[index];
      roomsData.push(
        {
          id: `${level}FRIN${index}`,
          name: `${room.name}`,
          start: "",
          end: "",
          duration: 0,
          cost: 0,
          strategy: "FS",
          dependencies: [],
          type: "project",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN`
        },
        {
          id: `${level}FRIN${index}BW`,
          name: "BrickWork",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [level == 0 ? "GP4" : level == 1 ? "SLB8" : `SL${level}CUR`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}`,
          resources: [
            {
              id: `G1BW11${level}${index}`,
              resource: "Cuminch9Redclayper1000",
              description: "leftWall",
              length: room.leftWallLength,
              breadth: room.leftWallHeight,
              thickness: room.leftWallThickness,
              area: 0,
              rate: Redclayper1000Rates.inch9.Cum,
              units: "Cum",
              quantity: 0,
              totalCost: 0
            }, // qty and cost will be calculated in code
            {
              id: `G1BW12${level}${index}`,
              resource: "Cuminch9Redclayper1000",
              description: "rightWall",
              length: room.rightWallLength,
              breadth: room.rightWallHeight,
              thickness: room.rightWallThickness,
              area: 0,
              rate: Redclayper1000Rates.inch9.Cum,
              units: "Cum",
              quantity: 0,
              totalCost: 0
            }, // qty and cost will be calculated in code
            {
              id: `G1BW13${level}${index}`,
              resource: "Cuminch9Redclayper1000",
              description: "frontWall",
              length: room.frontWallLength,
              breadth: room.frontWallHeight,
              thickness: room.frontWallThickness,
              area: 0,
              rate: Redclayper1000Rates.inch9.Cum,
              units: "Cum",
              quantity: 0,
              totalCost: 0
            }, // qty and cost will be calculated in code
            {
              id: `G1BW14${level}${index}`,
              resource: "Cuminch9Redclayper1000",
              description: "backWall",
              length: room.backWallLength,
              breadth: room.backWallHeight,
              thickness: room.backWallThickness,
              area: 0,
              rate: Redclayper1000Rates.inch9.Cum,
              units: "Cum",
              quantity: 0,
              totalCost: 0
            }, // qty and cost will be calculated in code
            {
              id: `G1BW15${level}${index}`,
              resource: "HourlyMason",
              description: "Mason",
              rate: MasonRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `G1BW16${level}${index}`,
              resource: "HourlyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FRIN${index}MEP`,
          name: "MEP Fixes",
          start: "",
          end: "",
          duration: 0,
          cost: 0,
          strategy: "FS",
          dependencies: [],
          type: "project",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}`
        },
        {
          id: `${level}FRIN${index}ELW`,
          name: "Electrical - Wires",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FRIN${index}BW`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}MEP`,
          resources: [
            {
              id: `G1EL11${level}${index}`,
              resource: "UnitJunctionBoxElec",
              description: "Electrical",
              rate: ElecRates.JunctionBox.m,
              units: "m",
              quantity: 2,
              totalCost: 0
            },
            {
              id: `G1EL12${level}${index}`,
              resource: "mPullwiresconduitsElec",
              description: "Electrical",
              rate: ElecRates.Pullwiresconduits.m,
              units: "m",
              quantity: 12,
              totalCost: 0
            },
            {
              id: `G1EL13${level}${index}`,
              resource: "HourlyMason",
              description: "Electrical",
              rate: ElectricianRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `G1EL14${level}${index}`,
              resource: "HourlyHelper",
              description: "Electrical",
              rate: ElectricianRates.Mason.Hourly,
              units: "Hour",
              quantity: 2,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FRIN${index}MD`,
          name: "Mechanical - Ducts",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FRIN${index}ELW`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}MEP`,
          resources: [
            {
              id: `G1MD11${level}${index}`,
              resource: "ALDuctperSqmMech",
              description: "Mechanical",
              rate: MechRates.DuctperSqm.AL,
              units: "Sqm",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `G1MD12${level}${index}`,
              resource: "HourlyMason",
              description: "Mechanical",
              rate: MechMasonRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `G1MD13${level}${index}`,
              resource: "HourlyHelper",
              description: "Mechanical",
              rate: MechMasonRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FRIN${index}PC`,
          name: "Plumbing - Conduits",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FRIN${index}MD`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}MEP`,
          resources: [
            {
              id: `G1PC11${level}${index}`,
              resource: "CeraTapsPlumb",
              description: "Plumbing",
              rate: PlumbRates.taps.Cera,
              units: "Unit",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `G1PC12${level}${index}`,
              resource: "HourlyMason",
              description: "Plumbing",
              rate: PlumberRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `G1PC13${level}${index}`,
              resource: "HourlyHelper",
              description: "Plumbing",
              rate: PlumberRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FRIN${index}FF`,
          name: "Fire Fighting - Pipes",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FRIN${index}PC`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}MEP`,
          resources: [
            {
              id: `G1FF11${level}${index}`,
              resource: "mHangerssprinklerFF",
              description: "FireFighting",
              rate: FFRates.Hangerssprinkler.m,
              units: "m",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `G1FF12${level}${index}`,
              resource: "HourlyMason",
              description: "FireFighting",
              rate: FFMasonRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `G1FF13${level}${index}`,
              resource: "HourlyHelper",
              description: "FireFighting",
              rate: FFMasonRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },

        {
          id: `L${level}DFI${index}`,
          name: "Door Frame Insulation",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FRIN${index}BW`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}`,
          resources: [
            {
              id: `G1DFI11${level}${index}`,
              resource: "WP1TeakDFinsulation",
              description: "Door insulation",
              length: 3,
              breadth: 4,
              area: 12,
              rate: DFinsulationRates.Teak.WP1,
              units: "Unit",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1DFI13${level}${index}`,
              resource: "DailyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Daily,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `L${level}WFI${index}`,
          name: "Window Frame Insulation",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`L${level}DFI${index}`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}`,
          resources: [
            {
              id: `G1WFI11${level}${index}`,
              resource: "WP1TeakDFinsulation",
              description: "Window insulation",
              length: 2,
              breadth: 3,
              area: 6,
              rate: DFinsulationRates.Teak.WP1,
              units: "Unit",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1WFI13${level}${index}`,
              resource: "DailyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Daily,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `L${level}PL${index}`,
          name: "Plaster",
          start: "",
          end: "",
          duration: 2,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FRIN${index}ELW`, `L${level}DFI${index}`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}`,
          resources: [
            {
              id: `G1PL11${level}${index}`,
              resource: "Cummm12PlasterManual",
              description: "leftWall",
              length: room.leftWallLength,
              breadth: room.leftWallHeight,
              thickness: 0.016,
              area: 0,
              rate: PlasterManualRates.mm18.Cum,
              units: "Cum",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PL12${level}${index}`,
              resource: "Cummm12PlasterManual",
              description: "rightWall",
              length: room.rightWallLength,
              breadth: room.rightWallHeight,
              thickness: 0.016,
              area: 0,
              rate: PlasterManualRates.mm18.Cum,
              units: "Cum",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PL13${level}${index}`,
              resource: "Cummm12PlasterManual",
              description: "frontWall",
              length: room.frontWallLength,
              breadth: room.frontWallHeight,
              thickness: 0.016,
              area: 0,
              rate: PlasterManualRates.mm18.Cum,
              units: "Cum",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PL14${level}${index}`,
              resource: "Cummm12PlasterManual",
              description: "backWall",
              length: room.backWallLength,
              breadth: room.backWallHeight,
              thickness: 0.016,
              area: 0,
              rate: PlasterManualRates.mm18.Cum,
              units: "Cum",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PL15${level}${index}`,
              resource: "DailyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Daily,
              units: "Day",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `L${level}PR${index}`,
          name: "Primer",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`L${level}PL${index}`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}`,
          resources: [
            {
              id: `C153A1${level}${index}`,
              resource: "SqmPPaint",
              description: "leftWall",
              length: room.leftWallLength,
              breadth: room.leftWallHeight,
              area: 0,
              rate: PPaintRates.Interior.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `C153A2${level}${index}`,
              resource: "SqmPPaint",
              description: "rightWall",
              length: room.rightWallLength,
              breadth: room.rightWallHeight,
              area: 0,
              rate: PPaintRates.Interior.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `C153A3${level}${index}`,
              resource: "SqmPPaint",
              description: "frontWall",
              length: room.frontWallLength,
              breadth: room.frontWallHeight,
              area: 0,
              rate: PPaintRates.Interior.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `C153A4${level}${index}`,
              resource: "SqmPPaint",
              description: "backWall",
              length: room.backWallLength,
              breadth: room.backWallHeight,
              area: 0,
              rate: PPaintRates.Interior.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `C153A5${level}${index}`,
              resource: "DailyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Daily,
              units: "Day",
              quantity: 2,
              totalCost: 0
            }
          ]
        },
        {
          id: `L${level}PTG${index}`,
          name: "Painting",
          start: "",
          end: "",
          duration: 2,
          cost: 0,
          strategy: "FS",
          dependencies: [`L${level}PR${index}`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}`,
          resources: [
            {
              id: `G1PR11${level}${index}`,
              resource: "SqmPPaint",
              description: "leftWall",
              length: room.leftWallLength,
              breadth: room.leftWallHeight,
              area: 0,
              rate: PPaintRates.Emulsion.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PR12${level}${index}`,
              resource: "SqmPPaint",
              description: "rightWall",
              length: room.rightWallLength,
              breadth: room.rightWallHeight,
              area: 0,
              rate: PPaintRates.Emulsion.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PR13${level}${index}`,
              resource: "SqmPPaint",
              description: "frontWall",
              length: room.frontWallLength,
              breadth: room.frontWallHeight,
              area: 0,
              rate: PPaintRates.Emulsion.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PR14${level}${index}`,
              resource: "SqmPPaint",
              description: "backWall",
              length: room.backWallLength,
              breadth: room.backWallHeight,
              area: 0,
              rate: PPaintRates.Emulsion.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PR15${level}${index}`,
              resource: "DailyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Daily,
              units: "Day",
              quantity: 2,
              totalCost: 0
            }
          ]
        },

        {
          id: `L${level}FLR${index}`,
          name: "Flooring",
          start: "",
          end: "",
          duration: 0,
          cost: 0,
          strategy: "FS",
          dependencies: [],
          type: "project",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}`
        },
        {
          id: `L${level}WPF${index}`,
          name: "Waterproofing",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`L${level}PTG${index}`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `L${level}FLR${index}`,
          resources: [
            {
              id: `G1WP11${level}${index}`,
              resource: "SqmLiquidWP",
              description: "Waterproofing",
              length: room.length,
              breadth: room.width,
              area: room.area,
              rate: WPRates.Liquid.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1WP12${level}${index}`,
              resource: "DailyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Daily,
              units: "Day",
              quantity: 2,
              totalCost: 0
            }
          ]
        },
        {
          id: `L${level}GRT${index}`,
          name: "Granite",
          start: "",
          end: "",
          duration: 2,
          cost: 0,
          strategy: "FS",
          dependencies: [`L${level}WPF${index}`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `L${level}FLR${index}`,
          resources: [
            {
              id: `G1GR11${level}${index}`,
              resource: "SqmGraniteFloor",
              description: "Granite",
              length: room.length,
              breadth: room.width,
              area: room.area,
              rate: FloorRates.Granite.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1GR12${level}${index}`,
              resource: "DailyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Daily,
              units: "Day",
              quantity: 2,
              totalCost: 0
            }
          ]
        },
        {
          id: `L${level}TLG${index}`,
          name: "Tiling",
          start: "",
          end: "",
          duration: 2,
          cost: 0,
          strategy: "FS",
          dependencies: [`L${level}GRT${index}`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `L${level}FLR${index}`,
          resources: [
            {
              id: `G1TL11${level}${index}`,
              resource: "SqmVitrifiedFloor",
              description: "Vitrified",
              length: room.length,
              breadth: room.width,
              area: room.area,
              rate: FloorRates.Vitrified.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1TL12${level}${index}`,
              resource: "DailyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Daily,
              units: "Day",
              quantity: 2,
              totalCost: 0
            }
          ]
        },
        {
          id: `L${level}PFC${index}`,
          name: "Paint Final Coat & Clean-up",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: ["G1GR1,G1TL1"],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FRIN${index}`,
          resources: [
            {
              id: `G1PTF11${level}${index}`,
              resource: "SqmPPaint",
              description: "leftWall",
              length: room.leftWallHeight,
              breadth: room.leftWallHeight,
              area: 0,
              rate: PPaintRates.Emulsion.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PTF12${level}${index}`,
              resource: "SqmPPaint",
              description: "rightWall",
              length: room.rightWallLength,
              breadth: room.rightWallHeight,
              area: 0,
              rate: PPaintRates.Emulsion.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PTF13${level}${index}`,
              resource: "SqmPPaint",
              description: "frontWall",
              length: room.frontWallLength,
              breadth: room.frontWallHeight,
              area: 0,
              rate: PPaintRates.Emulsion.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PTF14${level}${index}`,
              resource: "SqmPPaint",
              description: "backWall",
              length: room.backWallLength,
              breadth: room.backWallHeight,
              area: 0,
              rate: PPaintRates.Emulsion.Sqm,
              units: "Sqm",
              quantity: 0,
              totalCost: 0
            },
            {
              id: `G1PTF15${level}${index}`,
              resource: "DailyHelper",
              description: "Helper",
              rate: HelperRates.Helper.Daily,
              units: "Day",
              quantity: 2,
              totalCost: 0
            },
            {
              id: `G1PTF16${level}${index}`,
              resource: "DailyHelper",
              description: "Clean",
              rate: HelperRates.Helper.Daily,
              units: "Day",
              quantity: 2,
              totalCost: 0
            }
          ]
        }
      );
    }
    if (roomsData.length > 0) {
      tasksToPush.push(...roomsData);
    }
    tasksToPush.push({
      id: `${level}FINTER`,
      name: `INTERIORS`,
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: `L${level}FIN`
    });
    roomsData = [];
    for (const index in drawingData[levelsMap[level]]?.rooms) {
      const room: roomType = drawingData[levelsMap[level]]?.rooms[index];
      roomsData.push(
        {
          id: `${level}FINTER${index}`,
          name: `${room.name}`,
          start: "",
          end: "",
          duration: 0,
          cost: 0,
          strategy: "FS",
          dependencies: [],
          type: "project",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER`
        },
        {
          id: `${level}FINTER${index}DF`,
          name: "Install Door Frame",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`L${level}PL${index}`, `L${level}GRT${index}`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}`,
          resources: [
            {
              id: `GFI71${level}${index}`,
              resource: "TW1TeakperftDF",
              description: "Door Frame",
              length: 2.3,
              breadth: 2.7,
              area: 6.21,
              rate: DFRates.Teakperft.TW2,
              units: "Sqm",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FINTER${index}WF`,
          name: "Install Windoor Frame",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FIN${index}DF`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}`,
          resources: [
            {
              id: `GFI81${level}${index}`,
              resource: "TW1TeakperftDF",
              description: "Window Frame",
              length: 2.75,
              breadth: 2.75,
              area: 7.5,
              rate: DFRates.Teakperft.TW2,
              units: "Sft",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FINTER${index}IW`,
          name: "Install Window",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FINTER${index}WF`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}`,
          resources: [
            {
              id: `GFI91${level}${index}`,
              resource: "SftUPVCSlidDoor",
              description: "Window",
              length: 2.5,
              breadth: 2.5,
              area: 6.25,
              rate: DoorRates.UPVCSlid.Sft,
              units: "Sft",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FINTER${index}ID`,
          name: "Install Door",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FIN${index}IW`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}`,
          resources: [
            {
              id: `GFI101${level}${index}`,
              resource: "UnitTeakWoodDoor",
              description: "Door",
              length: 2.2,
              breadth: 2.5,
              area: 5.5,
              rate: DoorRates.TeakWood.Unit,
              units: "Unit",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FINTER${index}MEPFF`,
          name: "MEP FINAL FIX",
          start: "",
          end: "",
          duration: 0,
          cost: 0,
          strategy: "FS",
          dependencies: [],
          type: "project",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}`
        },

        {
          id: `${level}FINTER${index}EL`,
          name: "Electrical",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`L${level}PL${index}`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}MEPFF`,
          resources: [
            {
              id: `GFI31${level}${index}`,
              resource: "UnitLightFixturesElec",
              description: "Electrical",
              rate: ElecRates.LightFixtures.Unit,
              units: "Unit",
              quantity: 2,
              totalCost: 0
            },
            {
              id: `GFI32${level}${index}`,
              resource: "HourlyMason",
              description: "Electrical",
              rate: ElectricianRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },

        {
          id: `${level}FINTER${index}PL`,
          name: "Plumbing",
          start: "",
          end: "",
          duration: 2,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FIN${index}DF`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}MEPFF`,
          resources: [
            {
              id: `GFI51{level}${index}`,
              resource: "CeraTapsPlumb",
              description: "Plumbing",
              rate: PlumbRates.taps.Cera,
              units: "Unit",
              quantity: 2,
              totalCost: 0
            },
            {
              id: `GFI52${level}${index}`,
              resource: "HourlyMason",
              description: "Plumbing",
              rate: PlumberRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FINTER${index}ML`,
          name: "Mechanical",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FINTER${index}WF`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}MEPFF`,
          resources: [
            {
              id: `GFI41{level}${index}`,
              resource: "UnitAirCMech",
              description: "Mechanical",
              rate: MechRates.AirC.Unit,
              units: "Unit",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `GFI42${level}${index}`,
              resource: "HourlyMason",
              description: "Mechanical",
              rate: MechMasonRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },

        {
          id: `${level}FINTER${index}FF`,
          name: "FireFighting",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FINTER${index}ID`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}MEPFF`,
          resources: [
            {
              id: `GFI61{level}${index}`,
              resource: "UnitsprinklerFF",
              description: "FireFighting",
              rate: FFRates.sprinkler.Unit,
              units: "Unit",
              quantity: 1,
              totalCost: 0
            },
            {
              id: `GFI62${level}${index}`,
              resource: "HourlyMason",
              description: "FireFighting",
              rate: FFMasonRates.Mason.Hourly,
              units: "Hour",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FINTER${index}FXT`,
          name: "Fixtures",
          start: "",
          end: "",
          duration: 0,
          cost: 0,
          strategy: "FS",
          dependencies: [],
          type: "project",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}`
        },
        {
          id: `${level}FINTER${index}FC`,
          name: "False Ceiling",
          start: "",
          end: "",
          duration: 5,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FINTER${index}EL`, `${level}FINTER${index}FF`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}FXT`,
          resources: [
            {
              id: `GFI111{level}${index}`,
              resource: "Sqm2GypFCeiling",
              description: "FalseCeiling",
              length: room.length,
              breadth: room.width,
              area: room.area,
              rate: FCeilingRates.Gyp.Sqm2,
              units: "Sqm",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FINTER${index}LF`,
          name: "Light Fixtures",
          start: "",
          end: "",
          duration: 1,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FINTER${index}EL`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}FXT`,
          resources: [
            {
              id: `GFI12${level}${index}`,
              resource: "Unit2RecsedLitCfix",
              description: "Lights",
              length: room.length,
              breadth: room.width,
              area: room.area,
              rate: LitWfixRates.Wall.Unit2,
              units: "Unit",
              quantity: 4,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FINTER${index}SD`,
          name: "Sliding-Door",
          start: "",
          end: "",
          duration: 2,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FINTER${index}CT`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}FXT`,
          resources: [
            {
              id: `GFI13${level}${index}`,
              resource: "UnitUPVCSlidDoor",
              description: "Slide-Door",
              length: 0.92,
              breadth: 2.13,
              area: 0,
              rate: DoorRates.UPVCSlid.Unit,
              units: "Unit",
              quantity: 1,
              totalCost: 0
            }
          ]
        },
        {
          id: `${level}FINTER${index}JY`,
          name: "Joinery",
          start: "",
          end: "",
          duration: 4,
          cost: 0,
          strategy: "FS",
          dependencies: [`${level}FINTER${index}EL`, `${level}FINTER${index}SD`],
          type: "task",
          progress: 0,
          hideChildren: false,
          parent: `${level}FINTER${index}FXT`,
          resources: [
            {
              id: `GFI15{level}${index}`,
              resource: "Sqm2PlyWCabinet",
              description: "Cabinet",
              length: 2.5,
              breadth: 2.13,
              area: 0,
              rate: CabinetRates.PlyW.Sqm2,
              units: "Sqm",
              quantity: 1,
              totalCost: 0
            }
          ]
        }
      );
      if(room.name.toLowerCase().includes("kitchen")){
        console.log('room.name',room.name)
        roomsData.push(
          {
            id: `${level}FINTER{index}CT`,
            name: "Counter-Top",
            start: "",
            end: "",
            duration: 2,
            cost: 0,
            strategy: "FS",
            dependencies: [`${level}FINTER${index}LF`],
            type: "task",
            progress: 0,
            hideChildren: false,
            parent: `${level}FINTER${index}FXT`,
            resources: [
              {
                id: `GWFI11{level}${index}`,
                resource: "Sft2GraniteKCtop40sft",
                description: "Kitchen Countertop L-Shape",
                length: 0.92,
                breadth: 2.13,
                area: 0,
                rate: KCtop40sftRates.Granite.Sft2,
                units: "Unit",
                quantity: 1,
                totalCost: 0
              }
            ]
          },)
      }
    }

    if (roomsData.length > 0) {
      tasksToPush.push(...roomsData);
    }
    finalTasksToPush.push(...tasksToPush);
  }
  const allPopulated = finalTasksToPush.find((task) => task.id == "0FRIN0");
  if (allPopulated) {
    if (currentIndex < 0) {
      tasks = [...tasks.slice(0, lastIndex + 1), ...finalTasksToPush, ...tasks.slice(lastIndex + 1)];
    }
  }
  return tasks;
}
