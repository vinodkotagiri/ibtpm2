import { BarBenderRates, ConcreteRates, EngineerRates, HelperRates, MasonRates, MetalFormworkRates, SteelRates } from "../constants/rates";
import { Task } from "../constants/types";

export function updateTasksFromDrawingData ( tasks, drawingData ): Array<Task> {
  const levels = []
  if ( drawingData?.secondFloor ) {
    levels.push( 2 )
  }
  if ( drawingData?.thirdFloor ) {
    levels.push( 3 )
  }
  if ( drawingData?.fourthFloor ) {
    levels.push( 4 )
  }
  if ( drawingData?.fifthFloor ) {
    levels.push( 5 )
  }
  const lastIndex = tasks.findIndex( task => task.id == `EL110` )
  const currentIndex = tasks.findIndex( task => task.id == `LL2` )

  const finalTasksToPush = []
  const levelsMap = {
    0: 'groundFloor',
    1: 'firstFloor',
    2: 'secondFloor',
    3: 'thirdFloor',
    4: 'fourthFloor',
    5: 'fifthFloor'
  }
  for ( const level of levels ) {
    const length = drawingData[ levelsMap[ level ] ]?.length
    const width = drawingData[ levelsMap[ level ] ]?.width
    const area = drawingData[ levelsMap[ level ] ]?.area
    const height = drawingData?.floorHeight
    console.log( 'length', length, 'width', width, 'area', area, 'height', height )
    const tasksToPush = [
      {
        id: `LL${ level }`,
        name: `Level-${ level } Structure`,
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: 'CON'
      },

      {
        id: `L${ level }C`,
        name: `Level-${ level } Columns`,
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `LL${ level }`
      },
      {
        id: `F${ level }TF${ level + 1 }`,
        name: `Columns-F${ level }-F${ level + 1 }`,
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        numbersRequired: 1,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }C`
      },
      {
        id: `F${ level }TF${ level + 1 }S`,
        name: 'Columns Steel',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `F${ level }TF${ level + 1 }`,
        resources: [
          { id: `GCT11${ level }`, resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: length, diameter: 8, noOfBars: 2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
          { id: `GCT12${ level }`, resource: 'SftDia16Steel', description: 'Main Bars', length: length, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
          { id: `GCT13${ level }`, resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
          { id: `GCT14${ level }`, resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
          { id: `GCT15${ level }`, resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
        ]
      },
      {
        id: `F${ level }TF${ level + 1 }F`,
        name: 'Columns Formwork',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `F${ level }TF${ level + 1 }S` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `F${ level }TF${ level + 1 }`,
        resources: [
          { id: `GCT110${ level }`, resource: 'SqmFootingMetalFormwork', description: 'Metal', length: length, breadth: 0.23, thickness: 0.23, perimeter: 0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
          { id: `GCT111${ level }`, resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
          { id: `GCT112${ level }`, resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
        ]
      },
      {
        id: `F${ level }TF${ level + 1 }FCC`,
        name: 'Columns Concrete',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `F${ level }TF${ level + 1 }F` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `F${ level }TF${ level + 1 }`,
        resources: [
          { id: 'ST78', resource: 'CumM25Concrete', description: 'M25Concrete', length: height, breadth: 0.23, thickness: 0.23, area: 0, rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
          { id: 'ST79', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
          { id: 'ST710', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },

        ]
      },



      //Beam Type-1// 3x0.23x0.45
      {
        id: `L${ level }B`,
        name: `Level-${ level } Beams`,
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `LL${ level }`
      },
      {
        id: `L${ level }BT1`,
        name: `Beam Level${ level }-Level${ level + 1 }-Typ-1 3x0.23x0.45`,
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        numbersRequired: 1,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }B`
      },
      {
        id: `L${ level }BTF`,
        name: 'Beam Formwork',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `F${ level }TF${ level + 1 }FCC` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }BT1`,
        resources:[
          
  { id: `BT111${level}`, resource: 'SqmFootingMetalFormwork', description: 'Metal', length:length, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: `BT112${level}`, resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: `BT113${level}`, resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },           

        ]
      },
      {
        id: `L${ level }BT1S`,
        name: 'Beam Steel',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ 'BT11' ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }BTF`,
        resources:[
          { id: `BT121${level}`, resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: length, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
          { id: `BT122${level}`, resource: 'SftDia12Steel', description: 'Top Bars', length: length, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
          { id: `BT123${level}`, resource: 'SftDia16Steel', description: 'Bottom Bars', length: length, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
          { id: `BT124${level}`, resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
          { id: `BT125${level}`, resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
        ],
      },
      {
        id: `L${ level }BTI`,
        name: 'Inspection',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }BT1`,
        resources: [  
          { id: 'BT131', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
        ],
      },
      {
        id: `L${ level }BTC`,
        name: 'Beam Concrete',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `L${ level }BTI` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }BT1`,
        resources:[
          { id: 'BT141', resource: 'CumM30Concrete', description: 'M30Concrete', length: length, breadth: 0.23, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
          { id: 'BT142', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
          { id: 'BT143', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
        ]
      },

      //slab//
      {
        id: `SL${ level }`,
        name: `Slab Level-${ level }`,
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `LL${ level }`
      },
      {
        id: `SL${ level }F`,
        name: 'Slab Formwork',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }`,
        resources:[
          { id: 'SLB11', resource: 'SqmFootingMetalFormwork', description: 'Metal', length:drawingData.builtupLength, breadth:drawingData.builtupBreadth, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
          { id: 'SLB12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
          { id: 'SLB13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 4, totalCost: 0 },           
        ]
      },
      {
        id: `SL${ level }SB`,
        name: 'Slab Steel-Bottom',
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }`
      },
      {
        id: `SL${ level }SBL`,
        name: 'Slab Steel-Length',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `SL${ level }F` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }SB`,
        resources: [  
          { id: 'SSL11', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: drawingData.builtupLength, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
          { id: 'SSL12', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
          { id: 'SSL13', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
          { id: 'SSL14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
        ],
      },
      {
        id: `SL${ level }SBB`,
        name: 'Slab Steel-Breadth',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FF',
        dependencies: [ `SL${ level }SBL` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }SB`
      },
      //SLAB MEP 1st Fix START//
      {
        id: `L${ level }MEP`,
        name: 'MEP 1st Fix',
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }`
      },
      {
        id: `SL${ level }ELE`,
        name: 'Slab Electrical',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        numbersRequired: 1,
        strategy: 'FS',
        dependencies: [ 'SLB21' ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }MEP`
      },
      {
        id: `SL${ level }ME`,
        name: 'Slab Mechanical',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        numbersRequired: 1,
        strategy: 'FS',
        dependencies: [ `SL${ level }ELE` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }MEP`
      },
      {
        id: `SL${ level }PB`,
        name: 'Slab Plumbing',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        numbersRequired: 1,
        strategy: 'FS',
        dependencies: [ `SL${ level }ME` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }MEP`
      },
      {
        id: `SL${ level }FIF`,
        name: 'Slab Firefighting',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        numbersRequired: 1,
        strategy: 'FS',
        dependencies: [ `SL${ level }PB` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `L${ level }MEP`
      },
      //SLAB MEP 1st Fix END//
      {
        id: `SL${ level }ST`,
        name: 'Slab Steel-Top',
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }`
      },
      {
        id: `SL${ level }SBL2`,
        name: 'Slab Steel-Length',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `SL${ level }ELE` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }ST`
      },
      {
        id: `SL${ level }SBB2`,
        name: 'Slab Steel-Breadth',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FF',
        dependencies: [ `SL${ level }SBL2` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }ST`
      },

      {
        id: `SL${ level }CON`,
        name: 'Slab Concrete',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `SL${ level }SBB2` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }`
      },
      {
        id: `SL${ level }CUR`,
        name: 'Slab Curing',
        start: '',
        end: '',
        duration: 7,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `SL${ level }CON` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }`
      },
      {
        id: `SL${ level }RFW`,
        name: 'Remove Formwork',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `SL${ level }CUR` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `SL${ level }`
      },

      //G-L1 Staircase//
      {
        id: `STCL${ level }${ level + 1 }`,
        name: `Staircase-L${ level }-$L{level+1}`,
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `LL${ level }`
      },
      {
        id: `FFL${ level }${ level + 1 }`,
        name: `First Flight-L${ level }-L${ level + 1 }`,
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `STCL${ level }${ level + 1 }`
      },
      {
        id: `FFL${ level }${ level + 1 }FB`,
        name: 'Foundation Bed',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `SL${ level }CUR` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `STCL${ level }${ level + 1 }`
      },
      {
        id: `FFL${ level }${ level + 1 }SF`,
        name: 'Slab Formwork',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'SS',
        dependencies: [ `FFL${ level }${ level + 1 }FB` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `STCL${ level }${ level + 1 }`
      },

      {
        id: `FFL${ level }${ level + 1 }WS`,
        name: 'Waist Slab Steel',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `FFL${ level }${ level + 1 }SF` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FFL${ level }${ level + 1 }`
      },
      {
        id: `FFL${ level }${ level + 1 }LN`,
        name: 'Landing Slab',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FF',
        dependencies: [ `FFL${ level }${ level + 1 }WS` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FFL${ level }${ level + 1 }`
      },

      {
        id: `FFL${ level }${ level + 1 }BSLPS`,
        name: 'Beam Steel (Landing Portion Support)',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `FFL${ level }${ level + 1 }LN` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FFL${ level }${ level + 1 }`
      },
      {
        id: `FFL${ level }${ level + 1 }STC`,
        name: 'Staircase Concrete',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `FFL${ level }${ level + 1 }BSLPS` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FFL${ level }${ level + 1 }`
      },
      {
        id: `FFL${ level }${ level + 1 }SCU`,
        name: 'Staircase Curing',
        start: '',
        end: '',
        duration: 7,
        cost: 0,
        strategy: 'FS',
        dependencies: [ 'FFG15' ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FFL${ level }${ level + 1 }`
      },
      {
        id: `FFL${ level }${ level + 1 }SRF`,
        name: 'Remove Formwork',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `FFL${ level }${ level + 1 }SCU` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FFL${ level }${ level + 1 }`
      },

      {
        id: `FSL${ level }${ level + 1 }`,
        name: 'Second Flight-G-L1',
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `STCL${ level }${ level + 1 }`
      },


      {
        id: `FFLL${ level }L${ level + 1 }`,
        name: 'Formwork 2nd Flight Slab',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FF',
        dependencies: [ 'FFG16' ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FSL${ level }${ level + 1 }`
      },
      {
        id: `FFLL${ level }L${ level + 1 }BSLP`,
        name: 'Beam Steel (Landing portion)',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `FFLL${ level }L${ level + 1 }` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FSL${ level }${ level + 1 }`
      },
      {
        id: `FFLL${ level }L${ level + 1 }LSS`,
        name: 'Landing Steel',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FF',
        dependencies: [ `FFLL${ level }L${ level + 1 }BSLP` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FSL${ level }${ level + 1 }`
      },

      {
        id: `FFLL${ level }L${ level + 1 }WSS`,
        name: 'Waist Slab Steel',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `FFLL${ level }L${ level + 1 }LS` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FSL${ level }${ level + 1 }`
      },
      {
        id: `FFLL${ level }L${ level + 1 }LSSL`,
        name: 'Landing Slab',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FF',
        dependencies: [ `FFLL${ level }L${ level + 1 }WSS` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FSL${ level }${ level + 1 }`
      },
      {
        id: `FFLL${ level }L${ level + 1 }WCON`,
        name: 'Staircase Concrete',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `FFLL${ level }L${ level + 1 }LSSL` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FSL${ level }${ level + 1 }`
      },
      {
        id: `FFLL${ level }L${ level + 1 }LSCU`,
        name: 'Staircase Curing',
        start: '',
        end: '',
        duration: 7,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `FFLL${ level }L${ level + 1 }WCON` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FSL${ level }${ level + 1 }`
      },
      {
        id: `FFLL${ level }L${ level + 1 }LSRF`,
        name: 'Remove Formwork',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `FFLL${ level }L${ level + 1 }LSCU` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `FSL${ level }${ level + 1 }`
      },

      //G-L1 Staircase

      //Elevator Core Wall//
      {
        id: `ELECL${ level }L${ level + 1 }`,
        name: 'Elevator Core',
        start: '',
        end: '',
        duration: 0,
        cost: 0,
        strategy: 'FS',
        dependencies: [],
        type: 'project',
        progress: 0,
        hideChildren: false,
        parent: `LL${ level }`
      },
      {
        id: `ELECL${ level }L${ level + 1 }1`,
        name: 'Foundation Columns Steel',
        start: '',
        end: '',
        duration: 4,
        cost: 0,
        numbersRequired: 4,
        strategy: 'SS',
        dependencies: [ `FFLL${ level }L${ level + 1 }WCON` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
      {
        id: `ELECL${ level }L${ level + 1 }2`,
        name: 'Inspection',
        start: '',
        end: '',
        duration: 4,
        cost: 0,
        numbersRequired: 1,
        strategy: 'FS',
        dependencies: [ `ELECL${ level }L${ level + 1 }1` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
      {
        id: `ELECL${ level }L${ level + 1 }3`,
        name: 'Foundation Columns Concrete',
        start: '',
        end: '',
        duration: 4,
        cost: 0,
        numbersRequired: 4,
        strategy: 'FF',
        dependencies: [ `ELECL${ level }L${ level + 1 }2` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
      {
        id: `ELECL${ level }L${ level + 1 }4`,
        name: 'Columns Steel',
        start: '',
        end: '',
        duration: 4,
        cost: 0,
        numbersRequired: 4,
        strategy: 'SS',
        dependencies: [ `ELECL${ level }L${ level + 1 }3` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
      {
        id: `ELECL${ level }L${ level + 1 }5`,
        name: 'Columns Formwork',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: 'FS',
        dependencies: [ `ELECL${ level }L${ level + 1 }4` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
      {
        id: `ELECL${ level }L${ level + 1 }6`,
        name: 'Columns Concrete',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: 'FS',
        dependencies: [ `ELECL${ level }L${ level + 1 }5` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
      //Elevator Beams//
      {
        id: `ELECL${ level }L${ level + 1 }7`,
        name: 'Beam Formwork',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: 'FS',
        dependencies: [ `ELECL${ level }L${ level + 1 }6` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
      {
        id: `ELECL${ level }L${ level + 1 }8`,
        name: 'Beam Steel',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: 'FS',
        dependencies: [ `ELECL${ level }L${ level + 1 }7` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
      {
        id: `ELECL${ level }L${ level + 1 }9`,
        name: 'Inspection',
        start: '',
        end: '',
        duration: 3,
        cost: 0,
        strategy: 'FS',
        dependencies: [ `ELECL${ level }L${ level + 1 }8` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
      {
        id: `ELECL${ level }L${ level + 1 }110`,
        name: 'Beam Concrete',
        start: '',
        end: '',
        duration: 1,
        cost: 0,
        numbersRequired: 4,
        strategy: 'FS',
        dependencies: [ `ELECL${ level }L${ level + 1 }9` ],
        type: 'task',
        progress: 0,
        hideChildren: false,
        parent: `ELECL${ level }L${ level + 1 }`
      },
    ]
    finalTasksToPush.push( ...tasksToPush )
  }

  if ( currentIndex < 0 ) {
    tasks = [ ...tasks.slice( 0, lastIndex + 1 ),
    ...finalTasksToPush,
    ...tasks.slice( lastIndex + 1 )
    ]
  }
  return tasks
}