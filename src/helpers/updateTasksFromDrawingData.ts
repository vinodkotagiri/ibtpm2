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
        parent: `SL${ level }SB`,
        resources: [    
        { id: 'SSB11', resource: 'SftDia8Steel', description: 'Bottom Distri Bars', breadth: builtWidth1, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
        { id: 'SSB12', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
        { id: 'SSB13', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SSB14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
        ],
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
        parent: `L${ level }MEP`,
        resources: [
        { id: 'SLB31', resource: 'mPVCElec', description: 'Electrical', rate: ElecRates.PVC.m, units: 'm', quantity: 10, totalCost: 0 },    
        { id: 'SLB32', resource: 'DailyMason', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SLB33', resource: 'DailyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
        ],
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
        parent: `L${ level }MEP`,
        resources: [
        { id: 'SLB41', resource: 'mHangersMech', description: 'Mechanical', rate: MechRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
        { id: 'SLB42', resource: 'DailyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SLB43', resource: 'DailyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        ],
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
        parent: `L${ level }MEP`,
        resources: [
        { id: 'SLB51', resource: 'mCPVCPlumb', description: 'Plumbing', rate: PlumbRates.CPVC.m, units: 'm', quantity: 10, totalCost: 0 },    
        { id: 'SLB52', resource: 'DailyMason', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SLB53', resource: 'DailyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        ],
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
        parent: `L${ level }MEP`,
        resources: [
        { id: 'SLB61', resource: 'mHangerssprinklerFF', description: 'FireFighting', rate: FFRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
        { id: 'SLB62', resource: 'DailyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SLB63', resource: 'DailyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        ],
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
        parent: `SL${ level }ST`,
        resources: [  
        { id: 'SSL21', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: builtLength1, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SSL22', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
        { id: 'SSL23', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SSL24', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
        ],
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
        parent: `SL${ level }ST`,
        resources: [    
        { id: 'SLB21', resource: 'SftDia12Steel', description: 'Bottom Distri Bars', breadth: builtWidth1, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
        { id: 'SLB22', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
        { id: 'SLB23', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SLB24', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
        ],
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
        parent: `SL${ level }`,
        resources: [
        { id: 'SLB71', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
        { id: 'SLB72', resource: 'CumM30Concrete', description: 'M30Concrete', length: builtLength1, breadth: builtWidth1, thickness: 0.15, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'SLB73', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SLB74', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
        ],
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
        parent: `SL${ level }`,
        resources: [
        { id: 'SLB81', resource: 'CumWater', description: 'Curing Water', length: builtLength1, breadth: builtWidth1, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'SLB82', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
        { id: 'SLB83', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 2, totalCost: 0 },
        ],
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
        parent: `SL${ level }`,
        resources: [      
        { id: 'SLB91', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SLB92', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
        ],
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
        parent: `STCL${ level }${ level + 1 }`,
        resources: [    
        { id: 'FFG101', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.5, diameter: 12, noOfBars: 7, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG102', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.5, diameter: 12, noOfBars: 7, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG103', resource: 'SftDia8Steel', description: 'Distri bars top', length: 0.5, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG104', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 0.5, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG105', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.7, diameter: 10, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG106', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG107', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG108', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG109', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
        ],
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
        parent: `STCL${ level }${ level + 1 }`,
        resources: [
        { id: 'SLB11', resource: 'SqmFootingMetalFormwork', description: 'Metal', length:4.5, breadth:1.7, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
        { id: 'SLB12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SLB13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 4, totalCost: 0 },           
        ],
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
        parent: `FFL${ level }${ level + 1 }`,
        resources: [    
        { id: 'FFG141', resource: 'SftDia12Steel', description: 'Main bars top', length: 5.7, diameter: 12, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG142', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 5.7, diameter: 10, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG143', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 19, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG144', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 19, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG145', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG146', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG147', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG148', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG149', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
        ],
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
        parent: `FFL${ level }${ level + 1 }`,
        resources: [    
        { id: 'FFG121', resource: 'SftDia12Steel', description: 'Main bars top', length: 2.1, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG122', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 2.1, diameter: 12, noOfBars:9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG123', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG124', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG125', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG126', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG127', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG128', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG129', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
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
        parent: `FFL${ level }${ level + 1 }`,
        resources: [    
        { id: 'FFG141', resource: 'SftDia16Steel', description: 'Main bars top', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG142', resource: 'SftDia16Steel', description: 'Main bars bottom', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
        { id: 'FFG143', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG144', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG145', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG146', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
        ],
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
        parent: `FFL${ level }${ level + 1 }`,
        resources: [
        { id: 'FFG151', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
        { id: 'FFG152', resource: 'CumM20Concrete', description: 'M20Concrete', length: 5, breadth: 1.6, thickness: 0.175, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'FFG153', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.9, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'FFG154', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 1.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'FFG155', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG156', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
],
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
        parent: `FFL${ level }${ level + 1 }`,
        resources: [
        { id: 'FFG161', resource: 'CumWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'FFG162', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
        { id: 'FFG163', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 2, totalCost: 0 },
        ],
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
        parent: `FFL${ level }${ level + 1 }`,
        resources: [      
        { id: 'FFG171', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'FFG172', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
        ],
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
        parent: `FSL${ level }${ level + 1 }`,
        resources: [
        { id: 'SFG121', resource: 'SqmFootingMetalFormwork', description: 'Metal', length:4.5, breadth:1.7, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
        { id: 'SFG122', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG123', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 4, totalCost: 0 },           
        ],
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
        parent: `FSL${ level }${ level + 1 }`,
        resources: [    
        { id: 'SFG131', resource: 'SftDia16Steel', description: 'Main bars top', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG132', resource: 'SftDia16Steel', description: 'Main bars bottom', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
        { id: 'SFG133', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG134', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity:1, totalCost: 0 },
        { id: 'SFG135', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG136', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
        ],
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
        parent: `FSL${ level }${ level + 1 }`,
        resources: [    
        { id: 'SFG141', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.2, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG142', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.2, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG143', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.2, diameter: 8, noOfBars: 8, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG144', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.2, diameter: 8, noOfBars: 8, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG145', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG146', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG147', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG148', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG149', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
        ],
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
        parent: `FSL${ level }${ level + 1 }`,
        resources: [    
        { id: 'SFG151', resource: 'SftDia12Steel', description: 'Main bars top', length: 5.7, diameter: 12, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG152', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 5.7, diameter: 12, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG153', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 18, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG154', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 18, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG155', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG156', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG157', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG158', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG159', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
        ],
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
        parent: `FSL${ level }${ level + 1 }`,
        resources: [    
        { id: 'SFG161', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG162', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG163', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG164', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG165', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG166', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'SFG167', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG168', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG169', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
        ],
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
        parent: `FSL${ level }${ level + 1 }`,
        resources: [
        { id: 'SFG171', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
        { id: 'SFG172', resource: 'CumM20Concrete', description: 'M20Concrete', length: 5, breadth: 1.6, thickness: 0.175, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'SFG173', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.09, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'SFG174', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.013, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'SFG175', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG176', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
        ],
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
        parent: `FSL${ level }${ level + 1 }`,
        resources: [
        { id: 'SFG181', resource: 'CumWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'SFG182', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
        { id: 'SFG183', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 2, totalCost: 0 },
        ],
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
        parent: `FSL${ level }${ level + 1 }`,
        resources: [      
        { id: 'SFG191', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'SFG192', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
      ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [    
        { id: 'EL111', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'EL112', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'EL113', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.5, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'EL114', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.5, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'FFG15', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
        { id: 'EL116', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'EL117', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'EL118', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
        ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [
        { id: 'EL121', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },      
        ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [
        { id: 'EL131', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },    
        { id: 'EL132', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.15, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'EL133', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'EL134', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
        ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [
        { id: 'EL141', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
        { id: 'EL142', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
        { id: 'EL143', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
        { id: 'EL144', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'EL145', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },      
        ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [
        { id: 'EL150', resource: 'SqmFootingMetalFormwork', description: 'Metal', length:3, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
        { id: 'EL151', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'EL152', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },         
        ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [
        { id: 'EL168', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'EL169', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'EL1610', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
        ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [
        { id: 'EL171', resource: 'SqmFootingMetalFormwork', description: 'Metal', length:2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
        { id: 'EL172', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
        { id: 'EL173', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },           
        ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [
        { id: 'EL181', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
        { id: 'EL182', resource: 'SftDia12Steel', description: 'Top Bars', length: 2, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
        { id: 'EL183', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 2, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
        { id: 'EL184', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
        { id: 'EL185', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
        ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [  
        { id: 'EL191', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
        ],
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
        parent: `ELECL${ level }L${ level + 1 }`,
        resources: [
        { id: 'EL1101', resource: 'CumM30Concrete', description: 'M30Concrete', length: 2, breadth: 0.23, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
        { id: 'EL1102', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
        { id: 'EL1103', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
        ],
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