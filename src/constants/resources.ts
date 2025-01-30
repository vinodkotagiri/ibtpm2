import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import {
  IBTRates,
  EngineerRates,
  MachinaryRates,
  MasonRates,
  HelperRates,
  ConcreteRates,
  SteelRates,
  WoodFormworkRates,
  MetalFormworkRates,
  FillingRates,
  BarBenderRates,
  FencingRates,
  ShoringRates,
  TermiteRates,
  WaterRates,
  ExcavationMachineRates,
  ExcavationManualRates,
  Redclayper1000Rates,
  PlasterManualRates,
  ElecRates,
  MechRates,
  PlumberRates,
  MechMasonRates,
  FFMasonRates,
  FFRates,
  PlumbRates,
  SewerS40PVCRates,
  CPVCRates,
  ElectricianRates,
  DFinsulationRates,
  DFRates,
  PPaintRates,
  WPRates,
  FloorRates,
  DoorRates,
  LitWfixRates,
  FCeilingRates,
  KCtop40sftRates,
  CabinetRates,
  ExhaustRates,
  FinalRates,
  ContingRates,
  FurnishRates
} from "./rates";
//df door frame// Ppaint =primer and paint//
import { DrawingData, Resource } from "./types";
const leftWall = { length: 3, thickness: 0.15, height: 3 };
const rightWall = { length: 3, thickness: 0.15, height: 3 };
const frontWall = { length: 3, thickness: 0.15, height: 3 };
const backWall = { length: 3, thickness: 0.15, height: 3 };
function getResources(
  taskId: string,
  drawingData: DrawingData,
  taskResources: Array<Resource> = null
): Array<Resource> {

  const {
    plotLength,
    plotWidth,
    builtupLength,
    builtupWidth,
    excavationDepth,
    firstFloor,
    secondFloor,
    thirdFloor,
    floorHeight
  } = drawingData;
  if(plotLength&&
    plotWidth&&
    builtupLength&&
    builtupWidth&&
    excavationDepth&&
    firstFloor&&
    secondFloor&&
    thirdFloor&&
    floorHeight){
  const resources: Record<string, Array<Resource>> = {
    PC2: [
      {
        id: "GTL11",
        type: "Precon",
        resource: "UnitDesignIBT",
        description: "Design",
        length: plotLength,
        breadth: plotWidth,
        area: 0,
        rate: IBTRates.Design.Unit,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      }
    ],

    PC3: [
      {
        id: "GTL11",
        type: "Precon",
        resource: "UnitEstimateIBT",
        description: "Estimate",
        length: plotLength,
        breadth: plotWidth,
        area: 0,
        rate: IBTRates.Estimate.Unit,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      }
    ],

    PC4: [
      {
        id: "GTL11",
        type: "Precon",
        resource: "UnitCityapprIBT",
        description: "Municipal approval",
        length: plotLength,
        breadth: plotWidth,
        area: 0,
        rate: IBTRates.Cityappr.Unit,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      }
    ],

    SP1: [
      {
        id: "C0",
        type: "Precon",
        resource: "DailyMason",
        description: "Survery",
        rate: FencingRates.Fencing.Sft,
        units: "Sft",
        length: builtupLength,
        breadth: builtupWidth,
        thickness: 3, // height of fencing
        area: 0,
        quantity: 0,
        totalCost: 0
      }
    ],

    SP2: [
      {
        id: "C1",
        type: "Precon",
        resource: "DailyMason",
        description: "Fencing",
        rate: FencingRates.Fencing.Sqm,
        units: "Sqm",
        length: builtupLength,
        breadth: builtupWidth,
        area: 0,
        perimeter: 0,
        thickness: 3, // height of fencing
        quantity: 2,
        totalCost: 0
      },
      {
        id: "C2",
        type: "Precon",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    SP3: [
      {
        id: "C04",
        type: "Excavation",
        resource: "CumExcavatorExcavatonMachine",
        description: "Excavation",
        length: 2.5,
        breadth: 2.5,
        thickness: 3,
        area: 0,
        rate: ExcavationMachineRates.Excavator.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "C4",
        type: "Excavation",
        resource: "MonthlyMachinery",
        description: "Cum",
        rate: MachinaryRates.Dozer.Daily,
        units: "Month",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "C5",
        type: "Excavation",
        resource: "DailyMason",
        description: "Excavation",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "C6",
        type: "Excavation",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    SP4: [
      {
        id: "C7",
        type: "Excavation",
        resource: "DailyMason",
        description: "Shoring",
        rate: ShoringRates.Shoring.Sft,
        units: "Day",
        length: builtupLength,
        breadth: builtupWidth,
        area: 0,
        thickness: 3, // height of fencing
        quantity: 0,
        totalCost: 0
      },
      {
        id: "C8",
        type: "Excavation",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    SP5: [
      {
        id: "C9",
        type: "Termite",
        resource: "DailyMason",
        description: "Termite",
        rate: TermiteRates.Termite.Sft,
        units: "Day",
        length: builtupLength,
        breadth: builtupWidth,
        area: 0,
        quantity: 1,
        totalCost: 0
      },
      {
        id: "C10",
        type: "Termite",
        resource: "DailyHelper",
        description: "Termite",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    SP6: [
      {
        id: "C11",
        type: "Curing",
        resource: "SftWater",
        description: "Curing Water",
        rate: WaterRates.Water.Sft,
        units: "Sft",
        length: 10,
        breadth: 20,
        thickness: 0.3,
        area: 0,
        quantity: 0, // Will be calculated automatically
        totalCost: 0
      },
      {
        id: "C12",
        type: "Mason",
        resource: "DailyMason",
        description: "M15",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "C13",
        type: "Helper",
        resource: "DailyHelper",
        description: "M15",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT01: [
      {
        id: "F1",
        type: "M15",
        resource: "CumM15pccConcrete",
        description: "Concrete Screed",
        rate: ConcreteRates.M15pcc.Cum,
        units: "Cum",
        length: 1.2,
        breadth: 1.2,
        thickness: 0.15,
        area: 0,
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F2",
        type: "Mason",
        resource: "HourlyMason",
        description: "M15",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F3",
        type: "Helper",
        resource: "HourlyHelper",
        description: "M15",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT02: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 0.5,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia10",
        resource: "KgsDia10Steel",
        description: "Main Bars",
        length: 1.2,
        diameter: 10,
        noOfBars: 6,
        rate: SteelRates.Dia10.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Distribution Bars",
        length: 1.2,
        diameter: 12,
        noOfBars: 6,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT03: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingWoodFormwork",
        description: "Wood",
        length: 1.2,
        breadth: 1.2,
        thickness: 0.3,
        perimeter: 0,
        rate: WoodFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT04: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "Concrete",
        length: 1.2,
        breadth: 1.2,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    FT201: [
      {
        id: "F15",
        type: "M15",
        resource: "CumM15pccConcrete",
        description: "Pcc",
        length: 1.5,
        breadth: 1.5,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M15pcc.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F16",
        type: "Mason",
        resource: "HourlyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F17",
        type: "Helper",
        resource: "HourlyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT202: [
      {
        id: "F4",
        type: "Dia6",
        resource: "KgsDia6Steel",
        description: "Stirrups&Hooks",
        length: 0.6,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia10",
        resource: "KgsDia10Steel",
        description: "Main Bars",
        length: 1.5,
        diameter: 10,
        noOfBars: 8,
        rate: SteelRates.Dia10.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Distribution Bars",
        length: 1.5,
        diameter: 12,
        noOfBars: 8,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT203: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingWoodFormwork",
        description: "Wood",
        length: 1.5,
        breadth: 1.5,
        thickness: 0.3,
        perimeter: 0,
        rate: WoodFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT204: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "Concrete",
        length: 1.5,
        breadth: 1.5,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    FT301: [
      {
        id: "F15",
        type: "M15",
        resource: "CumM15pccConcrete",
        description: "Pcc",
        length: 1.8,
        breadth: 1.5,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M15pcc.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F16",
        type: "Mason",
        resource: "HourlyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F17",
        type: "Helper",
        resource: "HourlyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT302: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 0.7,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia10",
        resource: "KgsDia10Steel",
        description: "Main Bars",
        length: 1.8,
        diameter: 12,
        noOfBars: 10,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Distribution Bars",
        length: 1.8,
        diameter: 12,
        noOfBars: 10,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT303: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingWoodFormwork",
        description: "Wood",
        length: 1.8,
        breadth: 1.8,
        thickness: 0.4,
        perimeter: 0,
        rate: WoodFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT304: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "Concrete",
        length: 1.8,
        breadth: 1.8,
        thickness: 0.4,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    FT401: [
      {
        id: "F15",
        type: "M15",
        resource: "CumM15pccConcrete",
        description: "Pcc",
        length: 2.0,
        breadth: 2.0,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M15pcc.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F16",
        type: "Mason",
        resource: "HourlyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F17",
        type: "Helper",
        resource: "HourlyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT402: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 0.7,
        diameter: 8,
        noOfBars: 6,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: 2.0,
        diameter: 10,
        noOfBars: 10,
        rate: SteelRates.Dia10.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Distribution Bars",
        length: 2.0,
        diameter: 12,
        noOfBars: 10,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT403: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingWoodFormwork",
        description: "Wood",
        length: 2.0,
        breadth: 2.0,
        thickness: 0.4,
        perimeter: 0,
        rate: WoodFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT404: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "Concrete",
        length: 2.0,
        breadth: 2.0,
        thickness: 0.4,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    FT501: [
      {
        id: "F15",
        type: "M15",
        resource: "CumM15pccConcrete",
        description: "Pcc",
        length: 2.5,
        breadth: 2.5,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M15pcc.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F16",
        type: "Mason",
        resource: "HourlyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F17",
        type: "Helper",
        resource: "HourlyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT502: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 0.8,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: 2.5,
        diameter: 12,
        noOfBars: 10,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Distribution Bars",
        length: 2.5,
        diameter: 12,
        noOfBars: 12,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Helper",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT503: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingWoodFormwork",
        description: "Wood",
        length: 2.5,
        breadth: 2.5,
        thickness: 0.4,
        perimeter: 0,
        rate: WoodFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT504: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "Concrete",
        length: 2.5,
        breadth: 2.5,
        thickness: 0.4,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    FT601: [
      {
        id: "F15",
        type: "M15",
        resource: "CumM15pccConcrete",
        description: "Pcc",
        length: 3.0,
        breadth: 3.0,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M15pcc.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F16",
        type: "Mason",
        resource: "HourlyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F17",
        type: "Helper",
        resource: "HourlyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],

    FT602: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 1.0,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia10",
        resource: "KgsDia10Steel",
        description: "Main Bars",
        length: 3.0,
        diameter: 10,
        noOfBars: 12,
        rate: SteelRates.Dia10.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Distribution Bars",
        length: 3.0,
        diameter: 12,
        noOfBars: 12,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],

    FT603: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingWoodFormwork",
        description: "Wood",
        length: 3.0,
        breadth: 3.0,
        thickness: 0.5,
        perimeter: 0,
        rate: WoodFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    FT604: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "Concrete",
        length: 3.0,
        breadth: 3.0,
        thickness: 0.5,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    // Soil Filling//
    // Soil Filling//

    C11: [
      {
        id: "F224",
        type: "Soil",
        resource: "CumSoilFilling",
        description: "sumofallpits",
        length: 2.5,
        breadth: 2.5,
        thickness: 1.5,
        area: -0,
        rate: FillingRates.Soil.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F225",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F226",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "F227",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "F228",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    // Plinth beam Length//

    PT1L1: [
      {
        id: "PL1",
        type: "Stone",
        resource: "CumStoneFilling",
        description: "Filling",
        length: builtupLength,
        breadth: 0.23,
        thickness: 0.23,
        area: 0,
        rate: FillingRates.Stone.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "PL2",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL3",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL4",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL5",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT1L2: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: builtupWidth,
        diameter: 12,
        noOfBars: 3,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Distribution Bars",
        length: builtupLength,
        diameter: 16,
        noOfBars: 4,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL10",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL11",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT1L3: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: builtupLength,
        breadth: 0.23,
        thickness: 0.23,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT1L4: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "M20Concrete",
        length: builtupWidth,
        breadth: 0.23,
        thickness: 0.23,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    PT2L1: [
      {
        id: "PL1",
        type: "Stone",
        resource: "CumStoneFilling",
        description: "Filling",
        length: builtupWidth,
        breadth: 0.26,
        thickness: 0.26,
        area: 0,
        rate: FillingRates.Stone.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "PL2",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL3",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL4",
        type: "Mason",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL5",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT2L2: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: builtupWidth,
        diameter: 12,
        noOfBars: 3,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Distribution Bars",
        length: builtupLength,
        diameter: 16,
        noOfBars: 4,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Helper",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL10",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL11",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT2L3: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: builtupLength,
        breadth: 0.26,
        thickness: 0.26,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT2L4: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "M20Concrete",
        length: builtupLength,
        breadth: 0.26,
        thickness: 0.26,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    PT3L1: [
      {
        id: "PL1",
        type: "Stone",
        resource: "CumStoneFilling",
        description: "Filling",
        length: builtupLength,
        breadth: 0.3,
        thickness: 0.3,
        area: 0,
        rate: FillingRates.Stone.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "PL2",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL3",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL4",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL5",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT3L2: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: builtupWidth,
        diameter: 12,
        noOfBars: 3,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Distribution Bars",
        length: builtupLength,
        diameter: 16,
        noOfBars: 4,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL10",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL11",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT3L3: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: builtupLength,
        breadth: 0.3,
        thickness: 0.3,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT3L4: [
      {
        id: "F12",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: builtupLength,
        breadth: 0.3,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    PT4L1: [
      {
        id: "PL1",
        type: "Stone",
        resource: "CumStoneFilling",
        description: "Filling",
        length: builtupLength,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: FillingRates.Stone.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "PL2",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL3",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL4",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL5",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT4L2: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: builtupWidth,
        diameter: 12,
        noOfBars: 3,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Distribution Bars",
        length: builtupLength,
        diameter: 16,
        noOfBars: 4,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL10",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL11",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT4L3: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: builtupLength,
        breadth: 0.3,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Helper",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT4L4: [
      {
        id: "F12",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: builtupLength,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    // plinth beam Length//

    // plinth beam breadth//

    PT1B1: [
      {
        id: "PL1",
        type: "Stone",
        resource: "CumStoneFilling",
        description: "Filling",
        length: builtupWidth,
        breadth: 0.23,
        thickness: 0.23,
        area: 0,
        rate: FillingRates.Stone.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "PL2",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL3",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL4",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL5",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT1B2: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: builtupLength,
        diameter: 12,
        noOfBars: 3,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Distribution Bars",
        length: builtupWidth,
        diameter: 16,
        noOfBars: 4,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL10",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL11",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    PT1B3: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: builtupWidth,
        breadth: 0.23,
        thickness: 0.23,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT1B4: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "M20Concrete",
        length: builtupWidth,
        breadth: 0.23,
        thickness: 0.23,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    PT2B1: [
      {
        id: "PL1",
        type: "Stone",
        resource: "CumStoneFilling",
        description: "Filling",
        length: builtupWidth,
        breadth: 0.26,
        thickness: 0.26,
        area: 0,
        rate: FillingRates.Stone.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "PL2",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL3",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL4",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL5",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT2B2: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: builtupLength,
        diameter: 12,
        noOfBars: 3,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Distribution Bars",
        length: builtupWidth,
        diameter: 16,
        noOfBars: 4,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL10",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL11",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT2B3: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: builtupWidth,
        breadth: 0.26,
        thickness: 0.26,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT2B4: [
      {
        id: "F12",
        type: "M20",
        resource: "CumM20Concrete",
        description: "M20Concrete",
        length: builtupWidth,
        breadth: 0.26,
        thickness: 0.26,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    PT3B1: [
      {
        id: "PL1",
        type: "Stone",
        resource: "CumStoneFilling",
        description: "Filling",
        length: builtupWidth,
        breadth: 0.3,
        thickness: 0.3,
        area: 0,
        rate: FillingRates.Stone.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "PL2",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL3",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL4",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL5",
        type: "Helper",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT3B2: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: builtupLength,
        diameter: 12,
        noOfBars: 3,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Distribution Bars",
        length: builtupWidth,
        diameter: 16,
        noOfBars: 4,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL10",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL11",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT3B3: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: builtupWidth,
        breadth: 0.3,
        thickness: 0.3,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT3B4: [
      {
        id: "F12",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 0,
        breadth: 0.3,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    PT4B1: [
      {
        id: "PL1",
        type: "Stone",
        resource: "CumStoneFilling",
        description: "Filling",
        length: builtupWidth,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: FillingRates.Stone.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "PL2",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL3",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL4",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL5",
        type: "Helper",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT4B2: [
      {
        id: "F4",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 4,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F5",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Main Bars",
        length: builtupLength,
        diameter: 12,
        noOfBars: 3,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F6",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Distribution Bars",
        length: builtupWidth,
        diameter: 16,
        noOfBars: 4,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F7",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F8",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "PL10",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "PL11",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT4B3: [
      {
        id: "F9",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: builtupWidth,
        breadth: 0.3,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "F10",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F11",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    PT4B4: [
      {
        id: "F12",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: builtupWidth,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "F13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "F14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    // plinth beam breadth//              //plinth beam breadth end//

    //underground Sewage tank //
    STO: [
      {
        id: "STO",
        type: "Excavation",
        resource: "CumExcavatorExcavatonMachine",
        description: "Excavation",
        length: 5,
        breadth: 5,
        thickness: 3,
        area: 0,
        rate: ExcavationMachineRates.Excavator.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST1",
        type: "Excavation",
        resource: "CumExcavationManual",
        description: "Excavation",
        length: 5,
        breadth: 5,
        thickness: 3,
        area: 0,
        rate: ExcavationManualRates.ToolsExcavation.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST2",
        type: "Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST3",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST4",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST5",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    ST1: [
      {
        id: "ST11",
        type: "M15",
        resource: "CumM15pccConcrete",
        description: "M15Concrete",
        length: 6,
        breadth: 6,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M15pcc.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST12",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    ST2: [
      {
        id: "ST21",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "Brickwork",
        length: 6,
        breadth: 3,
        thickness: 0.6,
        perimeter: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST22",
        type: "Brickwork Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST23",
        type: "Brickwork Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST24",
        type: "Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST25",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    ST3: [
      {
        id: "ST31",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "Brickwork",
        length: 6,
        breadth: 3,
        thickness: 0.6,
        perimeter: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST32",
        type: "Brickwork-Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST33",
        type: "Brickwork-Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST34",
        type: "Brickwork-Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST35",
        type: "Brickwork-Helper",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    ST4: [
      {
        id: "ST41",
        type: "Brickwork",
        resource: "Cuminch6Redclayper1000",
        description: "Baffle",
        length: 6,
        breadth: 3,
        thickness: 0.6,
        area: 0,
        rate: Redclayper1000Rates.inch6.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST42",
        type: "Brickwork-Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST43",
        type: "Brickwork-Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST44",
        type: "Brickwork-Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST45",
        type: "Brickwork-Helper",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    ST5: [
      {
        id: "ST51",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "Plaster",
        length: 6,
        breadth: 3,
        thickness: 0.012,
        area: 0,
        rate: PlasterManualRates.mm12.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST52",
        type: "Plaster-Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST53",
        type: "Plaster-Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST54",
        type: "Plaster-Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST55",
        type: "Plaster-Helper",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    ST6: [
      {
        id: "ST61",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 0,
        breadth: 0.3,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "ST62",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST63",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },

      {
        id: "ST71",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 2,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "ST72",
        type: "Dia8",
        resource: "KgsDia10Steel",
        description: "Main Bars",
        length: 6,
        diameter: 10,
        noOfBars: 8,
        rate: SteelRates.Dia10.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "ST73",
        type: "Dia8",
        resource: "KgsDia10Steel",
        description: "Distribution Bars",
        length: 3,
        diameter: 10,
        noOfBars: 16,
        rate: SteelRates.Dia10.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "ST76",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST77",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST78",
        type: "M20",
        resource: "CumM20Concrete",
        description: "M20Concrete",
        length: 6,
        breadth: 6,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST79",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST710",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //sewer pipes//
    DC1: [
      {
        id: "DC11",
        type: "Sewer-Conduit",
        resource: "mmm100SewerS40PVC",
        description: "Sewer",
        length: 5,
        area: 0,
        rate: SewerS40PVCRates.mm100.m,
        units: "m",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "DC12",
        type: "Sewer-Mason",
        resource: "DailyMason",
        description: "Sewer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "DC13",
        type: "Sewer-Helper",
        resource: "DailyHelper",
        description: "Sewer",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    DC2: [
      {
        id: "DC22",
        type: "Sewer-Mason",
        resource: "DailyMason",
        description: "Sewer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "DC23",
        type: "Sewer-Helper",
        resource: "DailyHelper",
        description: "Sewer",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //sewer pipes//

    //underground Sewage tank //

    //underground Water tank //
    WT1: [
      {
        id: "STO",
        type: "Excavation",
        resource: "CumExcavatorExcavatonMachine",
        description: "Excavation",
        length: 5,
        breadth: 5,
        thickness: 3,
        area: 0,
        rate: ExcavationMachineRates.Excavator.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST1",
        type: "Excavation",
        resource: "CumExcavationManual",
        description: "Excavation",
        length: 5,
        breadth: 5,
        thickness: 3,
        area: 0,
        rate: ExcavationManualRates.ToolsExcavation.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST2",
        type: "Excavation-Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST3",
        type: "Excavation-Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST4",
        type: "Excavation-Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST5",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    WT2: [
      {
        id: "ST11",
        type: "M15",
        resource: "CumM15pccConcrete",
        description: "M15Concrete",
        length: 6,
        breadth: 6,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M15pcc.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST12",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    WT3: [
      {
        id: "ST21",
        type: "Brickwork",
        resource: "Cuminch6Redclayper1000",
        description: "Brickwork",
        length: 6,
        breadth: 3,
        thickness: 0.6,
        perimeter: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST22",
        type: "Brickwork-Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST23",
        type: "Brickwork-Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST24",
        type: "Brickwork-Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST25",
        type: "Brickwork-Helper",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    WT4: [
      {
        id: "ST31",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "Brickwork",
        length: 6,
        breadth: 3,
        thickness: 0.6,
        perimeter: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST32",
        type: "Brickwork-Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST33",
        type: "Brickwork-Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST34",
        type: "Brickwork-Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST35",
        type: "Brickwork-Helper",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    WT5: [
      {
        id: "ST41",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "Plaster",
        length: 6,
        breadth: 3,
        thickness: 0.012,
        area: 0,
        rate: PlasterManualRates.mm12.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST42",
        type: "Plaster-Mason",
        resource: "DailyMason",
        description: "PCC",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST43",
        type: "Plaster-Helper",
        resource: "DailyHelper",
        description: "Clean-up",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST44",
        type: "Plaster-Helper",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST45",
        type: "Plaster-Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    WT6: [
      {
        id: "ST61",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 0,
        breadth: 0.3,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "ST62",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST63",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },

      {
        id: "ST71",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Stirrups&Hooks",
        length: 12,
        diameter: 8,
        noOfBars: 2,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "ST72",
        type: "Dia10",
        resource: "KgsDia10Steel",
        description: "Main Bars",
        length: 6,
        diameter: 10,
        noOfBars: 8,
        rate: SteelRates.Dia10.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "ST73",
        type: "Dia10",
        resource: "KgsDia10Steel",
        description: "Distribution Bars",
        length: 3,
        diameter: 10,
        noOfBars: 16,
        rate: SteelRates.Dia10.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "ST76",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST77",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "ST78",
        type: "M20",
        resource: "CumM20Concrete",
        description: "M20Concrete",
        length: 6,
        breadth: 6,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M20.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "ST79",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST710",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //underground Water tank //

    //Water tank plumbing pipes//
    WTPL2: [
      {
        id: "WTP11",
        type: "Plumbing",
        resource: "ftmm20CPVC",
        description: "Plumbing",
        length: 5,
        noOfBars: 2,
        rate: CPVCRates.mm20.m,
        units: "m",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "WTP12",
        type: "Plumbing-Mason",
        resource: "DailyMason",
        description: "Plumbing",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "WTP13",
        type: "Plumbing-Helper",
        resource: "DailyHelper",
        description: "Plumbing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    WTPL3: [
      {
        id: "WTP21",
        type: "Plumbing",
        resource: "ftmm32CPVC",
        description: "Plumbing",
        length: 5,
        area: 0,
        rate: CPVCRates.mm32.m,
        units: "m",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "WTP22",
        type: "Plumbing-Mason",
        resource: "DailyMason",
        description: "Plumbing",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "WTP23",
        type: "Plumbing-Helper",
        resource: "DailyHelper",
        description: "Plumbing",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Water tank plumbing pipes//

    //Filling//

    GP1: [
      {
        id: "GP10",
        type: "Soil",
        resource: "CumSoilFilling",
        description: "Totalarea-deduct",
        length: length,
        breadth: width,
        thickness: excavationDepth,
        area: 0,
        rate: FillingRates.Soil.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "GP11",
        type: "Filling",
        resource: "DailyMason",
        description: "Filling",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "GP12",
        type: "Filling",
        resource: "DailyHelper",
        description: "Filling",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "GP13",
        type: "Filling",
        resource: "DailyCompaction",
        description: "Manual",
        rate: MachinaryRates.Compaction.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "GP14",
        type: "Curing",
        resource: "DailyHelper",
        description: "Curing",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    GP2: [
      {
        id: "GP20",
        type: "Curing",
        resource: "KgsDia8Steel",
        description: "Main Bars",
        length: 12,
        diameter: 8,
        noOfBars: 20,
        rate: SteelRates.Dia8.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "GP21",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Distribution Bars",
        length: 12,
        diameter: 6,
        noOfBars: 20,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "GP22",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "GP23",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "GP24",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    GP3: [
      {
        id: "GP30",
        type: "M15",
        resource: "CumM15pccConcrete",
        description: "Floor Screed",
        length: length,
        breadth: width,
        thickness: 0.1,
        area: 0,
        rate: ConcreteRates.M15pcc.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "GP31",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "GP32",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    GP4: [
      {
        id: "GP40",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: length,
        breadth: width,
        thickness: 0.1,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "GP31",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "GP32",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    //ground slab //

    //Level-1 column 3x0.23x0.23 //type-1//
    GCT11: [
      {
        id: "GCT11",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "GCT12",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "GCT13",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "GCT14",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "GCT15",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    GCT12: [
      {
        id: "GCT110",
        type: "Formwork",
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
        id: "GCT111",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "GCT112",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    GCT13: [
      {
        id: "ST78",
        type: "M25",
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
        id: "ST79",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "ST710",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 column 3x0.23x0.23 //type-1//

    //Level-1 column 3x0.3x0.3 //type-2//
    CT21: [
      {
        id: "CT211",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "CT212",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "CT213",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "CT214",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "CT215",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    CT22: [
      {
        id: "CT221",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "CT222",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "CT223",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    CT23: [
      {
        id: "CT231",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "CT232",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "CT233",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 column 3x0.23x0.23 //type-2//

    //Level-1 column 3x0.3x0.45 //type-3//
    CT31: [
      {
        id: "CT311",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "CT312",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "CT313",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "CT314",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "CT315",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    CT32: [
      {
        id: "CT321",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.3,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "CT322",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "CT323",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    CT33: [
      {
        id: "CT331",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "CT332",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "CT333",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 column 3x0.23x0.23 //type-3//

    //Level-1 Beam Type-1//3x0.23x0.45
    BT11: [
      {
        id: "BT111",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3.2,
        breadth: 0.23,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "BT112",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "BT113",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    BT12: [
      {
        id: "BT121",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "BT122",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Bars",
        length: 3,
        diameter: 12,
        noOfBars: 4,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "BT123",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Bars",
        length: 3,
        diameter: 16,
        noOfBars: 6,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "BT124",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "BT125",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    BT13: [
      {
        id: "BT131",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    BT14: [
      {
        id: "BT141",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: 3,
        breadth: 0.23,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "BT142",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "BT143",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 Beam Type-1//
    //Level-1 Beam Type-2//
    BT21: [
      {
        id: "BT211",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3.2,
        breadth: 0.23,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "BT212",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "BT213",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    BT22: [
      {
        id: "BT221",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "BT222",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Bars",
        length: 3,
        diameter: 12,
        noOfBars: 4,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "BT223",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Bars",
        length: 3,
        diameter: 16,
        noOfBars: 6,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "BT224",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "BT225",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    BT23: [
      {
        id: "BT231",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    BT24: [
      {
        id: "BT241",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "BT242",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "BT243",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 Beam Type-2//

    //Level-1 SlabSteel @ -1//

    //Level-1 Bottom Bars slab //
    SLB1: [
      {
        id: "SLB11",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: firstFloor.length,
        breadth: firstFloor.width,
        thickness: 0.15,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "SLB12",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB13",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    SSL1: [
      {
        id: "SSL11",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Main Bars",
        length: firstFloor.length,
        diameter: 16,
        noOfBars: 16,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "SSL12",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "SSL13",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SSL14",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    SSB1: [
      {
        id: "SSB11",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Bottom Distri Bars",
        breadth: firstFloor.width,
        diameter: 12,
        noOfBars: 21,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "SSB12",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "SSB13",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SSB14",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 Bottom Bars slab //

    //Level-1 MEP //
    SLB3: [
      {
        id: "SLB31",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 10,
        totalCost: 0
      },
      {
        id: "SLB32",
        type: "Electrical-Mason",
        resource: "DailyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB33",
        type: "Electrical-mason",
        resource: "DailyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    SLB4: [
      {
        id: "SLB41",
        type: "Mechanical",
        resource: "mHangersMech",
        description: "Mechanical",
        rate: MechRates.Hangers.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB42",
        type: "Mechanical-Mason",
        resource: "DailyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB43",
        type: "Mechanical-Mason",
        resource: "DailyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    SLB5: [
      {
        id: "SLB51",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 10,
        totalCost: 0
      },
      {
        id: "SLB52",
        type: "Plumbing-Mason",
        resource: "DailyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB53",
        type: "Plumbing-Mason",
        resource: "DailyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    SLB6: [
      {
        id: "SLB61",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB62",
        type: "FireFighting-Mason",
        resource: "DailyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB63",
        type: "FireFighting-Mason",
        resource: "DailyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level-1 MEP //

    //Level-1 Top Bars lab //
    SSL2: [
      {
        id: "SSL21",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Main Bars",
        length: firstFloor.length,
        diameter: 16,
        noOfBars: 16,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "SSL22",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "SSL23",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SSL24",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    SLB2: [
      {
        id: "SLB21",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Bottom Distri Bars",
        breadth: firstFloor.width,
        diameter: 12,
        noOfBars: 21,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "SLB22",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "SLB23",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB24",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 Top Bars lab //

    //Level-1 Slab Concrete //
    SLB7: [
      {
        id: "SLB71",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB72",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: firstFloor.length,
        breadth: firstFloor.width,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "SLB73",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB74",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    //Level-1 Slab Concrete //
    SLB8: [
      {
        id: "SLB81",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: firstFloor.length,
        breadth: firstFloor.width,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "SLB82",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB83",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],

    SLB9: [
      {
        id: "SLB91",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB92",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    // Level-1 staircase ground //

    //Level-1 Foundation Steel//
    FFG10: [
      {
        id: "FFG101",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG102",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG103",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "FFG104",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "FFG105",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG106",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG107",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG108",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG109",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level-1 Foundation Steel//
    //Level-1 Formwork//
    FFG11: [
      {
        id: "SLB11",
        type: "Formwork",
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
        id: "SLB12",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SLB13",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    //Level-1 Formwork//

    //Level-1 Waist Slab Steel//
    FFG12: [
      {
        id: "FFG141",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG142",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG143",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "FFG144",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "FFG145",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG146",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG147",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG148",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG149",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 Waist Slab Steel//

    //Level-1 Landing Slab Steel//
    FFG13: [
      {
        id: "FFG121",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG122",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG123",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "FFG124",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "FFG125",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG126",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "FFG127",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG128",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG129",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 Landing Slab Steel//

    //Level-1 Beam Slab Steel//
    FFG14: [
      {
        id: "FFG141",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "FFG142",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "FFG143",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "FFG144",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG145",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG146",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level-1 Beam Slab Steel//
    //Level-1 Slab Concrete //
    FFG15: [
      {
        id: "FFG151",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG152",
        type: "M20",
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
        id: "FFG153",
        type: "M20",
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
        id: "FFG154",
        type: "M20",
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
        id: "FFG155",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG156",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    //Level-1 Slab Concrete //
    FFG16: [
      {
        id: "FFG161",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: builtupLength,
        breadth: builtupWidth,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "FFG162",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG163",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],

    FFG17: [
      {
        id: "FFG171",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "FFG172",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 second Flight //
    SFG12: [
      {
        id: "SFG121",
        type: "Formwork",
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
        id: "SFG122",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG123",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    //Level-1 Beam Steel//
    SFG13: [
      {
        id: "SFG131",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "SFG132",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "SFG133",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "SFG134",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG135",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG136",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level-1 Beam Steel//

    //Level-1 Landing Slab Steel//
    SFG14: [
      {
        id: "SFG141",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG142",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG143",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "SFG144",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "SFG145",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG146",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG147",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG148",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG149",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level-1 Landing Slab Steel//
    //Level-1 Waist Slab Steel//
    SFG15: [
      {
        id: "SFG151",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG152",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG153",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "SFG154",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "SFG155",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG156",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG157",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG158",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG159",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level-1 Waist Slab Steel//
    //Level-1 Landing Slab Steel//
    SFG16: [
      {
        id: "SFG161",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG162",
        type: "Dia25",
        resource: "KgsDia12Steel",
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
        id: "SFG163",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "SFG164",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "SFG165",
        type: "Dia25",
        resource: "KgsDia12Steel",
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
        id: "SFG166",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "SFG167",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG168",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG169",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 Landing Slab Steel//

    //Level-1 Staircase Concrete Second Flight //
    SFG17: [
      {
        id: "SFG171",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG172",
        type: "M20",
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
        id: "SFG173",
        type: "M20",
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
        id: "SFG174",
        type: "M20",
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
        id: "SFG175",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG176",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    //Level-1 Staircase Concrete Second Flight //
    SFG18: [
      {
        id: "SFG181",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: builtupLength,
        breadth: builtupWidth,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "SFG182",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG183",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],

    SFG19: [
      {
        id: "SFG191",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "SFG192",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 End Second Flight //

    //Level-1 Elevator //

    //Level-1 Foundation Steel//
    EL11: [
      {
        id: "EL111",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "EL112",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "EL113",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "EL114",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "FFG15",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "EL116",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "EL117",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "EL118",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level-1 Foundation Steel//

    //Level-1 Elevator Columns Concrete //
    EL12: [
      {
        id: "EL121",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    EL13: [
      {
        id: "EL131",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "EL132",
        type: "M20",
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
        id: "EL133",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "EL134",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level-1 Elevator Columns Concrete //

    //Level-1 Elevator Columns Steel //
    EL14: [
      {
        id: "EL141",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "EL142",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "EL143",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "EL144",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "EL145",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    EL15: [
      {
        id: "EL150",
        type: "Formwork",
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
        id: "EL151",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {        
        id: "EL152",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    EL16: [
      {
        id: "EL168",
        type: "M25",
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
        id: "EL169",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "EL1610",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 Elevator Columns Steel //

    //Level-1 Elevator Beam Concrete//
    EL17: [
      {
        id: "EL171",
        type: "Formwork",
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
        id: "EL172",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "EL173",
        type: "Helper",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    EL18: [
      {
        id: "EL181",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "EL182",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "EL183",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "EL184",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "EL185",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    EL19: [
      {
        id: "EL191",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    EL110: [
      {
        id: "EL1101",
        type: "M30",
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
        id: "EL1102",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "EL1103",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level-1 Elevator Beam Concrete//

    //Level2//

    //Level2 column 3x0.23x0.23 //type-1//
    L2T11: [
      {
        id: "L2T111",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2T112",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L2T113",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2T114",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2T115",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    L2T12: [
      {
        id: "L2T120",
        type: "Formwork",
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
        id: "L2T121",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2T122",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    L2T13: [
      {
        id: "L2T138",
        type: "M25",
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
        id: "L2T139",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2T1310",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    //Level2 column 3x0.23x0.23 //type-1//

    //Level2 column 3x0.3x0.3 //type-2//
    L2T21: [
      {
        id: "L2T211",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2T212",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L2T213",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2T214",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2T215",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2T22: [
      {
        id: "L2T221",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2T222",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2T223",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2T23: [
      {
        id: "L2T231",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L2T232",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2T233",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level2 column 3x0.23x0.23 //type-2//

    //Level2 column 3x0.3x0.45 //type-3//
    L2T31: [
      {
        id: "L2T311",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2T312",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L2T313",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2T314",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2T315",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2T32: [
      {
        id: "L2T321",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.3,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2T322",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2T323",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2T33: [
      {
        id: "L2T331",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L2T332",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2T333",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level2 column 3x0.23x0.23 //type-3//

    //Level2 Beam Type-1//3x0.23x0.45
    L2BT11: [
      {
        id: "L2BT111",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3.2,
        breadth: 0.23,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2BT112",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2BT113",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2BT12: [
      {
        id: "L2BT121",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2BT122",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Bars",
        length: 3,
        diameter: 12,
        noOfBars: 4,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2BT123",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Bars",
        length: 3,
        diameter: 16,
        noOfBars: 6,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2BT124",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2BT125",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2BT13: [
      {
        id: "L2BT131",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    L2BT14: [
      {
        id: "L2BT141",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: 3,
        breadth: 0.23,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L2BT142",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2BT143",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level2 Beam Type-1//
    //Level2 Beam Type-2//
    L2BT21: [
      {
        id: "L2BT211",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3.2,
        breadth: 0.23,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2BT212",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2BT213",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2BT22: [
      {
        id: "L2BT221",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2BT222",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Bars",
        length: 3,
        diameter: 12,
        noOfBars: 4,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2BT223",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Bars",
        length: 3,
        diameter: 16,
        noOfBars: 6,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2BT224",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2BT225",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2BT23: [
      {
        id: "L2BT231",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    L2BT24: [
      {
        id: "L2BT241",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L2BT242",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2BT243",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level2 Beam Type-2//

    //Level2 SlabSteel @ -1//

    //Level2 Bottom Bars slab //
    L2SLB1: [
      {
        id: "L2SLB11",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: secondFloor.length,
        breadth: secondFloor.width,
        thickness: 0.15,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2SLB12",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLB13",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    L2SSL1: [
      {
        id: "L2SSL11",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Main Bars",
        length: secondFloor.length,
        diameter: 16,
        noOfBars: 16,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2SSL12",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "L2SSL13",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SSL14",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2SSB1: [
      {
        id: "L2SSB11",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Bottom Distri Bars",
        breadth: secondFloor.width,
        diameter: 12,
        noOfBars: 21,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2SSB12",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "L2SSB13",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SSB14",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level2 Bottom Bars slab //

    //Level2 MEP //
    L2SLB3: [
      {
        id: "L2SLB31",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 10,
        totalCost: 0
      },
      {
        id: "L2SLB32",
        type: "Electrical-Mason",
        resource: "DailyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLB33",
        type: "Electrical-Helper",
        resource: "DailyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2SLB4: [
      {
        id: "L2SLB41",
        type: "Mechanical",
        resource: "mHangersMech",
        description: "Mechanical",
        rate: MechRates.Hangers.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLB42",
        type: "Mechanical-Mason",
        resource: "DailyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLB43",
        type: "Mechanical-Helper",
        resource: "DailyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    L2SLB5: [
      {
        id: "L2SLB51",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 10,
        totalCost: 0
      },
      {
        id: "L2SLB52",
        type: "Plumbing-Mason",
        resource: "DailyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLB53",
        type: "Plumbing-Mason",
        resource: "DailyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    L2SLB6: [
      {
        id: "L2SLB61",
        type: "FireFighting-Mason",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLB62",
        type: "FireFighting-Mason",
        resource: "DailyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLB63",
        type: "FireFighting-Mason",
        resource: "DailyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level2 MEP //

    //Level2 Top Bars lab //
    L2SSL2: [
      {
        id: "L2SSL21",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Main Bars",
        length: secondFloor.length,
        diameter: 16,
        noOfBars: 16,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2SSL22",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "L2SSL23",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SSL24",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2SLB2: [
      {
        id: "L2SLB21",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Bottom Distri Bars",
        breadth: secondFloor.width,
        diameter: 12,
        noOfBars: 21,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L2SLB22",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "L2SLB23",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLB24",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level2 Top Bars lab //

    //Level2 Slab Concrete //
    L2SLC1: [
      {
        id: "L2SLC11",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLC12",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: secondFloor.length,
        breadth: secondFloor.width,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L2SLC13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLC14",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    //Level2 Slab Concrete //
    L2SLC2: [
      {
        id: "L2SLC21",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: secondFloor.length,
        breadth: secondFloor.width,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L2SLC22",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLC23",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],

    L2SLC3: [
      {
        id: "L2SLC31",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SLC32",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    // Level2 staircase//

    //Level2 Formwork//
    L2FF1: [
      {
        id: "L2FF11",
        type: "Formwork",
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
        id: "L2FF12",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2FF13",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    //Level2 Formwork//
    //Level2 Landing Slab//
    L2FF2: [
      {
        id: "L2FF21",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF22",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF23",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2FF24",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2FF25",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF26",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF27",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2FF28",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level2 Landing Slab Steel//

    //Level2 Waist Slab Steel//
    L2FF3: [
      {
        id: "L2FF31",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF32",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF33",
        type: "Dia12",
        resource: "KgsDia8Steel",
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
        id: "L2FF34",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2FF35",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF36",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF37",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2FF38",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level2 Waist Slab Steel//

    //Level2 Landing Slab Steel//
    L2FF4: [
      {
        id: "L2FF41",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF42",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF43",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2FF44",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2FF45",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF46",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2FF47",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2FF48",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level2 Landing Slab Steel//

    //Level2 Beam Slab Steel//
    L2FF5: [
      {
        id: "L2FF51",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L2FF52",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L2FF53",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2FF54",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2FF55",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level2 Beam Slab Steel//
    //Level2 Slab Concrete //
    L2FF6: [
      {
        id: "L2FF61",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2FF62",
        type: "M20",
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
        id: "L2FF63",
        type: "M20",
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
        id: "L2FF64",
        type: "M20",
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
        id: "L2FF65",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2FF66",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 6,
        totalCost: 0
      }
    ],
    //Level2 Slab Concrete //
    L2FF7: [
      {
        id: "L2FF71",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: builtupLength,
        breadth: builtupWidth,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L2FF72",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2FF73",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],

    L2FFG18: [
      {
        id: "L2FFG181",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2FFG182",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level2 second Flight //
    L2SF1: [
      {
        id: "L2SF11",
        type: "Formwork",
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
        id: "L2SF12",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF13",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    //Level2 Beam Steel//
    L2SF2: [
      {
        id: "L2SF21",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L2SF22",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L2SF23",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2SF24",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF25",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF26",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level2 Beam Steel//

    //Level2 Landing Slab Steel//
    L2SF3: [
      {
        id: "L2SF31",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF32",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF33",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2SF34",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2SF35",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF36",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF37",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF38",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF39",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level2 Landing Slab Steel//
    //Level2 Waist Slab Steel//
    L2SF4: [
      {
        id: "L2SF41",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF42",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF43",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2SF44",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2SF45",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF46",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF47",        
        type: "Steelfixer",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF48",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF49",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level2 Waist Slab Steel//
    //Level2 Landing Slab Steel//
    L2SF5: [
      {
        id: "L2SF51",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF52",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF53",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2SF54",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2SF55",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF56",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2SF57",
        type: "BarBender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF58",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF59",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level2 Landing Slab Steel//

    //Level2 Staircase Concrete Second Flight //
    L2SF6: [
      {
        id: "L2SF61",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF62",
        type: "M20",
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
        id: "L2SF63",
        type: "M20",
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
        id: "L2SF64",
        type: "M20",
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
        id: "L2SF65",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF66",
        type: "Mason",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    //Level2 Staircase Concrete Second Flight //
    L2SF7: [
      {
        id: "L2SF71",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: builtupLength,
        breadth: builtupWidth,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L2SF72",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {        
        id: "L2SF73",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],

    L2SF8: [
      {
        id: "L2SF81",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2SF82",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level2 End Second Flight //

    //Level2 Elevator //

    //Level2 Elevator Columns Steel //
    L2EL4: [
      {
        id: "L2EL41",
        type: "Dia8",
        resource: "KgsDia8Steel",        
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
        id: "L2EL42",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L2EL43",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2EL44",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2EL45",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2EL5: [
      {
        id: "L2EL50",
        type: "Formwork",
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
        id: "L2EL51",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2EL52",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2EL6: [
      {
        id: "L2EL68",
        type: "M25",
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
        id: "L2EL69",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2EL610",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level2 Elevator Columns Steel //

    //Level2 Elevator Beam Concrete//
    L2EL7: [
      {
        id: "L2EL71",
        type: "Formwork",
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
        id: "L2EL72",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2EL73",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2EL8: [
      {
        id: "L2EL81",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L2EL82",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L2EL83",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L2EL84",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2EL85",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L2EL9: [
      {
        id: "L2EL91",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    L2EL10: [
      {
        id: "L2EL101",
        type: "M30",
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
        id: "L2EL102",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L2EL103",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level2 Elevator Beam Concrete//

    //Level2 end//

    //Level3//

    //Level3 column 3x0.23x0.23 //type-1//
    L3T11: [
      {
        id: "L3T111",
        type: "Dia8",        
        resource: "KgsDia8Steel",
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
        id: "L3T112",
        type: "Dia16",        
        resource: "KgsDia16Steel",
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
        id: "L3T113",
        type: "Dia12", 
        resource: "KgsDia12Steel",
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
        id: "L3T114",
        type: "Steelfixer", 
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3T115",
        type: "Steelfixer", 
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    L3T12: [
      {
        id: "L3T120",
        type: "Formwork", 
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
        id: "L3T121",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3T122",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    L3T13: [
      {
        id: "L3T138",
        type: "M25",
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
        id: "L3T139",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3T1310",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    //Level3 column 3x0.23x0.23 //type-1//

    //Level3 column 3x0.3x0.3 //type-2//
    L3T21: [
      {
        id: "L3T211",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3T212",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L3T213",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3T214",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3T215",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3T22: [
      {
        id: "L3T221",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3T222",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3T223",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3T23: [
      {
        id: "L3T231",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L3T232",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3T233",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level3 column 3x0.23x0.23 //type-2//

    //Level3 column 3x0.3x0.45 //type-3//
    L3T31: [
      {
        id: "L3T311",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3T312",        
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L3T313",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3T314",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3T315",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3T32: [
      {
        id: "L3T321",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.3,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, 
      //qty and cost will be calculated in code
      {
        id: "L3T322",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3T323",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3T33: [
      {
        id: "L3T331",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L3T332",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3T333",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level3 column 3x0.23x0.23 //type-3//

    //Level3 Beam Type-1//3x0.23x0.45
    L3BT11: [
      {
        id: "L3BT111",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3.2,
        breadth: 0.23,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3BT112",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3BT113",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3BT12: [
      {
        id: "L3BT121",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3BT122",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Bars",
        length: 3,
        diameter: 12,
        noOfBars: 4,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3BT123",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Bars",
        length: 3,
        diameter: 16,
        noOfBars: 6,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3BT124",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3BT125",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3BT13: [
      {
        id: "L3BT131",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    L3BT14: [
      {
        id: "L3BT141",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: 3,
        breadth: 0.23,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L3BT142",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3BT143",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level3 Beam Type-1//
    //Level3 Beam Type-2//
    L3BT21: [
      {
        id: "L3BT211",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3.2,
        breadth: 0.23,
        thickness: 0.45,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3BT212",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3BT213",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3BT22: [
      {
        id: "L3BT221",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3BT222",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Bars",
        length: 3,
        diameter: 12,
        noOfBars: 4,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3BT223",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Bars",
        length: 3,
        diameter: 16,
        noOfBars: 6,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3BT224",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3BT225",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3BT23: [
      {
        id: "L3BT231",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    L3BT24: [
      {
        id: "L3BT241",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.45,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L3BT242",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3BT243",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level3 Beam Type-2//

    //Level3 SlabSteel @ -1//

    //Level3 Bottom Bars slab //
    L3SLB1: [
      {
        id: "L3SLB11",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: thirdFloor.length,
        breadth: thirdFloor.width,
        thickness: 0.15,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3SLB12",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLB13",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    L3SSL1: [
      {
        id: "L3SSL11",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Main Bars",
        length: thirdFloor.length,
        diameter: 16,
        noOfBars: 16,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3SSL12",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "L3SSL13",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SSL14",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3SSB1: [
      {
        id: "L3SSB11",
        type: "Dia8",
        resource: "KgsDia8Steel",
        description: "Bottom Distri Bars",
        breadth: thirdFloor.width,
        diameter: 12,
        noOfBars: 21,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3SSB12",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "L3SSB13",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SSB14",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level3 Bottom Bars slab //

    //Level3 MEP //
    L3SLB3: [
      {
        id: "L3SLB31",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 10,
        totalCost: 0
      },
      {
        id: "L3SLB32",
        type: "Electrician",
        resource: "DailyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLB33",
        type: "Electrician",
        resource: "DailyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3SLB4: [
      {
        id: "L3SLB41",
        type: "Mechanical",
        resource: "mHangersMech",
        description: "Mechanical",
        rate: MechRates.Hangers.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLB42",
        type: "Mechanical-Mason",
        resource: "DailyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLB43",
        type: "Mechanical-Helper",
        resource: "DailyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    L3SLB5: [
      {
        id: "L3SLB51",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 10,
        totalCost: 0
      },
      {
        id: "L3SLB52",
        type: "Plumber",
        resource: "DailyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLB53",
        type: "Plumber",
        resource: "DailyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    L3SLB6: [
      {
        id: "L3SLB61",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLB62",
        type: "FireFighting-Mason",
        resource: "DailyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLB63",
        type: "FireFighting-Helper",
        resource: "DailyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level3 MEP //

    //Level3 Top Bars lab //
    L3SSL2: [
      {
        id: "L3SSL21",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Main Bars",
        length: thirdFloor.length,
        diameter: 16,
        noOfBars: 16,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3SSL22",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "L3SSL23",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SSL24",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    L3SLB2: [
      {
        id: "L3SLB21",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Bottom Distri Bars",
        breadth: thirdFloor.width,
        diameter: 12,
        noOfBars: 21,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "L3SLB22",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "L3SLB23",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLB24",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level3 Top Bars lab //

    //Level3 Slab Concrete //
    L3SLC1: [
      {
        id: "L3SLC11",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLC12",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: thirdFloor.length,
        breadth: thirdFloor.width,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L3SLC13",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLC14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    //Level3 Slab Concrete //
    L3SLC2: [
      {
        id: "L3SLC21",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: thirdFloor.length,
        breadth: thirdFloor.width,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L3SLC22",
        type: "Helper",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLC23",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],

    L3SLC3: [
      {
        id: "L3SLC31",
        type: "Dia16",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SLC32",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    // Level3 staircase ground //

    //Level3 Formwork//
    L3FF1: [
      {
        id: "L3FF11",
        type: "Formwork",
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
        id: "L3FF12",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3FF13",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    //Level3 Formwork//

    //Level3 Landing Slab Steel//
    L3FF2: [
      {
        id: "L3FF21",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF22",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF23",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3FF24",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3FF25",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF26",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF27",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3FF28",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level3 Landing Slab Steel//

    //Level3 Waist Slab Steel//
    L3FF3: [
      {
        id: "L3FF31",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF32",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF33",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3FF34",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3FF35",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF36",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF37",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3FF38",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level3 Waist Slab Steel//

    //Level3 Landing Slab Steel//
    L3FF4: [
      {
        id: "L3FF41",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF42",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF43",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3FF44",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3FF45",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF46",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3FF47",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3FF48",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level3 Landing Slab Steel//

    //Level3 Beam Slab Steel//
    L3FF5: [
      {
        id: "L3FF51",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L3FF52",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L3FF53",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3FF54",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3FF55",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level3 Beam Slab Steel//
    //Level3 Slab Concrete //
    L3FF6: [
      {
        id: "L3FF61",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3FF62",
        type: "M20",
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
        id: "L3FF63",
        type: "M20",
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
        id: "L3FF64",
        type: "M20",
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
        id: "L3FF65",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3FF66",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 6,
        totalCost: 0
      }
    ],
    //Level3 Slab Concrete //
    L3FF7: [
      {
        id: "L3FF71",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: builtupLength,
        breadth: builtupWidth,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L3FF72",
        type: "Helper",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3FF73",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    L3FF8: [
      {
        id: "L3FF81",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3FF82",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level3 second Flight //
    L3SF1: [
      {
        id: "L3SF11",
        type: "Formwork",
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
        id: "L3SF12",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF13",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 4,
        totalCost: 0
      }
    ],
    //Level3 Beam Steel//
    L3SF2: [
      {
        id: "L3SF21",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L3SF22",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L3SF23",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3SF24",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF25",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF26",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level3 Beam Steel//

    //Level3 Landing Slab Steel//
    L3SF3: [
      {
        id: "L3SF31",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF32",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF33",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3SF34",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3SF35",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF36",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF37",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF38",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF39",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level3 Landing Slab Steel//
    //Level3 Waist Slab Steel//
    L3SF4: [
      {
        id: "L3SF41",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF42",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF43",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3SF44",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3SF45",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF46",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF47",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF48",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF49",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level3 Waist Slab Steel//
    //Level3 Landing Slab Steel//
    L3SF5: [
      {
        id: "L3SF51",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF52",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF53",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3SF54",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3SF55",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF56",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3SF57",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF58",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF59",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 3,
        totalCost: 0
      }
    ],
    //Level3 Landing Slab Steel//

    //Level3 Staircase Concrete Second Flight //
    L3SF6: [
      {
        id: "L3SF61",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF62",
        type: "M20",
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
        id: "L3SF63",
        type: "M20",
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
        id: "L3SF64",
        type: "M20",
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
        id: "L3SF65",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF66",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 5,
        totalCost: 0
      }
    ],
    //Level3 Staircase Concrete Second Flight //
    L3SF7: [
      {
        id: "L3SF71",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: builtupLength,
        breadth: builtupWidth,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "L3SF72",
        type: "Helper",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF73",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 3,
        totalCost: 0
      }
    ],

    L3SF8: [
      {
        id: "L3SF81",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3SF82",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level3 End Second Flight //

    //Level3 Elevator //

    //Level3 Elevator Columns Steel //
    L3EL4: [
      {
        id: "L3EL41",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3EL42",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L3EL43",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3EL44",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3EL45",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    L3EL5: [
      {
        id: "L3EL50",
        type: "Formwork",
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
        id: "L3EL51",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3EL52",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    L3EL6: [
      {
        id: "L3EL61",
        type: "M25",
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
        id: "L3EL62",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3EL63",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level3 Elevator Columns Steel //

    //Level3 Elevator Beam Concrete//
    L3EL7: [
      {
        id: "L3EL71",
        type: "Formwork",
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
        id: "L3EL72",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3EL73",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    L3EL8: [
      {
        id: "L3EL81",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "L3EL82",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "L3EL83",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "L3EL84",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3EL85",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    L3EL9: [
      {
        id: "L3EL9",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    L3EL10: [
      {
        id: "L3EL101",
        type: "M30",
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
        id: "L3EL102",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "L3EL103",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level3 Elevator Beam Concrete//

    //Watertank Shear Walls//

    //Watertank CC column 3x0.23x0.23 //type-1// 4nos
    OT1: [
      {
        id: "OT11",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "OT12",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "OT13",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "OT14",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT15",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    OT2: [
      {
        id: "OT21",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT22",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT23",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    OT3: [
      {
        id: "OT31",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "OT32",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT33",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Watertank CC column 3x0.23x0.23 //type-1//

    //Watertank CC Level3 Beam Type-1//3x0.23x0.45
    OT4: [
      {
        id: "OT41",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.25,
        thickness: 0.25,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT42",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT43",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    OT5: [
      {
        id: "OT51",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "OT52",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Bars",
        length: 3,
        diameter: 12,
        noOfBars: 4,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT53",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Bars",
        length: 3,
        diameter: 16,
        noOfBars: 6,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT54",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT55",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    OT6: [
      {
        id: "OT61",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT62",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: 3,
        breadth: 0.25,
        thickness: 0.25,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "OT63",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT64",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Watertank CC Level3 Beam Type-1//

    // Level3 Watertank Slab//
    //Formwork
    OT7: [
      {
        id: "OT71",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 4,
        breadth: 3,
        thickness: 0.15,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT72",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT73",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Steel
    OT8: [
      {
        id: "OT81",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Main Bars",
        length: 4,
        diameter: 12,
        noOfBars: 7,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT82",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Distri Bars",
        length: 3,
        diameter: 8,
        noOfBars: 11,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code

      {
        id: "OT83",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Top Main Bars",
        length: 4,
        diameter: 12,
        noOfBars: 7,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT84",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Distri Bars",
        breadth: 3,
        diameter: 8,
        noOfBars: 11,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT85",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "OT86",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT87",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level3 Top Bars lab //

    //Level3 Slab Concrete //
    OT9: [
      {
        id: "OT91",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT92",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 4,
        breadth: 3,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "OT93",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT94",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level3 Slab Concrete //
    OT10: [
      {
        id: "OT101",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: 4,
        breadth: 3,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "OT102",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level3 Shearwalls //
    OT11: [
      {
        id: "OT111",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Main Bars",
        length: 4,
        diameter: 12,
        noOfBars: 7,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT112",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Distri Bars",
        length: 3,
        diameter: 8,
        noOfBars: 11,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code

      {
        id: "OT113",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Top Main Bars",
        length: 4,
        diameter: 12,
        noOfBars: 7,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT114",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Distri Bars",
        breadth: 3,
        diameter: 8,
        noOfBars: 11,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT115",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Anchorage bars",
        length: 1.2,
        diameter: 12,
        noOfBars: 2,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT116",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Ld bars",
        length: 1.2,
        diameter: 12,
        noOfBars: 2,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT117",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT118",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT119",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    OT12: [
      {
        id: "OT121",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 4,
        breadth: 3,
        thickness: 0.21,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OT122",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT123",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    OT13: [
      {
        id: "OT131",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT132",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 4,
        breadth: 3,
        thickness: 0.2,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "OT133",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OT134",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    OT14: [
      {
        id: "OT14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    // Level3 Watertank ShearWalls end//

    // Level3 Watertank Brickwalls start//
    // Level3 Watertank Brickwalls start//
    OTBW1: [
      {
        id: "OTBW11",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "OTBW12",
        type: "Dia16",
        resource: "KgsDia16Steel",
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
        id: "OTBW13",
        type: "Dia12",
        resource: "KgsDia12Steel",
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
        id: "OTBW14",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW15",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    OTBW2: [
      {
        id: "OTBW21",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW22",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW23",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    OTBW3: [
      {
        id: "OTBW31",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 3,
        breadth: 0.3,
        thickness: 0.3,
        area: 0,
        rate: ConcreteRates.M25.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "OTBW32",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW33",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Watertank CC column 3x0.23x0.23 //type-1//

    //Watertank CC Level3 Beam Type-1//3x0.23x0.45
    OTBW4: [
      {
        id: "OTBW41",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 3,
        breadth: 0.25,
        thickness: 0.25,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW42",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW43",
        type: "Carpenter",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    OTBW5: [
      {
        id: "OTBW51",
        type: "Dia8",
        resource: "KgsDia8Steel",
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
        id: "OTBW52",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Bars",
        length: 3,
        diameter: 12,
        noOfBars: 4,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW53",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Bars",
        length: 3,
        diameter: 16,
        noOfBars: 6,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW54",
        type: "Steelfixer",
        resource: "HourlyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW55",
        type: "Steelfixer",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    OTBW6: [
      {
        id: "OTBW61",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW62",
        type: "M30",
        resource: "CumM30Concrete",
        description: "M30Concrete",
        length: 3,
        breadth: 0.25,
        thickness: 0.25,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "OTBW63",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW64",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Watertank CC Level3 Beam Type-1//

    // Level3 Watertank Slab//
    OTBW7: [
      {
        id: "OTBW71",
        type: "Formwork",
        resource: "SqmFootingMetalFormwork",
        description: "Metal",
        length: 4,
        breadth: 3,
        thickness: 0.15,
        perimeter: 0,
        rate: MetalFormworkRates.Footing.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW72",
        type: "Carpenter",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW73",
        type: "Carpenter",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    OTBW8: [
      {
        id: "OTBW81",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Main Bars",
        length: 4,
        diameter: 12,
        noOfBars: 7,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW82",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Bottom Distri Bars",
        length: 3,
        diameter: 8,
        noOfBars: 11,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code

      {
        id: "OTBW83",
        type: "Dia16",
        resource: "KgsDia16Steel",
        description: "Top Main Bars",
        length: 4,
        diameter: 12,
        noOfBars: 7,
        rate: SteelRates.Dia16.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW84",
        type: "Dia12",
        resource: "KgsDia12Steel",
        description: "Top Distri Bars",
        breadth: 3,
        diameter: 8,
        noOfBars: 11,
        rate: SteelRates.Dia12.Kgs,
        units: "Kgs",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW85",
        type: "Barbender",
        resource: "DailyBarbender",
        description: "BarBender",
        rate: BarBenderRates.Daily,
        units: "Day",
        quantity: 8,
        totalCost: 0
      },
      {
        id: "OTBW86",
        type: "Steelfixer",
        resource: "DailyMason",
        description: "Steelfixer",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW87",
        type: "Steelfixer",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    //Level3 Top Bars lab //

    //Level3 Slab Concrete //
    OTBW9: [
      {
        id: "OTBW91",
        type: "Inspection",
        resource: "VisitEngineer",
        description: "Inspection",
        rate: EngineerRates.Inspection.Visit,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW92",
        type: "M25",
        resource: "CumM25Concrete",
        description: "M25Concrete",
        length: 4,
        breadth: 3,
        thickness: 0.15,
        area: 0,
        rate: ConcreteRates.M30.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "OTBW93",
        type: "Mason",
        resource: "DailyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW94",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Level3 Slab Concrete //
    OTBW10: [
      {
        id: "OTBW101",
        type: "Curing",
        resource: "CumWater",
        description: "Curing Water",
        length: 4,
        breadth: 3,
        thickness: 0.15,
        area: 0,
        rate: WaterRates.Water.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "OTBW102",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    OTBW11: [
      {
        id: "OTBW11",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    // Level3 Watertank Brickwalls// //
    OTBW12: [
      {
        id: "OTBW121",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "Brickwork Walls",
        length: 4,
        breadth: 3,
        thickness: 0.15,
        perimeter: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW122",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    OTBW13: [
      {
        id: "OTBW131",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "Plaster",
        length: 4,
        breadth: 3,
        thickness: 0.012,
        perimeter: 0,
        rate: PlasterManualRates.mm12.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "OTBW132",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "OTBW133",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    OTBW14: [
      {
        id: "OTBW14",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    OTBW15: [
      {
        id: "OTBW15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    // Level3 Watertank Brickwalls end//

    //Finishes Rough-in start//

    //Ground Living//Finishes Rough-in start//
    G1BW1: [
      {
        id: "G1BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G1BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G1BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G1BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G1BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G1BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G1EL1: [
      {
        id: "G1EL11",
        type: "Electrical",
        resource: "UnitJunctionBoxElec",
        description: "Electrical",
        rate: ElecRates.JunctionBox.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G1EL12",
        type: "Electrical",
        resource: "mPullwiresconduitsElec",
        description: "Electrical",
        rate: ElecRates.Pullwiresconduits.m,
        units: "m",
        quantity: 12,
        totalCost: 0
      },
      {
        id: "G1EL13",
        type: "Electrical",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G1EL14",
        type: "Electrical",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G1MD1: [
      {
        id: "G1MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G1MD12",
        type: "Mechanical",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G1MD13",
        type: "Mechanical",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G1PC1: [
      {
        id: "G1PC11",
        type: "Plumbing",
        resource: "CeraTapsPlumb",
        description: "Plumbing",
        rate: PlumbRates.taps.Cera,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G1PC12",
        type: "Plumbing",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G1PC13",
        type: "Plumbing",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G1FF1: [
      {
        id: "G1FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G1FF12",
        type: "FireFighting",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G1FF13",
        type: "FireFighting",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G1DFI1: [
      {
        id: "G1DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G1WFI1: [
      {
        id: "G1WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G1PL1: [
      {
        id: "G1PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        area: 0,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        area: 0,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        area: 0,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        area: 0,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G1PR1: [
      {
        id: "C153A1",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "C153A2",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "C153A3",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "C153A4",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "C153A5",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G1PT1: [
      {
        id: "G1PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G1WP1: [
      {
        id: "G1WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 4,
        breadth: 4,
        area: 16,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G1GR1: [
      {
        id: "G1GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 4,
        breadth: 4,
        area: 16,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G1TL1: [
      {
        id: "G1TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 4,
        breadth: 4,
        area: 16,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G1PTF1: [
      {
        id: "G1PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G1PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G1PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Living//Finishes Rough-in end//

    //Ground Kitchen//Finishes Rough-in start//
    G2BW1: [
      {
        id: "G2BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G2BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G2BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G2BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G2BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G2BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G2EL1: [
      {
        id: "G2EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G2EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G2EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G2MD1: [
      {
        id: "G2MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G2MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G2MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G2PC1: [
      {
        id: "G2PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G2PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G2PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G2FF1: [
      {
        id: "G2FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G2FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G2FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G2DFI1: [
      {
        id: "G2DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G2WFI1: [
      {
        id: "G2WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G2PL1: [
      {
        id: "G2PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G2PR1: [
      {
        id: "G2PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G2PT1: [
      {
        id: "G2PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G2WP1: [
      {
        id: "G2WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 3,
        breadth: 4,
        area: 12,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G2GR1: [
      {
        id: "G2GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 3,
        breadth: 4,
        area: 12,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G2TL1: [
      {
        id: "G2TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 3,
        breadth: 4,
        area: 12,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G2PTF1: [
      {
        id: "G2PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G2PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G2PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Kitchen//Finishes Rough-in end//

    //Ground Bedroom1//Finishes Rough-in start//
    G3BW1: [
      {
        id: "G3BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G3BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G3BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G3BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G3BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G3BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G3EL1: [
      {
        id: "G3EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G3EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G3EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G3MD1: [
      {
        id: "G3MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G3MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G3MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G3PC1: [
      {
        id: "G3PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G3PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G3PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G3FF1: [
      {
        id: "G3FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G3FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G3FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G3DFI1: [
      {
        id: "G3DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G3WFI1: [
      {
        id: "G3WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G3PL1: [
      {
        id: "G3PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G3PR1: [
      {
        id: "G3PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G3PT1: [
      {
        id: "G3PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G3WP1: [
      {
        id: "G3WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 3,
        breadth: 3,
        area: 9,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G3GR1: [
      {
        id: "G3GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 3,
        breadth: 3,
        area: 9,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G3TL1: [
      {
        id: "G3TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 3,
        breadth: 3,
        area: 9,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G3PTF1: [
      {
        id: "G3PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 3,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 3,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 3,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 3,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G3PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G3PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Bedroom1//Finishes Rough-in end//

    //Ground Bedroom2//Finishes Rough-in start//
    G4BW1: [
      {
        id: "G4BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G4BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G4BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G4BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G4BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G4BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G4EL1: [
      {
        id: "G4EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G4EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G4EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G4MD1: [
      {
        id: "G4MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G4MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G4MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G4PC1: [
      {
        id: "G4PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G4PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G4PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G4FF1: [
      {
        id: "G4FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G4FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G4FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G4DFI1: [
      {
        id: "G4DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G4WFI1: [
      {
        id: "G4WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G4PL1: [
      {
        id: "G4PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G4PR1: [
      {
        id: "G4PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G4PT1: [
      {
        id: "G4PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G4WP1: [
      {
        id: "G4WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 3,
        breadth: 3,
        area: 9,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G4GR1: [
      {
        id: "G4GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 3,
        breadth: 3,
        area: 9,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G4TL1: [
      {
        id: "G4TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 3,
        breadth: 3,
        area: 9,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G4PTF1: [
      {
        id: "G4PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G4PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G4PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Bedroom2//Finishes Rough-in end//

    //Ground Bedroom3//Finishes Rough-in start//
    G5BW1: [
      {
        id: "G5BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G5BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G5BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G5BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G5BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G5BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G5EL1: [
      {
        id: "G5EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G5EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G5EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G5MD1: [
      {
        id: "G5MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G5MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G5MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G5PC1: [
      {
        id: "G5PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G5PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G5PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G5FF1: [
      {
        id: "G5FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G5FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G5FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G5DFI1: [
      {
        id: "G5DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G5WFI1: [
      {
        id: "G5WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G5PL1: [
      {
        id: "G5PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G5PR1: [
      {
        id: "G5PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G5PT1: [
      {
        id: "G5PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G5WP1: [
      {
        id: "G5WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 3,
        breadth: 3,
        area: 9,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G5GR1: [
      {
        id: "G5GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 3,
        breadth: 3,
        area: 9,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G5TL1: [
      {
        id: "G5TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 3,
        breadth: 3,
        area: 9,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G5PTF1: [
      {
        id: "G5PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G5PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G5PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Bedroom3//Finishes Rough-in end//

    //Ground Bedroom4//Finishes Rough-in start//
    G6BW1: [
      {
        id: "G6BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: 3,
        breadth: floorHeight,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G6BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: 3,
        breadth: floorHeight,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G6BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: 3,
        breadth: floorHeight,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G6BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: 3,
        breadth: floorHeight,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G6BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G6BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G6EL1: [
      {
        id: "G6EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G6EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G6EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G6MD1: [
      {
        id: "G6MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G6MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G6MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G6PC1: [
      {
        id: "G6PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G6PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G6PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G6FF1: [
      {
        id: "G6FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G6FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G6FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G6DFI1: [
      {
        id: "G6DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G6WFI1: [
      {
        id: "G6WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G6PL1: [
      {
        id: "G6PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G6PR1: [
      {
        id: "G6PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G6PT1: [
      {
        id: "G6PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G6WP1: [
      {
        id: "G6WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 3,
        breadth: 3,
        area: 9,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G6GR1: [
      {
        id: "G6GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 3,
        breadth: 3,
        area: 9,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G6TL1: [
      {
        id: "G6TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 3,
        breadth: 3,
        area: 9,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G6PTF1: [
      {
        id: "G6PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G6PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G6PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Bedroom4//Finishes Rough-in end//

    //Ground Drawing//Finishes Rough-in start//
    G7BW1: [
      {
        id: "G7BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G7BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G7BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G7BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G7BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G7BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G7EL1: [
      {
        id: "G7EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G7EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G7EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G7MD1: [
      {
        id: "G7MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G7MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G7MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G7PC1: [
      {
        id: "G7PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G7PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G7PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G7FF1: [
      {
        id: "G7FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G7FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G7FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G7DFI1: [
      {
        id: "G7DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G7WFI1: [
      {
        id: "G7WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G7PL1: [
      {
        id: "G7PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G7PR1: [
      {
        id: "G7PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G7PT1: [
      {
        id: "G7PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G7WP1: [
      {
        id: "G7WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 2,
        breadth: 2,
        area: 4,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G7GR1: [
      {
        id: "G7GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 2,
        breadth: 2,
        area: 4,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G7TL1: [
      {
        id: "G7TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 2,
        breadth: 2,
        area: 4,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G7PTF1: [
      {
        id: "G7PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G7PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G7PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Drawing//Finishes Rough-in end//

    //Ground Media Finsishes Rough-in start//
    G8BW1: [
      {
        id: "G8BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G8BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G8BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G8BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G8BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G8BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G8EL1: [
      {
        id: "G8EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G8EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G8EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G8MD1: [
      {
        id: "G8MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G8MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G8MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G8PC1: [
      {
        id: "G8PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G8PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G8PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G8FF1: [
      {
        id: "G8FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G8FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G8FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G8DFI1: [
      {
        id: "G8DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G8WFI1: [
      {
        id: "G8WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G8PL1: [
      {
        id: "G8PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G8PR1: [
      {
        id: "G8PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G8PT1: [
      {
        id: "G8PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G8WP1: [
      {
        id: "G8WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 3,
        breadth: 3,
        area: 9,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G8GR1: [
      {
        id: "G8GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 3,
        breadth: 3,
        area: 0,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G8TL1: [
      {
        id: "G8TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 3,
        breadth: 3,
        area: 0,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G8PTF1: [
      {
        id: "G8PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G8PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G8PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Media Finsishes Rough-in end//

    //Ground Pooja Finsishes Rough-in start//
    G9BW1: [
      {
        id: "G9BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G9BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G9BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G9BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G9BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G9BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G9EL1: [
      {
        id: "G9EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G9EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G9EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G9MD1: [
      {
        id: "G9MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G9MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G9MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G9PC1: [
      {
        id: "G9PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G9PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G9PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G9FF1: [
      {
        id: "G9FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G9FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G9FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G9DFI1: [
      {
        id: "G9DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G9WFI1: [
      {
        id: "G9WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G9PL1: [
      {
        id: "G9PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G9PR1: [
      {
        id: "G9PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G9PT1: [
      {
        id: "G9PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G9WP1: [
      {
        id: "G9WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G9GR1: [
      {
        id: "G9GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G9TL1: [
      {
        id: "G9TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G9PTF1: [
      {
        id: "G9PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G9PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G9PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Pooja Finsishes Rough-in end//

    //Ground Sitout Finsishes Rough-in start//
    G10BW1: [
      {
        id: "G10BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G10BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G10BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G10BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G10BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G10BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G10EL1: [
      {
        id: "G10EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G10EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G10EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G10MD1: [
      {
        id: "G10MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G10MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G10MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G10PC1: [
      {
        id: "G10PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G10PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G10PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G10FF1: [
      {
        id: "G10FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G10FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G10FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G10DFI1: [
      {
        id: "G10DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G10WFI1: [
      {
        id: "G10WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G10PL1: [
      {
        id: "G10PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G10PR1: [
      {
        id: "G10PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G10PT1: [
      {
        id: "G10PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G10WP1: [
      {
        id: "G10WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 1,
        breadth: 1,
        area: 1,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G10GR1: [
      {
        id: "G10GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G10TL1: [
      {
        id: "G10TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G10PTF1: [
      {
        id: "G10PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G10PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G10PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Sitout Finsishes Rough-in end//

    //Ground Balcony Finsishes Rough-in start//
    G11BW1: [
      {
        id: "G11BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G11BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G11BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G11BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G11BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G11BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G11EL1: [
      {
        id: "G11EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G11EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G11EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G11MD1: [
      {
        id: "G11MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G11MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G11MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G11PC1: [
      {
        id: "G11PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G11PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G11PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G11FF1: [
      {
        id: "G11FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G11FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G11FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G11DFI1: [
      {
        id: "G11DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G11WFI1: [
      {
        id: "G11WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G11PL1: [
      {
        id: "G11PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G11PR1: [
      {
        id: "G11PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G11PT1: [
      {
        id: "G11PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G11WP1: [
      {
        id: "G11WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 1,
        breadth: 1,
        area: 1,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G11GR1: [
      {
        id: "G11GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G11TL1: [
      {
        id: "G11TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G11PTF1: [
      {
        id: "G11PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G11PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G11PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Balcony Finsishes Rough-in end//

    //Ground Bath-1 Finsishes Rough-in start//
    G12BW1: [
      {
        id: "G12BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G12BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G12BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G12BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G12BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G12BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G12EL1: [
      {
        id: "G12EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G12EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G12EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G12MD1: [
      {
        id: "G12MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G12MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G12MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G12PC1: [
      {
        id: "G12PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G12PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G12PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G12FF1: [
      {
        id: "G12FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G12FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G12FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G12DFI1: [
      {
        id: "G12DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G12WFI1: [
      {
        id: "G12WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G12PL1: [
      {
        id: "G12PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G12PR1: [
      {
        id: "G12PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G12PT1: [
      {
        id: "G12PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G12WP1: [
      {
        id: "G12WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 1,
        breadth: 1,
        area: 1,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G12GR1: [
      {
        id: "G12GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G12TL1: [
      {
        id: "G12TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G12PTF1: [
      {
        id: "G12PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G12PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G12PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Bath-1 Finsishes Rough-in end//

    //Ground Bath-2 Finsishes Rough-in start//
    G13BW1: [
      {
        id: "G13BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G13BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G13BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G13BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G13BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G13BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G13EL1: [
      {
        id: "G13EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G13EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G13EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G13MD1: [
      {
        id: "G13MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G13MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G13MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G13PC1: [
      {
        id: "G13PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G13PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G13PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G13FF1: [
      {
        id: "G13FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G13FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G13FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G13DFI1: [
      {
        id: "G13DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G13WFI1: [
      {
        id: "G13WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G13PL1: [
      {
        id: "G13PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G13PR1: [
      {
        id: "G13PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G13PT1: [
      {
        id: "G13PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G13WP1: [
      {
        id: "G13WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 1,
        breadth: 1,
        area: 1,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G13GR1: [
      {
        id: "G13GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G13TL1: [
      {
        id: "G13TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G13PTF1: [
      {
        id: "G13PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G13PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G13PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Bath-2 Finsishes Rough-in end//

    //Ground Bath-3 Finsishes Rough-in start//
    G14BW1: [
      {
        id: "G14BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G14BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G14BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G14BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G14BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G14BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G14EL1: [
      {
        id: "G14EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G14EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G14EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G14MD1: [
      {
        id: "G14MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G14MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G14MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G14PC1: [
      {
        id: "G14PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G14PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G14PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G14FF1: [
      {
        id: "G14FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G14FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G14FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G14DFI1: [
      {
        id: "G14DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G14WFI1: [
      {
        id: "G14WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G14PL1: [
      {
        id: "G14PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G14PR1: [
      {
        id: "G14PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G14PT1: [
      {
        id: "G14PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G14WP1: [
      {
        id: "G14WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 1,
        breadth: 1,
        area: 1,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G14GR1: [
      {
        id: "G14GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G14TL1: [
      {
        id: "G14TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G14PTF1: [
      {
        id: "G14PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G14PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G14PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Bath-3 Finsishes Rough-in end//

    //Ground Bath-4 Finsishes Rough-in start//
    G15BW1: [
      {
        id: "G15BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G15BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G15BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G15BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G15BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G15BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G15EL1: [
      {
        id: "G15EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G15EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G15EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G15MD1: [
      {
        id: "G15MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G15MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G15MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G15PC1: [
      {
        id: "G15PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G15PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G15PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G15FF1: [
      {
        id: "G15FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G15FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G15FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G15DFI1: [
      {
        id: "G15DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G15WFI1: [
      {
        id: "G15WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G15PL1: [
      {
        id: "G15PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G15PR1: [
      {
        id: "G15PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G15PT1: [
      {
        id: "G15PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G15WP1: [
      {
        id: "G15WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 1,
        breadth: 1,
        area: 1,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G15GR1: [
      {
        id: "G15GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G15TL1: [
      {
        id: "G15TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G15PTF1: [
      {
        id: "G15PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G15PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G15PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Bath-4 Finsishes Rough-in end//

    //Ground Toilet Finsishes Rough-in start//
    G16BW1: [
      {
        id: "G16BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G16BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G16BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G16BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G16BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G16BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G16EL1: [
      {
        id: "G16EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G16EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G16EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G16MD1: [
      {
        id: "G16MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G16MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G16MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G16PC1: [
      {
        id: "G16PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G16PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G16PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G16FF1: [
      {
        id: "G16FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G16FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G16FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G16DFI1: [
      {
        id: "G16DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G16WFI1: [
      {
        id: "G16WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G16PL1: [
      {
        id: "G16PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G16PR1: [
      {
        id: "G16PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G16PT1: [
      {
        id: "G16PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G16WP1: [
      {
        id: "G16WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 0.5,
        breadth: 0.5,
        area: 0.25,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G16GR1: [
      {
        id: "G16GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 0.5,
        breadth: 0.5,
        area: 0.25,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G16TL1: [
      {
        id: "G16TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 0.5,
        breadth: 0.5,
        area: 0.25,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G16PTF1: [
      {
        id: "G16PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G16PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G16PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Toilet Finsishes Rough-in end//

    //Ground Store Finsishes Rough-in start//
    G17BW1: [
      {
        id: "G17BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G17BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G17BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G17BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G17BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G17BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G17EL1: [
      {
        id: "G17EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G17EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G17EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G17MD1: [
      {
        id: "G17MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G17MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G17MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G17PC1: [
      {
        id: "G17PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G17PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G17PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G17FF1: [
      {
        id: "G17FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G17FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G17FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G17DFI1: [
      {
        id: "G17DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G17WFI1: [
      {
        id: "G17WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G17PL1: [
      {
        id: "G17PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G17PR1: [
      {
        id: "G17PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G17PT1: [
      {
        id: "G17PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G17WP1: [
      {
        id: "G17WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 0.5,
        breadth: 0.5,
        area: 0.25,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G17GR1: [
      {
        id: "G17GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 0.5,
        breadth: 0.5,
        area: 0.25,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G17TL1: [
      {
        id: "G17TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 0.5,
        breadth: 0.5,
        area: 0.25,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G17PTF1: [
      {
        id: "G17PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G17PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G17PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Store Finsishes Rough-in end//

    //Ground Parking Finsishes Rough-in start//
    G18BW1: [
      {
        id: "G18BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G18BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G18BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G18BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G18BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G18BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G18EL1: [
      {
        id: "G18EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G18EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G18EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G18MD1: [
      {
        id: "G18MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G18MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G18MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G18PC1: [
      {
        id: "G18PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G18PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G18PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G18FF1: [
      {
        id: "G18FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G18FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G18FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G18DFI1: [
      {
        id: "G18DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G18WFI1: [
      {
        id: "G18WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G18PL1: [
      {
        id: "G18PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G18PR1: [
      {
        id: "G18PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G18PT1: [
      {
        id: "G18PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G18WP1: [
      {
        id: "G18WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 1,
        breadth: 1,
        area: 1,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G18GR1: [
      {
        id: "G18GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G18TL1: [
      {
        id: "G18TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G18PTF1: [
      {
        id: "G18PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G18PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G18PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Parking Finsishes Rough-in end//

    //Ground Staircase Finsishes Rough-in start//
    G19BW1: [
      {
        id: "G19BW11",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G19BW12",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G19BW13",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G19BW14",
        type: "Brickwork",
        resource: "Cuminch9Redclayper1000",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.23,
        area: 0,
        rate: Redclayper1000Rates.inch9.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      }, // qty and cost will be calculated in code
      {
        id: "G19BW15",
        type: "Mason",
        resource: "HourlyMason",
        description: "Mason",
        rate: MasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G19BW16",
        type: "Mason",
        resource: "HourlyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G19EL1: [
      {
        id: "G19EL11",
        type: "Electrical",
        resource: "mPVCElec",
        description: "Electrical",
        rate: ElecRates.PVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G19EL12",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G19EL13",
        type: "Electrical-Helper",
        resource: "HourlyHelper",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 2,
        totalCost: 0
      }
    ],
    G19MD1: [
      {
        id: "G19MD11",
        type: "Mechanical",
        resource: "ALDuctperSqmMech",
        description: "Mechanical",
        rate: MechRates.DuctperSqm.AL,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G19MD12",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G19MD13",
        type: "Mechanical-Helper",
        resource: "HourlyHelper",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G19PC1: [
      {
        id: "G19PC11",
        type: "Plumbing",
        resource: "mCPVCPlumb",
        description: "Plumbing",
        rate: PlumbRates.CPVC.m,
        units: "m",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G19PC12",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G19PC13",
        type: "Plumbing-Helper",
        resource: "HourlyHelper",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G19FF1: [
      {
        id: "G19FF11",
        type: "FireFighting",
        resource: "mHangerssprinklerFF",
        description: "FireFighting",
        rate: FFRates.Hangerssprinkler.m,
        units: "m",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G19FF12",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "G19FF13",
        type: "FireFighting-Helper",
        resource: "HourlyHelper",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G19DFI1: [
      {
        id: "G19DFI11",
        type: "Door Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Door insulation",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19DFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G19WFI1: [
      {
        id: "G19WFI11",
        type: "Window Insulation",
        resource: "WP1TeakDFinsulation",
        description: "Window insulation",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFinsulationRates.Teak.WP1,
        units: "Unit",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19WFI13",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    G19PL1: [
      {
        id: "G19PL11",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PL12",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PL13",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PL14",
        type: "Plaster",
        resource: "Cummm12PlasterManual",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        thickness: 0.016,
        rate: PlasterManualRates.mm18.Cum,
        units: "Cum",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PL15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 1,
        totalCost: 0
      }
    ],
    G19PR1: [
      {
        id: "G19PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Interior.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G19PT1: [
      {
        id: "G19PR11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PR12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PR13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PR14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PR15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G19WP1: [
      {
        id: "G19WP11",
        type: "Water Proofing",
        resource: "SqmLiquidWP",
        description: "Waterproofing",
        length: 1,
        breadth: 1,
        area: 1,
        rate: WPRates.Liquid.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19WP12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G19GR1: [
      {
        id: "G19GR11",
        type: "Granite",
        resource: "SqmGraniteFloor",
        description: "Granite",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Granite.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19GR12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    G19TL1: [
      {
        id: "G19TL11",
        type: "Vitrified",
        resource: "SqmVitrifiedFloor",
        description: "Vitrified",
        length: 1,
        breadth: 1,
        area: 1,
        rate: FloorRates.Vitrified.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19TL12",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],

    G19PTF1: [
      {
        id: "G19PTF11",
        type: "Paint",
        resource: "SqmPPaint",
        description: "leftWall",
        length: leftWall.length,
        breadth: leftWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PTF12",
        type: "Paint",
        resource: "SqmPPaint",
        description: "rightWall",
        length: rightWall.length,
        breadth: rightWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PTF13",
        type: "Paint",
        resource: "SqmPPaint",
        description: "frontWall",
        length: frontWall.length,
        breadth: frontWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PTF14",
        type: "Paint",
        resource: "SqmPPaint",
        description: "backWall",
        length: backWall.length,
        breadth: backWall.height,
        area: 0,
        rate: PPaintRates.Emulsion.Sqm,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      },
      {
        id: "G19PTF15",
        type: "Helper",
        resource: "DailyHelper",
        description: "Helper",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "G19PTF16",
        type: "Helper",
        resource: "DailyHelper",
        description: "Clean",
        rate: HelperRates.Helper.Daily,
        units: "Day",
        quantity: 2,
        totalCost: 0
      }
    ],
    //Ground Staircase Finsishes Rough-in end//

    //Ground Finishes Interior start//
    //Ground Finishes Interior start//

    //Ground Living// Start

    GFI3: [
      {
        id: "GFI71",
        type: "Door Frame",
        resource: "TW1TeakperftDF",
        description: "Door Frame",
        length: 3,
        breadth: 2,
        area: 6,
        rate: DFRates.Teakperft.TW2,
        units: "Sqm",
        quantity: 0,
        totalCost: 0
      }
    ],
    GFI4: [
      {
        id: "GFI81",
        type: "Window Frame",
        resource: "TW1TeakperftDF",
        description: "Window Frame",
        length: 1.2,
        breadth: 1.2,
        area: 1.44,
        rate: DFRates.Teakperft.TW2,
        units: "Sft",
        quantity: 0,
        totalCost: 0
      }
    ],
    GFI5: [
      {
        id: "GFI91",
        type: "Door",
        resource: "SftUPVCSlidDoor",
        description: "Window",
        length: 1,
        breadth: 1,
        area: 1,
        rate: DoorRates.UPVCSlid.Sft,
        units: "Sft",
        quantity: 0,
        totalCost: 0
      }
    ],
    GFI6: [
      {
        id: "GFI101",
        type: "Door",
        resource: "UnitTeakWoodDoor",
        description: "Door",
        length: 1,
        breadth: 1,
        area: 1,
        rate: DoorRates.TeakWood.Unit,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      }
    ],
    GFEL: [
      {
        id: "GFI31",
        type: "LightFixtures",
        resource: "UnitLightFixturesElec",
        description: "Electrical",
        rate: ElecRates.LightFixtures.Unit,
        units: "Unit",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "GFI32",
        type: "Electrical-Mason",
        resource: "HourlyMason",
        description: "Electrical",
        rate: ElectricianRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    GFPL: [
      {
        id: "GFI51",
        type: "Tap",
        resource: "CeraTapsPlumb",
        description: "Plumbing",
        rate: PlumbRates.taps.Cera,
        units: "Unit",
        quantity: 2,
        totalCost: 0
      },
      {
        id: "GFI52",
        type: "Plumbing-Mason",
        resource: "HourlyMason",
        description: "Plumbing",
        rate: PlumberRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    GFME: [
      {
        id: "GFI41",
        type: "AC",
        resource: "UnitAirCMech",
        description: "Mechanical",
        rate: MechRates.AirC.Unit,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "GFI42",
        type: "Mechanical-Mason",
        resource: "HourlyMason",
        description: "Mechanical",
        rate: MechMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    GFFF: [
      {
        id: "GFI61",
        type: "Sprinkler",
        resource: "UnitsprinklerFF",
        description: "FireFighting",
        rate: FFRates.sprinkler.Unit,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "GFI62",
        type: "FireFighting-Mason",
        resource: "HourlyMason",
        description: "FireFighting",
        rate: FFMasonRates.Mason.Hourly,
        units: "Hour",
        quantity: 1,
        totalCost: 0
      }
    ],
    GFFC: [
      {
        id: "GFI111",
        type: "FalseCeiling",
        resource: "Sqm2GypFCeiling",
        description: "FalseCeiling",
        length: 4,
        breadth: 4,
        area: 16,
        rate: FCeilingRates.Gyp.Sqm2,
        units: "Sqm",
        quantity: 1,
        totalCost: 0
      }
    ],
    GFLF: [
      {
        id: "GFI12",
        type: "Lights",
        resource: "Unit2RecsedLitCfix",
        description: "Lights",
        length: 4,
        breadth: 4,
        area: 16,
        rate: LitWfixRates.Wall.Unit2,
        units: "Unit",
        quantity: 4,
        totalCost: 0
      }
    ],
    GFWA: [
      {
        id: "GWFI11",
        type: "Countertop",
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
    ],
    GFSD: [
      {
        id: "GFI13",
        type: "Slide-Door",
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
    ],
    GFJY: [
      {
        id: "GFI15",
        type: "Cabinet",
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
    ],
    GFEX: [
      {
        id: "GFI16",
        type: "Exhaust",
        resource: "Unit2KitchenExhaust",
        description: "Exhaust",
        rate: ExhaustRates.Kitchen.Unit2,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      }
    ],
    CL01: [
      {
        id: "CL011",
        type: "Closing",
        resource: "OthFFixFinal",
        description: "FinalFix",
        rate: FinalRates.FFix.Oth,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "CL012",
        type: "Lights",
        resource: "Unit2RecsedLitCfix",
        description: "Lights",
        length: 0.92,
        breadth: 2.13,
        area: 0,
        rate: LitWfixRates.Wall.Unit2,
        units: "Unit",
        quantity: 4,
        totalCost: 0
      }
    ],
    CL04: [
      {
        id: "CL041",
        type: "Closing",
        resource: "SnagClearConting",
        description: "Snag&Desnag",
        rate: ContingRates.Clear.Snag,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      },
      {
        id: "CL042",
        type: "Lights",
        resource: "Unit2RecsedLitCfix",
        description: "Lights",
        length: 0.92,
        breadth: 2.13,
        area: 0,
        rate: LitWfixRates.Wall.Unit2,
        units: "Unit",
        quantity: 1,
        totalCost: 0
      }
    ]

    //Ground Living// End

    //Finishes End//
  };

  if (taskResources) return updateQuantities(taskResources);
  return updateQuantities(resources[taskId] ?? []);
}
}

function updateQuantities(resources) {
  for (const resource of resources) {
    if (resource?.length && resource?.breadth && !resource?.thickness) {
      resource.quantity = resource.length * resource.breadth 
      resource.quantity = resource.quantity.toFixed(2);
      resource.area = (resource.length * resource.breadth).toFixed(2);
    }

    if (resource?.length && resource?.breadth && resource?.thickness) {
      resource.quantity = resource.length * resource.breadth * resource.thickness;
      resource.quantity = resource.quantity.toFixed(2);
      resource.area = (resource.length * resource.breadth).toFixed(2);
    }

    if (resource?.diameter && resource?.noOfBars && resource?.length) {
      const { diameter, noOfBars, length } = resource;
      resource.quantity = (Math.pow(diameter, 2) * length * noOfBars) / 162;
      resource.quantity = resource.quantity.toFixed(2);
      resource.area=(resource.length*resource.breadth).toFixed(2)
    }

    if (resource?.perimeter != undefined && resource?.length && resource?.breadth) {
      resource.perimeter = (resource.length + resource.breadth) * 2;
      resource.area = resource.length * resource.breadth;
      if (resource?.thickness) {
        resource.quantity = resource.perimeter * resource.thickness;
      }
      resource.quantity=resource.area
    }

    if (resource?.numbersRequired != undefined && resource?.numbersRequired > 0) {
      resource.quantity = resource.numbersRequired * resource.quantity;
    }
  }
  return resources;
}

export default getResources;
