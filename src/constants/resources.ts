import { width } from '@fortawesome/free-solid-svg-icons/fa0'
import { IBTRates, EngineerRates,  MachinaryRates,  MasonRates,  HelperRates,  ConcreteRates,  SteelRates,  WoodFormworkRates,  MetalFormworkRates,
  FillingRates,  BarBenderRates,  FencingRates,  ShoringRates,  TermiteRates,  WaterRates,    ExcavationMachineRates,  ExcavationManualRates,  
  Redclayper1000Rates,  FlyAshper1000Rates,  CCBlockper1000Rates,  PlasterManualRates,  PlasterMachineRates,  ElectricalRates, MechanicalRates,
  PlumberRates,  MechMasonRates,  FFMasonRates,  FirefightingRates,  PlumbingRates,  SewerS40PVCRates,  SewerS80PVCRates,  CPVCRates,  PPRRates,  GIRates,  ElectricianRates,  
  DFinsulationRates,  DFRates,  PPaintRates, WPRates,  FloorRates, DoorRates, LitWfixRates, LowCRates, KCtop40sftRates, KCtop20sftRates, KCtop60sftRates, CabinetRates, ExhaustRates,
  FinalRates,  ContingRates  } from './rates'
  //df door frame// Ppaint =primer and paint//
import { DrawingData, Resource } from './types'

function getResources ( taskId: string, drawingData: DrawingData, taskResources: Array<Resource> =null): Array<Resource> {
  const { excavationArea, plotLength, plotWidth, plotArea, builtupPerimeter, builtupArea, builtLength, builtWidth, excavationDepth, slabThickness,groundFloorArea,groundFloorWalls,      
    //Floorwise for slabs//
  builtupArea1, builtLength1, builtWidth1, builtupArea2, builtLength2, builtWidth2, builtupArea3, builtLength3, builtWidth3,
  //roomwise//xxxx room wise L&B  xxxxxxx//helps to calculate brickwork, flooring, paint and other materials as required//
  livingLength, livingWidth,  livingArea, bedroom1Length, bedroom1Width,  bedroom1Area,  bedroom2Length,  bedroom2Width,  
  bedroom2Area,  bedroom3Length,  bedroom3Width,  bedroom3Area,  bedroom4Length,  bedroom4Width,  bedroom4Area,  drawingLength,
  drawingWidth,  drawingArea,  kitchenLength,  kitchenWidth,  kitchenArea,  poojaLength,  poojaWidth,  poojaArea, mediaLength, 
  mediaWidth,  mediaArea,  bath1Length,  bath1Width,  bath1Area,  bath2Length,  bath2Width,  bath2Area,  bath3Length,  bath3Width,  
  bath3Area,  bath4Length,  bath4Width,  bath4Area,  toiletLength,  toiletWidth,  toiletArea,  balconyLength,  balconyWidth,  
  balconyArea,  sitoutLength,  sitoutWidth,  sitoutArea, storeLength,  storeWidth,  storeArea,  parkingLength,  parkingWidth,  
  parkingArea,  staircaseLength,  staircaseWidth,
  staircaseArea,
  //xxxx room wise L&B  xxxxxxx//roomwise//
  door1Length, door1Width, door1Area, window1Length,  window1Width,  window1Area, //useful for deductions//
  ///xxxx//
  door2Length,  door2Width,  door21Area,  window21Length,  window2Width,  window2Area,
  ///xxxx//
  door3Length,  door3Width,  door31Area,  window31Length,  window3Width,  window3Area,
  ///xxxx//
  //xxx//Door and window Frames//
df1Length,  df1Width,  df1Area,  wf1Length,  wf1Width,  wf1Area,
///xxxx//
df2Length,  df2Width,  df21Area, wf21Length,  wf2Width, wf2Area,
///xxxx//
df3Length,  df3Width,  df31Area,  wf31Length,  wf3Width,  wf3Area,
///xxxx////xxx//Door and window Frames//

   } = drawingData
  const resources: Record<string, Array<Resource>> = {

    "PC2": [
    { id: 'GTL11', resource: 'UnitDesignIBT', description: 'Design', length:plotLength, breadth:plotWidth, area: 0, rate: IBTRates.Design.Unit, units: 'Unit', quantity: 1, totalCost: 0 },     
    ], 

    "PC3": [
    { id: 'GTL11', resource: 'UnitEstimateIBT', description: 'Estimate', length:plotLength, breadth:plotWidth, area: 0, rate: IBTRates.Estimate.Unit, units: 'Unit', quantity: 1, totalCost: 0 },     
    ],
  
    "PC4": [
    { id: 'GTL11', resource: 'UnitCityapprIBT', description: 'Municipal approval', length:plotLength, breadth:plotWidth, area: 0, rate: IBTRates.Cityappr.Unit, units: 'Unit', quantity: 1, totalCost: 0 },     
    ],

    "SP1": [
      {
        "id": "C0",
        "resource": "DailyMason",
        "description": "Survery",
        "rate": FencingRates.Fencing.Sft,
        "units": "Sft",
        length:builtLength,
        breadth:builtWidth,        
        thickness:3, // height of fencing
        area:0,        
        "quantity": 0,
        "totalCost": 0
      }
    ],
   
    "SP2": [
      {
        "id": "C1",
        "resource": "DailyMason",
        "description": "Fencing",
        "rate": FencingRates.Fencing.Sqm,
        "units": "Sqm",
        length:builtLength,
        breadth:builtWidth,        
        area:0,
        perimeter:0,
        thickness:3, // height of fencing
        "quantity": 2,
        "totalCost": 0
      },
      {
        "id": "C2",
        "resource": "DailyHelper",
        "description": "Helper",
        "rate": HelperRates.Helper.Daily,
        "units": "Day",
        "quantity": 2,
        "totalCost": 0
      }
    ],
    "SP3": [      
      { id: 'C04', resource: 'CumExcavatorExcavatonMachine', description: 'Excavation', length: 2.5, breadth:2.5, thickness: 3, area:0,  rate:  ExcavationMachineRates.Excavator.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      {
        "id": "C4",
        "resource": "MonthlyMachinery",
        "description": "Cum",
        "rate": MachinaryRates.Dozer.Daily,
        "units": "Month",
        "quantity": 1,
        "totalCost": 0
      },
      {
        "id": "C5",
        "resource": "DailyMason",
        "description": "Excavation",
        "rate": MasonRates.Mason.Daily,
        "units": "Day",
        "quantity": 1,
        "totalCost": 0
      },
      {
        "id": "C6",
        "resource": "DailyHelper",
        "description": "Clean-up",
        "rate": HelperRates.Helper.Daily,
        "units": "Day",
        "quantity": 2,
        "totalCost": 0
      }
    ],
    "SP4": [
      {
        "id": "C7",
        "resource": "DailyMason",
        "description": "Shoring",
        "rate": ShoringRates.Shoring.Sft,
        "units": "Day",
        length: builtLength,
        breadth:builtWidth,
        area:0,        
        thickness:3, // height of fencing
        "quantity": 0,
        "totalCost": 0
      },
      {
        "id": "C8",
        "resource": "DailyHelper",
        "description": "Helper",
        "rate": HelperRates.Helper.Daily,
        "units": "Day",
        "quantity": 2,
        "totalCost": 0
      }
    ],
    "SP5": [
      {
        "id": "C9",
        "resource": "DailyMason",
        "description": "Termite",
        "rate": TermiteRates.Termite.Sft,
        "units": "Day",
        length: builtLength,
        breadth:builtWidth,        
        area:0, 
        "quantity": 1,
        "totalCost": 0
      },
      {
        "id": "C10",
        "resource": "DailyHelper",
        "description": "Termite",
        "rate": HelperRates.Helper.Daily,
        "units": "Day",
        "quantity": 2,
        "totalCost": 0
      }
    ],
    "SP6": [
      {
        "id": "C11",
        "resource": "SftWater",
        "description":"Curing Water",        
        "rate": WaterRates.Water.Sft,
        "units": "Sft",
        length: 10,
        breadth: 20,
        thickness: 0.3,
        area:0,                       
        "quantity": 0, // Will be calculated automatically
        "totalCost": 0
      },
      {
        "id": "C12",
        "resource": "DailyMason",
        "description": "M15",
        "rate": MasonRates.Mason.Daily,
        "units": "Day",
        "quantity": 1,
        "totalCost": 0
      },
      {
        "id": "C13",
        "resource": "DailyHelper",
        "description": "M15",
        "rate": HelperRates.Helper.Daily,
        "units": "Day",
        "quantity": 2,
        "totalCost": 0
      }
    ],
    "FT01": [
      {
        "id": "F1",
        "resource": "CumM15pccConcrete",
        "description": "Concrete Screed",
        "rate": ConcreteRates.M15pcc.Cum,
        "units": "Cum",
        length: 1.2,
        breadth:1.2,
        thickness: 0.15,
        area:0,        
        "quantity": 0,
        "totalCost": 0
      },
      {
        "id": "F2",
        "resource": "HourlyMason",
        "description": "M15",
        "rate": MasonRates.Mason.Hourly,
        "units": "Hour",
        "quantity": 1,
        "totalCost": 0
      },
      {
        "id": "F3",
        "resource": "HourlyHelper",
        "description": "M15",
        "rate": HelperRates.Helper.Hourly,
        "units": "Hour",
        "quantity": 2,
        "totalCost": 0
      }
    ],
    "FT02": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 0.5, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia10Steel', description: 'Main Bars', length: 1.2, diameter: 10, noOfBars: 6, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 1.2, diameter: 12, noOfBars: 6, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT03": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length: 1.2, breadth: 1.2, thickness: 0.3, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT04": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'Concrete', length: 1.2, breadth: 1.2, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],




    "FT201": [
      { id: 'F15', resource: 'CumM15pccConcrete', description: 'Pcc', length: 1.5, breadth: 1.5, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT202": [
      { id: 'F4', resource: 'SftDia6Steel', description: 'Stirrups&Hooks', length: 0.6, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia10Steel', description: 'Main Bars', length: 1.5, diameter: 10, noOfBars: 8, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 1.5, diameter: 12, noOfBars: 8, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT203": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length: 1.5, breadth: 1.5, thickness: 0.3, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT204": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'Concrete', length: 1.5, breadth: 1.5, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],



    "FT301": [
      { id: 'F15', resource: 'CumM15pccConcrete', description: 'Pcc', length: 1.8, breadth: 1.5, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT302": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 0.7, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia10Steel', description: 'Main Bars', length: 1.8, diameter: 12, noOfBars: 10, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 1.8, diameter: 12, noOfBars: 10, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT303": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length: 1.8, breadth: 1.8, thickness: 0.4, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT304": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'Concrete', length: 1.8, breadth: 1.8, thickness: 0.4, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    "FT401": [
      { id: 'F15', resource: 'CumM15pccConcrete', description: 'Pcc', length: 2.0, breadth: 2.0, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT402": [
      { id: 'F4', resource: 'SftDia12Steel', description: 'Stirrups&Hooks', length: 0.7, diameter: 8, noOfBars:6, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 2.0, diameter: 10, noOfBars: 10, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 2.0, diameter: 12, noOfBars: 10, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT403": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length:2.0, breadth: 2.0, thickness: 0.4, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT404": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'Concrete', length: 2.0, breadth: 2.0, thickness: 0.4, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    "FT501": [
      { id: 'F15', resource: 'CumM15pccConcrete', description: 'Pcc', length: 2.5, breadth: 2.5, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT502": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 0.8, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 2.5, diameter: 12, noOfBars: 10, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 2.5, diameter: 12, noOfBars: 12, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT503": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length:2.5, breadth: 2.5, thickness: 0.4, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT504": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'Concrete', length: 2.5, breadth: 2.5, thickness: 0.4, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    "FT601": [
      { id: 'F15', resource: 'CumM15pccConcrete', description: 'Pcc', length: 3.0, breadth: 3.0, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

    "FT602": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 1.0, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia10Steel', description: 'Main Bars', length: 3.0, diameter: 10, noOfBars: 12, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3.0, diameter: 12, noOfBars: 12, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

    "FT603": [

      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length:3.0, breadth: 3.0, thickness: 0.5, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT604": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'Concrete', length: 3.0, breadth: 3.0, thickness: 0.5, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],


    // Soil Filling//
// Soil Filling//


    "C11": [      
      { id: 'F224', resource: 'CumSoilFilling', description: 'sumofallpits', length: 2.5, breadth:2.5, thickness:1.5, area:-0, rate: FillingRates.Soil.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F225', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F226', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'F227', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'F228', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    // Plinth beam Length//
        
    "PT1L1": [
      { id: 'PL1', resource: 'CumStoneFilling', description: 'Filling', length: 0, breadth:0.23, thickness: 0.23, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT1L2": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia16Steel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT1L3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT1L4": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'M20Concrete', length: 0, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

   
    "PT2L1": [
      { id: 'PL1', resource: 'CumStoneFilling', description: 'Filling', length: 0, breadth:0.26, thickness: 0.26, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT2L2": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia16Steel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2L3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.26, thickness: 0.26, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2L4": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'M20Concrete', length: 0, breadth: 0.26, thickness: 0.26, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    
    "PT3L1": [
      { id: 'PL1', resource: 'CumStoneFilling', description: 'Filling', length: 0, breadth:0.3, thickness: 0.3, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT3L2": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia16Steel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3L3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3L4": [
      { id: 'F12', resource: 'CumM25Concrete', description: 'M25Concrete', length: 0, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    
    "PT4L1": [
      { id: 'PL1', resource: 'CumStoneFilling', description: 'Filling', length: 0, breadth:0.3, thickness: 0.45, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT4L2": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia16Steel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4L3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4L4": [
      { id: 'F12', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3.0, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    // plinth beam Length//

    // plinth beam breadth//
    
    "PT1B1": [
      { id: 'PL1', resource: 'CumStoneFilling', description: 'Filling', length: 0, breadth:0.23, thickness: 0.23, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT1B2": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia16Steel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    ],
    "PT1B3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT1B4": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'M20Concrete', length: 0, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

   
    "PT2B1": [
      { id: 'PL1', resource: 'CumStoneFilling', description: 'Filling', length: 0, breadth:0.26, thickness: 0.26, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT2B2": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia16Steel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2B3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.26, thickness: 0.26, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2B4": [
      { id: 'F12', resource: 'CumM20Concrete', description: 'M20Concrete', length: 0, breadth: 0.26, thickness: 0.26, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    
    "PT3B1": [
      { id: 'PL1', resource: 'CumStoneFilling', description: 'Filling', length: 0, breadth:0.3, thickness: 0.3, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT3B2": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia16Steel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3B3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3B4": [
      { id: 'F12', resource: 'CumM25Concrete', description: 'M25Concrete', length: 0, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    
    "PT4B1": [
      { id: 'PL1', resource: 'CumStoneFilling', description: 'Filling', length: 0, breadth:0.3, thickness: 0.45, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT4B2": [
      { id: 'F4', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'SftDia12Steel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'SftDia16Steel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4B3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4B4": [
      { id: 'F12', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3.0, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    // plinth beam breadth//              //plinth beam breadth end//

    //underground Sewage tank //
    "STO": [
    { id: 'STO', resource: 'CumExcavatorExcavatonMachine', description: 'Excavation', length: 5, breadth:5, thickness: 3, area:0,  rate:  ExcavationMachineRates.Excavator.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
    { id: 'ST1', resource: 'CumExcavationManual', description: 'Excavation', length: 5, breadth:5, thickness: 3, area:0,  rate:  ExcavationManualRates.ToolsExcavation.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
    {id: 'ST2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'ST3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'ST4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'ST5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
  ],
    "ST1": [
      { id: 'ST11', resource: 'CumM15pccConcrete', description: 'M15Concrete', length: 6, breadth: 6, thickness: 0.15, area:0,  rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'ST12', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST2": [
      { id: 'ST21', resource: 'Cuminch9Redclayper1000', description: 'Brickwork', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 },      
      { id: 'ST22', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST23', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST24', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST25', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST3": [
      { id: 'ST31', resource: 'Cuminch9Redclayper1000', description: 'Brickwork', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 },      
      { id: 'ST32', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST33', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST34', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST35', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST4": [
      { id: 'ST41', resource: 'Cuminch6Redclayper1000', description: 'Baffle', length: 6, breadth:3, thickness: 0.6, area:0,  rate: Redclayper1000Rates.inch6.Cum, units: 'Cum', quantity: 0, totalCost: 0 },      
      { id: 'ST42', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST43', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST44', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST45', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST5": [
      { id: 'ST51', resource: 'Cummm12PlasterManual', description: 'Plaster', length: 6, breadth:3, thickness: 0.012, area:0,  rate: PlasterManualRates.mm12.Cum, units: 'Cum', quantity: 0, totalCost: 0 },      
      { id: 'ST52', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST53', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST54', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST55', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST6": [
      { id: 'ST61', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST62', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'ST63', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    
      { id: 'ST71', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST72', resource: 'SftDia10Steel', description: 'Main Bars', length: 6, diameter: 10, noOfBars: 8, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST73', resource: 'SftDia10Steel', description: 'Distribution Bars', length: 3, diameter: 10, noOfBars: 16, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
      { id: 'ST76', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'ST77', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
      { id: 'ST78', resource: 'CumM20Concrete', description: 'M20Concrete', length: 6, breadth: 6, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'ST79', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST710', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    //sewer pipes//
    "DC1": [
    { id: 'DC11', resource: 'mmm100SewerS40PVC', description: 'Sewer', length: 5, area:0,  rate:  SewerS40PVCRates.mm100.m, units: 'm', quantity: 0, totalCost: 0 },    
    { id: 'DC12', resource: 'DailyMason', description: 'Sewer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'DC13', resource: 'DailyHelper', description: 'Sewer', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },    
  ],
  "DC2": [
    { id: 'DC22', resource: 'DailyMason', description: 'Sewer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'DC23', resource: 'DailyHelper', description: 'Sewer', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },    
  ],
  //sewer pipes//

  //underground Sewage tank //

  //underground Water tank //
  "WT1": [
    { id: 'STO', resource: 'CumExcavatorExcavatonMachine', description: 'Excavation', length: 5, breadth:5, thickness: 3, area:0,  rate:  ExcavationMachineRates.Excavator.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
    { id: 'ST1', resource: 'CumExcavationManual', description: 'Excavation', length: 5, breadth:5, thickness: 3, area:0,  rate:  ExcavationManualRates.ToolsExcavation.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
    {id: 'ST2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'ST3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'ST4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'ST5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
  ],
    "WT2": [
      { id: 'ST11', resource: 'CumM15pccConcrete', description: 'M15Concrete', length: 6, breadth: 6, thickness: 0.15, area:0,  rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'ST12', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "WT3": [
      { id: 'ST21', resource: 'Cuminch6Redclayper1000', description: 'Brickwork', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 },      
      { id: 'ST22', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST23', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST24', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST25', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "WT4": [
      { id: 'ST31', resource: 'Cuminch9Redclayper1000', description: 'Brickwork', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 },      
      { id: 'ST32', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST33', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST34', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST35', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],    
    "WT5": [
      { id: 'ST41', resource: 'Cummm12PlasterManual', description: 'Plaster', length: 6, breadth:3, thickness: 0.012, area:0,  rate: PlasterManualRates.mm12.Cum, units: 'Cum', quantity: 0, totalCost: 0 },      
      { id: 'ST42', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST43', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST44', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST45', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "WT6": [
      { id: 'ST61', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST62', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'ST63', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    
      { id: 'ST71', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST72', resource: 'SftDia10Steel', description: 'Main Bars', length: 6, diameter: 10, noOfBars: 8, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST73', resource: 'SftDia10Steel', description: 'Distribution Bars', length: 3, diameter: 10, noOfBars: 16, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
      { id: 'ST76', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'ST77', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
      { id: 'ST78', resource: 'CumM20Concrete', description: 'M20Concrete', length: 6, breadth: 6, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'ST79', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST710', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
  //underground Water tank //

  //Water tank plumbing pipes//    
    "WTPL2": [
      { id: 'WTP11', resource: 'ftmm20CPVC', description: 'Plumbing', length: 5, noOfBars:2,   rate:  CPVCRates.mm20.m, units: 'm', quantity: 0, totalCost: 0 },    
      { id: 'WTP12', resource: 'DailyMason', description: 'Plumbing', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'WTP13', resource: 'DailyHelper', description: 'Plumbing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },    
    ],
    "WTPL3": [
      { id: 'WTP21', resource: 'ftmm32CPVC', description: 'Plumbing', length: 5, area:0,  rate:  CPVCRates.mm32.m, units: 'm', quantity: 0, totalCost: 0 },    
      { id: 'WTP22', resource: 'DailyMason', description: 'Plumbing', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'WTP23', resource: 'DailyHelper', description: 'Plumbing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },    
    ],   
  //Water tank plumbing pipes//

    //Filling//

    "GP1": [
      { id: 'GP10', resource: 'CumSoilFilling', description: 'Totalarea-deduct', length: builtLength, breadth:builtWidth, thickness: excavationDepth, area:0, rate: FillingRates.Soil.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'GP11', resource: 'DailyMason', description: 'Filling', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'GP12', resource: 'DailyHelper', description: 'Filling', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
      { id: 'GP13', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
      { id: 'GP14', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },      
    ],
    "GP2": [
      { id: 'GP20', resource: 'SftDia8Steel', description: 'Main Bars', length: 12, diameter: 8, noOfBars: 20, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GP21', resource: 'SftDia8Steel', description: 'Distribution Bars', length: 12, diameter: 6, noOfBars: 20, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GP22', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
      { id: 'GP23', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'GP24', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "GP3": [
      { id: 'GP30', resource: 'CumM15pccConcrete', description: 'Floor Screed', length: builtLength, breadth: builtWidth, thickness: 0.1, area:0,  rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'GP31', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'GP32', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    "GP4": [
      { id: 'GP40', resource: 'CumWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.1, area:0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'GP31', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'GP32', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

//ground slab //

//Level-1 column 3x0.23x0.23 //type-1//
    "GCT11": [
      { id: 'GCT11', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GCT12', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GCT13', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
      { id: 'GCT14', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'GCT15', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },      
    ],
    "GCT12": [
      { id: 'GCT110', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GCT111', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'GCT112', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },         
    ],
    "GCT13": [
      { id: 'ST78', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'ST79', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST710', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
//Level-1 column 3x0.23x0.23 //type-1//

//Level-1 column 3x0.3x0.3 //type-2//
"CT21": [
  { id: 'CT211', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT212', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT213', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'CT214', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'CT215', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
],
"CT22": [
  { id: 'CT221', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT222', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'CT223', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },         
],
"CT23": [
  { id: 'CT231', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'CT232', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'CT233', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level-1 column 3x0.23x0.23 //type-2//

//Level-1 column 3x0.3x0.45 //type-3//
"CT31": [
  { id: 'CT311', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT312', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT313', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'CT314', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'CT315', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
],
"CT32": [
  { id: 'CT321', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT322', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'CT323', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },         
],
"CT33": [
  { id: 'CT331', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'CT332', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'CT333', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level-1 column 3x0.23x0.23 //type-3//

//Level-1 Beam Type-1//3x0.23x0.45
"BT11": [
  { id: 'BT111', resource: 'CumMetalFormwork', description: 'Metal', length:3.2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT112', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'BT113', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },           
],
"BT12": [
  { id: 'BT121', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT122', resource: 'SftDia12Steel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT123', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'BT124', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'BT125', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
],
"BT13": [  
  { id: 'BT131', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"BT14": [
  { id: 'BT141', resource: 'CumM30Concrete', description: 'M30Concrete', length: 3, breadth: 0.23, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'BT142', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'BT143', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level-1 Beam Type-1//
//Level-1 Beam Type-2//
"BT21": [
  { id: 'BT211', resource: 'CumMetalFormwork', description: 'Metal', length:3.2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT212', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'BT213', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },           
],
"BT22": [
  { id: 'BT221', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT222', resource: 'SftDia12Steel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT223', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'BT224', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'BT225', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
],
"BT23": [  
  { id: 'BT231', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"BT24": [
  { id: 'BT241', resource: 'CumM30Concrete', description: 'M30Concrete', length: 3, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'BT242', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'BT243', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level-1 Beam Type-2//

//Level-1 SlabSteel @ -1//

//Level-1 Bottom Bars slab //
"SLB1": [
  { id: 'SLB11', resource: 'CumMetalFormwork', description: 'Metal', length:builtLength1, breadth:builtWidth1, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'SLB12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 4, totalCost: 0 },           
],
"SSL1": [  
  { id: 'SSL11', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: builtLength1, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'SSL12', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'SSL13', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SSL14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
"SSB1": [    
  { id: 'SSB11', resource: 'SftDia8Steel', description: 'Bottom Distri Bars', breadth: builtWidth1, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'SSB12', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'SSB13', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SSB14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Level-1 Bottom Bars slab //

//Level-1 MEP //
"SLB3": [
  { id: 'SLB31', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 10, totalCost: 0 },    
  { id: 'SLB32', resource: 'DailyMason', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB33', resource: 'DailyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
"SLB4": [
  { id: 'SLB41', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'SLB42', resource: 'DailyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB43', resource: 'DailyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
"SLB5": [
  { id: 'SLB51', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 10, totalCost: 0 },    
  { id: 'SLB52', resource: 'DailyMason', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB53', resource: 'DailyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
"SLB6": [
  { id: 'SLB61', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'SLB62', resource: 'DailyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB63', resource: 'DailyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
//Level-1 MEP //

//Level-1 Top Bars lab //
"SSL2": [  
  { id: 'SSL21', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: builtLength1, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'SSL22', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'SSL23', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SSL24', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
"SLB2": [    
  { id: 'SLB21', resource: 'SftDia12Steel', description: 'Bottom Distri Bars', breadth: builtWidth1, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'SLB22', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'SLB23', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB24', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Level-1 Top Bars lab //

//Level-1 Slab Concrete //
"SLB7": [
  { id: 'SLB71', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
  { id: 'SLB72', resource: 'CumM30Concrete', description: 'M30Concrete', length: builtLength1, breadth: builtWidth1, thickness: 0.15, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'SLB73', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB74', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
],
//Level-1 Slab Concrete //
"SLB8": [
      { id: 'SLB81', resource: 'CumWater', description: 'Curing Water', length: builtLength1, breadth: builtWidth1, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'SLB82', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'SLB83', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

"SLB9": [      
      { id: 'SLB91', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'SLB92', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    ],
// Level-1 staircase ground //

//Level-1 Foundation Steel//    
"FFG10": [    
  { id: 'FFG101', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.5, diameter: 12, noOfBars: 7, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'FFG101', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.5, diameter: 12, noOfBars: 7, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'FFG101', resource: 'SftDia8Steel', description: 'Distri bars top', length: 0.5, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'FFG101', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 0.5, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'FFG101', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.7, diameter: 10, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'FFG101', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'FFG102', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'FFG103', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'FFG104', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
//Level-1 Foundation Steel//
//Level-1 Formwork//
"FFG11": [
  { id: 'SLB11', resource: 'CumMetalFormwork', description: 'Metal', length:4.5, breadth:1.7, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'SLB12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 4, totalCost: 0 },           
],
//Level-1 Formwork//

//Level-1 Waist Slab Steel//
"FFG12": [    
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
//Level-1 Waist Slab Steel//

//Level-1 Landing Slab Steel//
"FFG13": [    
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
//Level-1 Landing Slab Steel//

//Level-1 Beam Slab Steel//
"FFG14": [    
  { id: 'FFG141', resource: 'SftDia16Steel', description: 'Main bars top', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'FFG142', resource: 'SftDia16Steel', description: 'Main bars bottom', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
  { id: 'FFG143', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'FFG144', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'FFG145', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'FFG146', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
],
//Level-1 Beam Slab Steel//
//Level-1 Slab Concrete //
"FFG15": [
  { id: 'FFG151', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
  { id: 'FFG152', resource: 'CumM20Concrete', description: 'M20Concrete', length: 5, breadth: 1.6, thickness: 0.175, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'FFG152', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.9, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'FFG152', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 1.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'FFG153', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'FFG154', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
],
//Level-1 Slab Concrete //
"FFG16": [
  { id: 'FFG161', resource: 'CumWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'FFG162', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'FFG163', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 2, totalCost: 0 },
],

"FFG17": [      
  { id: 'FFG171', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'FFG172', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level-1 second Flight //
"SFG12": [
  { id: 'SFG121', resource: 'CumMetalFormwork', description: 'Metal', length:4.5, breadth:1.7, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'SFG122', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SFG123', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 4, totalCost: 0 },           
],
//Level-1 Beam Steel//
"SFG13": [    
  { id: 'SFG131', resource: 'SftDia16Steel', description: 'Main bars top', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'SFG132', resource: 'SftDia16Steel', description: 'Main bars bottom', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
  { id: 'SFG133', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'SFG134', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity:1, totalCost: 0 },
  { id: 'SFG135', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SFG136', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
],
//Level-1 Beam Steel//

//Level-1 Landing Slab Steel//   
"SFG14": [    
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
//Level-1 Landing Slab Steel//
//Level-1 Waist Slab Steel//
"SFG15": [    
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
//Level-1 Waist Slab Steel//
//Level-1 Landing Slab Steel//
"SFG16": [    
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
//Level-1 Landing Slab Steel//


//Level-1 Staircase Concrete Second Flight //
"SFG17": [
  { id: 'SFG171', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
  { id: 'SFG172', resource: 'CumM20Concrete', description: 'M20Concrete', length: 5, breadth: 1.6, thickness: 0.175, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'SFG172', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.09, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'SFG172', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.013, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'SFG173', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SFG174', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
],
//Level-1 Staircase Concrete Second Flight //
"SFG18": [
  { id: 'SFG181', resource: 'CumWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'SFG182', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'SFG183', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 2, totalCost: 0 },
],

"SFG19": [      
  { id: 'SFG191', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SFG192', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level-1 End Second Flight //

//Level-1 Elevator //

//Level-1 Foundation Steel//    
"EL11": [    
  { id: 'EL111', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'EL111', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'EL111', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.5, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'EL111', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.5, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'FFG143', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'EL112', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'EL113', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'EL114', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
],
//Level-1 Foundation Steel//

//Level-1 Elevator Columns Concrete //
"EL12": [
  { id: 'EL121', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },      
],
"EL13": [
  { id: 'EL131', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },    
  { id: 'EL132', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.15, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'EL133', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'EL134', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
//Level-1 Elevator Columns Concrete //


//Level-1 Elevator Columns Steel //
"EL14": [
  { id: 'EL141', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'EL142', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'EL143', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'EL144', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'EL145', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },      
],
"EL15": [
  { id: 'EL150', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'EL151', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'EL152', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },         
],
"EL16": [
  { id: 'EL168', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'EL169', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'EL1610', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level-1 Elevator Columns Steel //

//Level-1 Elevator Beam Concrete//
"EL17": [
  { id: 'EL171', resource: 'CumMetalFormwork', description: 'Metal', length:2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'EL172', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'EL173', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },           
],
"EL18": [
  { id: 'EL181', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'EL182', resource: 'SftDia12Steel', description: 'Top Bars', length: 2, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'EL183', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 2, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'EL184', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'EL185', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
],
"EL19": [  
  { id: 'EL191', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"EL110": [
  { id: 'EL1101', resource: 'CumM30Concrete', description: 'M30Concrete', length: 2, breadth: 0.23, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'EL1102', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'EL1103', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level-1 Elevator Beam Concrete//

//Level2//

//Level2 column 3x0.23x0.23 //type-1//
"L2T11": [
  { id: 'L2T111', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'L2T112', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'L2T113', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'L2T114', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L2T115', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 4, totalCost: 0 },      
],
"L2T12": [
  { id: 'L2T120', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'L2T121', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L2T122', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 4, totalCost: 0 },         
],
"L2T13": [
  { id: 'L2T138', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'L2T139', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L2T1310', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 4, totalCost: 0 },
],
//Level2 column 3x0.23x0.23 //type-1//

//Level2 column 3x0.3x0.3 //type-2//
"L2T21": [
{ id: 'L2T211', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2T212', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2T213', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L2T214', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2T215', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },  
],
"L2T22": [
{ id: 'L2T221', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2T222', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2T223', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },         
],
"L2T23": [
{ id: 'L2T231', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2T232', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2T233', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level2 column 3x0.23x0.23 //type-2//

//Level2 column 3x0.3x0.45 //type-3//
"L2T31": [
{ id: 'L2T311', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2T312', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2T313', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L2T314', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2T315', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },  
],
"L2T32": [
{ id: 'L2T321', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2T322', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2T323', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },         
],
"L2T33": [
{ id: 'L2T331', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2T332', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2T333', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level2 column 3x0.23x0.23 //type-3//

//Level2 Beam Type-1//3x0.23x0.45
"L2BT11": [
{ id: 'L2BT111', resource: 'CumMetalFormwork', description: 'Metal', length:3.2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2BT112', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2BT113', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },           
],
"L2BT12": [
{ id: 'L2BT121', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2BT122', resource: 'SftDia12Steel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2BT123', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L2BT124', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2BT125', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },  
],
"L2BT13": [  
{ id: 'L2BT131', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"L2BT14": [
{ id: 'L2BT141', resource: 'CumM30Concrete', description: 'M30Concrete', length: 3, breadth: 0.23, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2BT142', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2BT143', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level2 Beam Type-1//
//Level2 Beam Type-2//
"L2BT21": [
{ id: 'L2BT211', resource: 'CumMetalFormwork', description: 'Metal', length:3.2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2BT212', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2BT213', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },           
],
"L2BT22": [
{ id: 'L2BT221', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2BT222', resource: 'SftDia12Steel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2BT223', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L2BT224', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2BT225', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },  
],
"L2BT23": [  
{ id: 'L2BT231', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"L2BT24": [
{ id: 'L2BT241', resource: 'CumM30Concrete', description: 'M30Concrete', length: 3, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2BT242', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2BT243', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level2 Beam Type-2//

//Level2 SlabSteel @ -1//

//Level2 Bottom Bars slab //
"L2SLB1": [
{ id: 'L2SLB11', resource: 'CumMetalFormwork', description: 'Metal', length:builtLength2, breadth:builtWidth2, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2SLB12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SLB13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },           
],
"L2SSL1": [  
{ id: 'L2SSL11', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: builtLength2, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SSL12', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
{ id: 'L2SSL13', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SSL14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
"L2SSB1": [    
{ id: 'L2SSB11', resource: 'SftDia8Steel', description: 'Bottom Distri Bars', breadth: builtWidth2, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L2SSB12', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
{ id: 'L2SSB13', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SSB14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
//Level2 Bottom Bars slab //

//Level2 MEP //
"L2SLB3": [
{ id: 'L2SLB31', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 10, totalCost: 0 },    
{ id: 'L2SLB32', resource: 'DailyMason', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SLB33', resource: 'DailyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 3, totalCost: 0 },
],
"L2SLB4": [
{ id: 'L2SLB41', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'L2SLB42', resource: 'DailyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SLB43', resource: 'DailyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
"L2SLB5": [
{ id: 'L2SLB51', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 10, totalCost: 0 },    
{ id: 'L2SLB52', resource: 'DailyMason', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SLB53', resource: 'DailyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
"L2SLB6": [
{ id: 'L2SLB61', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'L2SLB62', resource: 'DailyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SLB63', resource: 'DailyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level2 MEP //

//Level2 Top Bars lab //
"L2SSL2": [  
{ id: 'L2SSL21', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: builtLength2, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SSL22', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
{ id: 'L2SSL23', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SSL24', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
"L2SLB2": [    
{ id: 'L2SLB21', resource: 'SftDia12Steel', description: 'Bottom Distri Bars', breadth: builtWidth2, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L2SLB22', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
{ id: 'L2SLB23', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SLB24', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
//Level2 Top Bars lab //

//Level2 Slab Concrete //
"L2SLC1": [
{ id: 'L2SLC11', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
{ id: 'L2SLC12', resource: 'CumM30Concrete', description: 'M30Concrete', length: builtLength2, breadth: builtWidth2, thickness: 0.15, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2SLC13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SLC14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
],
//Level2 Slab Concrete //
"L2SLC2": [
  { id: 'L2SLC21', resource: 'CumWater', description: 'Curing Water', length: builtLength2, breadth: builtWidth2, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'L2SLC22', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'L2SLC23', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 3, totalCost: 0 },
],

"L2SLC3": [      
  { id: 'L2SLC31', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L2SLC32', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },
],
// Level2 staircase//

//Level2 Formwork//
"L2FF1": [
  { id: 'L2FF11', resource: 'CumMetalFormwork', description: 'Metal', length:4.5, breadth:1.7, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'L2FF12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L2FF13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },           
  ],
  //Level2 Formwork//
//Level2 Landing Slab//    
"L2FF2": [    
  { id: 'L2FF21', resource: 'SftDia12Steel', description: 'Main bars top', length: 2.1, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L2FF22', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 2.1, diameter: 12, noOfBars:9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L2FF23', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L2FF24', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L2FF25', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L2FF26', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L2FF27', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L2FF28', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
  ],
//Level2 Landing Slab Steel//

//Level2 Waist Slab Steel//
"L2FF3": [    
{ id: 'L2FF31', resource: 'SftDia12Steel', description: 'Main bars top', length: 5.7, diameter: 12, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF32', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 5.7, diameter: 10, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF33', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 19, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF34', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 19, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF35', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF36', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF37', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2FF38', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level2 Waist Slab Steel//

//Level2 Landing Slab Steel//
"L2FF4": [    
{ id: 'L2FF41', resource: 'SftDia12Steel', description: 'Main bars top', length: 2.1, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF42', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 2.1, diameter: 12, noOfBars:9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF43', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF44', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF45', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF46', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF47', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2FF48', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level2 Landing Slab Steel//

//Level2 Beam Slab Steel//
"L2FF5": [    
{ id: 'L2FF51', resource: 'SftDia16Steel', description: 'Main bars top', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF52', resource: 'SftDia16Steel', description: 'Main bars bottom', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
{ id: 'L2FF53', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2FF54', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2FF55', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level2 Beam Slab Steel//
//Level2 Slab Concrete //
"L2FF6": [
{ id: 'L2FF61', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
{ id: 'L2FF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 5, breadth: 1.6, thickness: 0.175, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2FF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.9, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2FF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 1.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2FF63', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2FF64', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 6, totalCost: 0 },
],
//Level2 Slab Concrete //
"L2FF7": [
{ id: 'L2FF71', resource: 'CumWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2FF72', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2FF73', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 2, totalCost: 0 },
],

"L2FFG18": [      
{ id: 'L2FFG181', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2FFG182', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level2 second Flight //
"L2SF1": [
{ id: 'L2SF11', resource: 'CumMetalFormwork', description: 'Metal', length:4.5, breadth:1.7, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2SF12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 4, totalCost: 0 },           
],
//Level2 Beam Steel//
"L2SF2": [    
{ id: 'L2SF21', resource: 'SftDia16Steel', description: 'Main bars top', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF22', resource: 'SftDia16Steel', description: 'Main bars bottom', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
{ id: 'L2SF23', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF24', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity:1, totalCost: 0 },
{ id: 'L2SF25', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF26', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Level2 Beam Steel//

//Level2 Landing Slab Steel//   
"L2SF3": [    
{ id: 'L2SF31', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.2, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF31', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.2, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF31', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.2, diameter: 8, noOfBars: 8, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF31', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.2, diameter: 8, noOfBars: 8, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF31', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF31', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF32', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF33', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF34', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Level2 Landing Slab Steel//
//Level2 Waist Slab Steel//
"L2SF4": [    
{ id: 'L2SF41', resource: 'SftDia12Steel', description: 'Main bars top', length: 5.7, diameter: 12, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF42', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 5.7, diameter: 12, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF43', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 18, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF44', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 18, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF45', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF46', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF47', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF48', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF49', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Level2 Waist Slab Steel//
//Level2 Landing Slab Steel//
"L2SF5": [    
{ id: 'L2SF51', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF52', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF53', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF54', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF55', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF56', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L2SF57', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF58', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF59', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
//Level2 Landing Slab Steel//


//Level2 Staircase Concrete Second Flight //
"L2SF6": [
{ id: 'L2SF61', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
{ id: 'L2SF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 5, breadth: 1.6, thickness: 0.175, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2SF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.09, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2SF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.013, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2SF63', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF64', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
],
//Level2 Staircase Concrete Second Flight //
"L2SF7": [
{ id: 'L2SF71', resource: 'CumWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2SF72', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2SF73', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 3, totalCost: 0 },
],

"L2SF8": [      
{ id: 'L2SF81', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2SF82', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level2 End Second Flight //

//Level2 Elevator //

//Level2 Elevator Columns Steel //
"L2EL4": [
{ id: 'L2EL41', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2EL42', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2EL43', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L2EL44', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2EL45', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },      
],
"L2EL5": [
{ id: 'L2EL50', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2EL51', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2EL52', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },         
],
"L2EL6": [
{ id: 'L2EL68', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2EL69', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2EL610', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level2 Elevator Columns Steel //

//Level2 Elevator Beam Concrete//
"L2EL7": [
{ id: 'L2EL71', resource: 'CumMetalFormwork', description: 'Metal', length:2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2EL72', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2EL73', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },           
],
"L2EL8": [
{ id: 'L2EL81', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2EL82', resource: 'SftDia12Steel', description: 'Top Bars', length: 2, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L2EL83', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 2, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L2EL84', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L2EL85', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },  
],
"L2EL9": [  
{ id: 'L2EL91', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"L2EL10": [
{ id: 'L2EL101', resource: 'CumM30Concrete', description: 'M30Concrete', length: 2, breadth: 0.23, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L2EL102', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L2EL103', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level2 Elevator Beam Concrete//

//Level2 end//

//Level3//

//Level3 column 3x0.23x0.23 //type-1//
"L3T11": [
  { id: 'L3T111', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'L3T112', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'L3T113', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'L3T114', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L3T115', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 4, totalCost: 0 },      
],
"L3T12": [
  { id: 'L3T120', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'L3T121', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L3T122', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 4, totalCost: 0 },         
],
"L3T13": [
  { id: 'L3T138', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'L3T139', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L3T1310', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 4, totalCost: 0 },
],
//Level3 column 3x0.23x0.23 //type-1//

//Level3 column 3x0.3x0.3 //type-2//
"L3T21": [
{ id: 'L3T211', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3T212', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3T213', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L3T214', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3T215', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },  
],
"L3T22": [
{ id: 'L3T221', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3T222', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3T223', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },         
],
"L3T23": [
{ id: 'L3T231', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3T232', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3T233', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level3 column 3x0.23x0.23 //type-2//

//Level3 column 3x0.3x0.45 //type-3//
"L3T31": [
{ id: 'L3T311', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3T312', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3T313', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L3T314', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3T315', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },  
],
"L3T32": [
{ id: 'L3T321', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3T322', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3T323', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },         
],
"L3T33": [
{ id: 'L3T331', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3T332', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3T333', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level3 column 3x0.23x0.23 //type-3//

//Level3 Beam Type-1//3x0.23x0.45
"L3BT11": [
{ id: 'L3BT111', resource: 'CumMetalFormwork', description: 'Metal', length:3.2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3BT112', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3BT113', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },           
],
"L3BT12": [
{ id: 'L3BT121', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3BT122', resource: 'SftDia12Steel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3BT123', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L3BT124', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3BT125', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },  
],
"L3BT13": [  
{ id: 'L3BT131', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"L3BT14": [
{ id: 'L3BT141', resource: 'CumM30Concrete', description: 'M30Concrete', length: 3, breadth: 0.23, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3BT142', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3BT143', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level3 Beam Type-1//
//Level3 Beam Type-2//
"L3BT21": [
{ id: 'L3BT211', resource: 'CumMetalFormwork', description: 'Metal', length:3.2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3BT212', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3BT213', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },           
],
"L3BT22": [
{ id: 'L3BT221', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3BT222', resource: 'SftDia12Steel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3BT223', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L3BT224', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3BT225', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 3, totalCost: 0 },  
],
"L3BT23": [  
{ id: 'L3BT231', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"L3BT24": [
{ id: 'L3BT241', resource: 'CumM30Concrete', description: 'M30Concrete', length: 3, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3BT242', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3BT243', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 3, totalCost: 0 },
],
//Level3 Beam Type-2//

//Level3 SlabSteel @ -1//

//Level3 Bottom Bars slab //
"L3SLB1": [
{ id: 'L3SLB11', resource: 'CumMetalFormwork', description: 'Metal', length:builtLength3, breadth:builtWidth3, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3SLB12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SLB13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },           
],
"L3SSL1": [  
{ id: 'L3SSL11', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: builtLength3, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SSL12', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
{ id: 'L3SSL13', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SSL14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
"L3SSB1": [    
{ id: 'L3SSB11', resource: 'SftDia8Steel', description: 'Bottom Distri Bars', breadth: builtWidth3, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L3SSB12', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
{ id: 'L3SSB13', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SSB14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
//Level3 Bottom Bars slab //

//Level3 MEP //
"L3SLB3": [
{ id: 'L3SLB31', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 10, totalCost: 0 },    
{ id: 'L3SLB32', resource: 'DailyMason', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SLB33', resource: 'DailyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 3, totalCost: 0 },
],
"L3SLB4": [
{ id: 'L3SLB41', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'L3SLB42', resource: 'DailyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SLB43', resource: 'DailyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
"L3SLB5": [
{ id: 'L3SLB51', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 10, totalCost: 0 },    
{ id: 'L3SLB52', resource: 'DailyMason', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SLB53', resource: 'DailyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
"L3SLB6": [
{ id: 'L3SLB61', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'L3SLB62', resource: 'DailyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SLB63', resource: 'DailyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level3 MEP //

//Level3 Top Bars lab //
"L3SSL2": [  
{ id: 'L3SSL21', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: builtLength3, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SSL22', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
{ id: 'L3SSL23', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SSL24', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
"L3SLB2": [    
{ id: 'L3SLB21', resource: 'SftDia12Steel', description: 'Bottom Distri Bars', breadth: builtWidth3, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L3SLB22', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
{ id: 'L3SLB23', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SLB24', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
//Level3 Top Bars lab //

//Level3 Slab Concrete //
"L3SLC1": [
{ id: 'L3SLC11', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
{ id: 'L3SLC12', resource: 'CumM30Concrete', description: 'M30Concrete', length: builtLength3, breadth: builtWidth3, thickness: 0.15, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3SLC13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SLC14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
],
//Level3 Slab Concrete //
"L3SLC2": [
  { id: 'L3SLC21', resource: 'CumWater', description: 'Curing Water', length: builtLength3, breadth: builtWidth3, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'L3SLC22', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'L3SLC23', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 3, totalCost: 0 },
],

"L3SLC3": [      
  { id: 'L3SLC31', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L3SLC32', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },
],
// Level3 staircase ground //

//Level3 Formwork//
"L3FF1": [
  { id: 'L3FF11', resource: 'CumMetalFormwork', description: 'Metal', length:4.5, breadth:1.7, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'L3FF12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L3FF13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },           
  ],
  //Level3 Formwork//

//Level3 Landing Slab Steel//    
"L3FF2": [    
  { id: 'L3FF21', resource: 'SftDia12Steel', description: 'Main bars top', length: 2.1, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L3FF22', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 2.1, diameter: 12, noOfBars:9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L3FF23', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L3FF24', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L3FF25', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L3FF26', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'L3FF27', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'L3FF28', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
  ],
//Level3 Landing Slab Steel//

//Level3 Waist Slab Steel//
"L3FF3": [    
{ id: 'L3FF31', resource: 'SftDia12Steel', description: 'Main bars top', length: 5.7, diameter: 12, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF32', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 5.7, diameter: 10, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF33', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 19, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF34', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 19, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF35', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF36', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF37', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3FF38', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
//Level3 Waist Slab Steel//

//Level3 Landing Slab Steel//
"L3FF4": [    
{ id: 'L3FF41', resource: 'SftDia12Steel', description: 'Main bars top', length: 2.1, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF42', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 2.1, diameter: 12, noOfBars:9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF43', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF44', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF45', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF46', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF47', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3FF48', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
//Level3 Landing Slab Steel//

//Level3 Beam Slab Steel//
"L3FF5": [    
{ id: 'L3FF51', resource: 'SftDia16Steel', description: 'Main bars top', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF52', resource: 'SftDia16Steel', description: 'Main bars bottom', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
{ id: 'L3FF53', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3FF54', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3FF55', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
//Level3 Beam Slab Steel//
//Level3 Slab Concrete //
"L3FF6": [
{ id: 'L3FF61', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
{ id: 'L3FF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 5, breadth: 1.6, thickness: 0.175, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3FF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.9, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3FF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 1.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3FF63', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3FF64', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 6, totalCost: 0 },
],
//Level3 Slab Concrete //
"L3FF7": [
{ id: 'L3FF71', resource: 'CumWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3FF72', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3FF73', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 2, totalCost: 0 },
],
"L3FF8": [      
{ id: 'L3FF81', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3FF82', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level3 second Flight //
"L3SF1": [
{ id: 'L3SF11', resource: 'CumMetalFormwork', description: 'Metal', length:4.5, breadth:1.7, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3SF12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 4, totalCost: 0 },           
],
//Level3 Beam Steel//
"L3SF2": [    
{ id: 'L3SF21', resource: 'SftDia16Steel', description: 'Main bars top', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF22', resource: 'SftDia16Steel', description: 'Main bars bottom', length: 2.1, diameter: 16, noOfBars: 2, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
{ id: 'L3SF23', resource: 'SftDia8Steel', description: 'Stirrups', length: 0.48, diameter: 8, noOfBars: 9, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF24', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity:1, totalCost: 0 },
{ id: 'L3SF25', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF26', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Level3 Beam Steel//

//Level3 Landing Slab Steel//   
"L3SF3": [    
{ id: 'L3SF31', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.2, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF31', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.2, diameter: 12, noOfBars: 9, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF31', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.2, diameter: 8, noOfBars: 8, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF31', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.2, diameter: 8, noOfBars: 8, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF31', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF31', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF32', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF33', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF34', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Level3 Landing Slab Steel//
//Level3 Waist Slab Steel//
"L3SF4": [    
{ id: 'L3SF41', resource: 'SftDia12Steel', description: 'Main bars top', length: 5.7, diameter: 12, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF42', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 5.7, diameter: 12, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF43', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1.15, diameter: 8, noOfBars: 18, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF44', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1.15, diameter: 8, noOfBars: 18, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF45', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF46', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF47', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF48', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF49', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Level3 Waist Slab Steel//
//Level3 Landing Slab Steel//
"L3SF5": [    
{ id: 'L3SF51', resource: 'SftDia12Steel', description: 'Main bars top', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF52', resource: 'SftDia12Steel', description: 'Main bars bottom', length: 1.5, diameter: 12, noOfBars: 5, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF53', resource: 'SftDia8Steel', description: 'Distri bars top', length: 1, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF54', resource: 'SftDia8Steel', description: 'Distri bars bottom', length: 1, diameter: 8, noOfBars: 7, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF55', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF56', resource: 'SftDia12Steel', description: 'Ld bars', length: 0.48, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
{ id: 'L3SF57', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF58', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF59', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 3, totalCost: 0 },  
],
//Level3 Landing Slab Steel//


//Level3 Staircase Concrete Second Flight //
"L3SF6": [
{ id: 'L3SF61', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
{ id: 'L3SF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 5, breadth: 1.6, thickness: 0.175, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3SF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.09, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3SF62', resource: 'CumM20Concrete', description: 'M20Concrete', length: 1.3, breadth: 0.9, thickness: 0.013, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3SF63', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF64', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
],
//Level3 Staircase Concrete Second Flight //
"L3SF7": [
{ id: 'L3SF71', resource: 'CumWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3SF72', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3SF73', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 3, totalCost: 0 },
],

"L3SF8": [      
{ id: 'L3SF81', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3SF82', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
//Level3 End Second Flight //

//Level3 Elevator //

//Level3 Elevator Columns Steel //
"L3EL4": [
{ id: 'L3EL41', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3EL42', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3EL43', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L3EL44', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3EL45', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },      
],
"L3EL5": [
{ id: 'L3EL50', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3EL51', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3EL52', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },         
],
"L3EL6": [
{ id: 'L3EL61', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3EL62', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3EL63', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
],
//Level3 Elevator Columns Steel //

//Level3 Elevator Beam Concrete//
"L3EL7": [
{ id: 'L3EL71', resource: 'CumMetalFormwork', description: 'Metal', length:2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3EL72', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3EL73', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },           
],
"L3EL8": [
{ id: 'L3EL81', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3EL82', resource: 'SftDia12Steel', description: 'Top Bars', length: 2, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
{ id: 'L3EL83', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 2, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
{ id: 'L3EL84', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'L3EL85', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
],
"L3EL9": [  
{ id: 'L3EL9', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"L3EL10": [
{ id: 'L3EL101', resource: 'CumM30Concrete', description: 'M30Concrete', length: 2, breadth: 0.23, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
{ id: 'L3EL102', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
{ id: 'L3EL103', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
],
//Level3 Elevator Beam Concrete//

//Watertank Shear Walls//

//Watertank CC column 3x0.23x0.23 //type-1// 4nos
"OT1": [
  { id: 'OT11', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OT12', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OT13', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'OT14', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OT15', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },      
],
"OT2": [
  { id: 'OT21', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OT22', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OT23', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },         
],
"OT3": [
  { id: 'OT31', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'OT32', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OT33', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
],
//Watertank CC column 3x0.23x0.23 //type-1//

//Watertank CC Level3 Beam Type-1//3x0.23x0.45
"OT4": [
  { id: 'OT41', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.25, thickness: 0.25, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OT42', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'OT43', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },           
  ],
  "OT5": [
  { id: 'OT51', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OT52', resource: 'SftDia12Steel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OT53', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'OT54', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'OT55', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],  
  "OT6": [
  { id: 'OT61', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
  { id: 'OT61', resource: 'CumM30Concrete', description: 'M30Concrete', length: 3, breadth: 0.25, thickness: 0.25, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'OT62', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OT63', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  ],
  //Watertank CC Level3 Beam Type-1//

  // Level3 Watertank Slab//
  //Formwork
"OT7": [
  { id: 'OT71', resource: 'CumMetalFormwork', description: 'Metal', length:4, breadth:3, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OT72', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OT73', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },           
  ],
  //Steel
  "OT8": [  
  { id: 'OT81', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: 4, diameter: 12, noOfBars: 7, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'OT82', resource: 'SftDia16Steel', description: 'Bottom Distri Bars', length: 3, diameter: 8, noOfBars: 11, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
  
  { id: 'OT83', resource: 'SftDia16Steel', description: 'Top Main Bars', length: 4, diameter: 12, noOfBars: 7, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'OT84', resource: 'SftDia12Steel', description: 'Top Distri Bars', breadth: 3, diameter: 8, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'OT85', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'OT86', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OT87', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
  ],
  //Level3 Top Bars lab //
  
  //Level3 Slab Concrete //
  "OT9": [
  { id: 'OT91', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
  { id: 'OT92', resource: 'CumM25Concrete', description: 'M25Concrete', length: 4, breadth: 3, thickness: 0.15, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'OT93', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OT94', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],
  //Level3 Slab Concrete //
  "OT10": [
    { id: 'OT101', resource: 'CumWater', description: 'Curing Water', length: 4, breadth: 3, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },    
    { id: 'OT102', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],    
  //Level3 Shearwalls //
  "OT11": [  
    { id: 'OT111', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: 4, diameter: 12, noOfBars: 7, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
    { id: 'OT112', resource: 'SftDia16Steel', description: 'Bottom Distri Bars', length: 3, diameter: 8, noOfBars: 11, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
    
    { id: 'OT113', resource: 'SftDia16Steel', description: 'Top Main Bars', length: 4, diameter: 12, noOfBars: 7, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
    { id: 'OT114', resource: 'SftDia12Steel', description: 'Top Distri Bars', breadth: 3, diameter: 8, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
    { id: 'OT115', resource: 'SftDia12Steel', description: 'Anchorage bars', length: 1.2, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
    { id: 'OT116', resource: 'SftDia12Steel', description: 'Ld bars', length: 1.2, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
    { id: 'OT117', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 1, totalCost: 0 },    
    { id: 'OT118', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'OT119', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
    ],
  "OT12": [
    { id: 'OT121', resource: 'CumMetalFormwork', description: 'Metal', length:4, breadth:3, thickness: 0.21, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
    { id: 'OT122', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'OT123', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },           
  ],
  "OT13": [
    { id: 'OT131', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
    { id: 'OT132', resource: 'CumM25Concrete', description: 'M25Concrete', length: 4, breadth: 3, thickness: 0.2, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
    { id: 'OT133', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'OT134', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    ],
  "OT14": [          
    { id: 'OT14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
    ],
  // Level3 Watertank ShearWalls end//

  // Level3 Watertank Brickwalls start//
  // Level3 Watertank Brickwalls start//
"OTBW1": [
  { id: 'OTBW11', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OTBW12', resource: 'SftDia16Steel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OTBW13', resource: 'SftDia12Steel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'OTBW14', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OTBW15', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },      
],
"OTBW2": [
  { id: 'OTBW21', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OTBW22', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OTBW23', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },         
],
"OTBW3": [
  { id: 'OTBW31', resource: 'CumM25Concrete', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'OTBW32', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OTBW33', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
],
//Watertank CC column 3x0.23x0.23 //type-1//

//Watertank CC Level3 Beam Type-1//3x0.23x0.45
"OTBW4": [
  { id: 'OTBW41', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.25, thickness: 0.25, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OTBW42', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'OTBW43', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },           
  ],
  "OTBW5": [
  { id: 'OTBW51', resource: 'SftDia8Steel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OTBW52', resource: 'SftDia12Steel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OTBW53', resource: 'SftDia16Steel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'OTBW54', resource: 'HourlyMason', description: 'Steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'OTBW55', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],  
  "OTBW6": [
  { id: 'OTBW61', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
  { id: 'OTBW62', resource: 'CumM30Concrete', description: 'M30Concrete', length: 3, breadth: 0.25, thickness: 0.25, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'OTBW63', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OTBW64', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
  ],
  //Watertank CC Level3 Beam Type-1//

  // Level3 Watertank Slab//
  "OTBW7": [
  { id: 'OTBW71', resource: 'CumMetalFormwork', description: 'Metal', length:4, breadth:3, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'OTBW72', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OTBW73', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },           
  ],
  "OTBW8": [  
  { id: 'OTBW81', resource: 'SftDia16Steel', description: 'Bottom Main Bars', length: 4, diameter: 12, noOfBars: 7, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'OTBW82', resource: 'SftDia16Steel', description: 'Bottom Distri Bars', length: 3, diameter: 8, noOfBars: 11, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code     
  
  { id: 'OTBW83', resource: 'SftDia16Steel', description: 'Top Main Bars', length: 4, diameter: 12, noOfBars: 7, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'OTBW84', resource: 'SftDia12Steel', description: 'Top Distri Bars', breadth: 3, diameter: 8, noOfBars: 11, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'OTBW85', resource: 'DailyBarbender', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'OTBW86', resource: 'DailyMason', description: 'Steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OTBW87', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
  ],
  //Level3 Top Bars lab //
  
  //Level3 Slab Concrete //
  "OTBW9": [
  { id: 'OTBW91', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
  { id: 'OTBW92', resource: 'CumM25Concrete', description: 'M25Concrete', length: 4, breadth: 3, thickness: 0.15, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'OTBW93', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'OTBW94', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],
  //Level3 Slab Concrete //
  "OTBW10": [
    { id: 'OTBW101', resource: 'CumWater', description: 'Curing Water', length: 4, breadth: 3, thickness: 0.15,area: 0,  rate: WaterRates.Water.Cum, units: 'Cum', quantity: 0, totalCost: 0 },    
    { id: 'OTBW102', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
  "OTBW11": [          
    { id: 'OTBW11', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  ],
// Level3 Watertank Brickwalls// //
  "OTBW12": [  
    { id: 'OTBW121', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length: 4, breadth:3, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
    { id: 'OTBW122', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },  
    ],
  "OTBW13": [
    { id: 'OTBW131', resource: 'Cummm12PlasterManual', description: 'Plaster', length:4, breadth:3, thickness: 0.012, perimeter:0, rate: PlasterManualRates.mm12.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
    { id: 'OTBW132', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'OTBW133', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },           
  ],
  "OTBW14": [          
    { id: 'OTBW14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
    ],
  "OTBW15": [          
    { id: 'OTBW15', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
    ],
    // Level3 Watertank Brickwalls end//
    
    //Finishes Rough-in start//
    
    //Ground Living//Finishes Rough-in start//
"G1BW1": [  
    { id: 'G1BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
    { id: 'G1BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    { id: 'G1BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
    ],
"G1EL1": [
  { id: 'G1EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G1EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G1EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G1MD1": [
  { id: 'G1MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G1MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G1MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G1PC1": [
  { id: 'G1PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G1PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G1PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G1FF1": [
  { id: 'G1FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G1FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G1FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G1DFI1": [
    { id: 'G1DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G1DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G1WFI1": [
    { id: 'G1WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G1WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G1PL1": [
    { id: 'G1PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
    { id: 'G1PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  ],  
"G1PR1": [
    { id: 'C153A1', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'C1563', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G1PT1": [
    { id: 'G1PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G1PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G1WP1": [
    { id: 'G1WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G1WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G1GR1": [
    { id: 'G1GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G1GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G1TL1": [
    { id: 'G1TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G1TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 

"G1PTF1": [
    { id: 'G1PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G1PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'G1PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
  //Ground Living//Finishes Rough-in end//
  
  //Ground Kitchen//Finishes Rough-in start//
"G2BW1": [  
    { id: 'G2BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
    { id: 'G2BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    { id: 'G2BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
    ],
"G2EL1": [
  { id: 'G2EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G2EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G2EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G2MD1": [
  { id: 'G2MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G2MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G2MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G2PC1": [
  { id: 'G2PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G2PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G2PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G2FF1": [
  { id: 'G2FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G2FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G2FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G2DFI1": [
    { id: 'G2DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G2DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G2WFI1": [
    { id: 'G2WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G2WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G2PL1": [
    { id: 'G2PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
    { id: 'G2PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  ],  
"G2PR1": [
    { id: 'G2PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G2PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G2PT1": [
    { id: 'G2PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G2PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G2WP1": [
    { id: 'G2WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G2WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G2GR1": [
    { id: 'G2GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G2GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G2TL1": [
    { id: 'G2TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G2TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 

"G2PTF1": [
    { id: 'G2PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G2PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'G2PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
  //Ground Kitchen//Finishes Rough-in end//

  //Ground Bedroom1//Finishes Rough-in start//
  "G3BW1": [  
    { id: 'G3BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
    { id: 'G3BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    { id: 'G3BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
    ],
"G3EL1": [
  { id: 'G3EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G3EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G3EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G3MD1": [
  { id: 'G3MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G3MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G3MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G3PC1": [
  { id: 'G3PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G3PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G3PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G3FF1": [
  { id: 'G3FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G3FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G3FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G3DFI1": [
    { id: 'G3DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G3DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G3WFI1": [
    { id: 'G3WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G3WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G3PL1": [
    { id: 'G3PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
    { id: 'G3PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  ],  
"G3PR1": [
    { id: 'G3PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G3PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G3PT1": [
    { id: 'G3PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G3PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G3WP1": [
    { id: 'G3WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G3WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G3GR1": [
    { id: 'G3GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G3GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G3TL1": [
    { id: 'G3TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G3TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 

"G3PTF1": [
    { id: 'G3PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G3PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'G3PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
  //Ground Bedroom1//Finishes Rough-in end//

  //Ground Bedroom2//Finishes Rough-in start//  
  "G4BW1": [  
    { id: 'G4BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
    { id: 'G4BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    { id: 'G4BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
    ],
"G4EL1": [
  { id: 'G4EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G4EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G4EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G4MD1": [
  { id: 'G4MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G4MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G4MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G4PC1": [
  { id: 'G4PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G4PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G4PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G4FF1": [
  { id: 'G4FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G4FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G4FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G4DFI1": [
    { id: 'G4DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G4DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G4WFI1": [
    { id: 'G4WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G4WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G4PL1": [
    { id: 'G4PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
    { id: 'G4PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  ],  
"G4PR1": [
    { id: 'G4PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G4PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G4PT1": [
    { id: 'G4PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G4PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G4WP1": [
    { id: 'G4WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G4WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G4GR1": [
    { id: 'G4GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G4GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G4TL1": [
    { id: 'G4TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G4TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 

"G4PTF1": [
    { id: 'G4PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G4PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'G4PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
  //Ground Bedroom2//Finishes Rough-in end//

  //Ground Bedroom3//Finishes Rough-in start//  
  "G5BW1": [  
    { id: 'G5BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
    { id: 'G5BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    { id: 'G5BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
    ],
"G5EL1": [
  { id: 'G5EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G5EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G5EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G5MD1": [
  { id: 'G5MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G5MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G5MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G5PC1": [
  { id: 'G5PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G5PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G5PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G5FF1": [
  { id: 'G5FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G5FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G5FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G5DFI1": [
    { id: 'G5DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G5DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G5WFI1": [
    { id: 'G5WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G5WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G5PL1": [
    { id: 'G5PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
    { id: 'G5PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  ],  
"G5PR1": [
    { id: 'G5PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G5PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G5PT1": [
    { id: 'G5PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G5PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G5WP1": [
    { id: 'G5WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G5WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G5GR1": [
    { id: 'G5GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G5GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G5TL1": [
    { id: 'G5TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G5TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 

"G5PTF1": [
    { id: 'G5PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G5PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'G5PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
  //Ground Bedroom3//Finishes Rough-in end//

  //Ground Bedroom4//Finishes Rough-in start//  
  "G6BW1": [  
    { id: 'G6BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
    { id: 'G6BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    { id: 'G6BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
    ],
"G6EL1": [
  { id: 'G6EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G6EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G6EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G6MD1": [
  { id: 'G6MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G6MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G6MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G6PC1": [
  { id: 'G6PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G6PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G6PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G6FF1": [
  { id: 'G6FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G6FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G6FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G6DFI1": [
    { id: 'G6DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G6DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G6WFI1": [
    { id: 'G6WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G6WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G6PL1": [
    { id: 'G6PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
    { id: 'G6PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  ],  
"G6PR1": [
    { id: 'G6PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G6PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G6PT1": [
    { id: 'G6PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G6PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G6WP1": [
    { id: 'G6WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G6WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G6GR1": [
    { id: 'G6GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G6GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G6TL1": [
    { id: 'G6TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G6TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 

"G6PTF1": [
    { id: 'G6PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G6PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'G6PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
  //Ground Bedroom4//Finishes Rough-in end//

  //Ground Drawing//Finishes Rough-in start//  
  "G7BW1": [  
    { id: 'G7BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
    { id: 'G7BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    { id: 'G7BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
    ],
"G7EL1": [
  { id: 'G7EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G7EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G7EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G7MD1": [
  { id: 'G7MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G7MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G7MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G7PC1": [
  { id: 'G7PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G7PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G7PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G7FF1": [
  { id: 'G7FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G7FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G7FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G7DFI1": [
    { id: 'G7DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G7DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G7WFI1": [
    { id: 'G7WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G7WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G7PL1": [
    { id: 'G7PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
    { id: 'G7PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  ],  
"G7PR1": [
    { id: 'G7PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G7PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G7PT1": [
    { id: 'G7PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G7PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G7WP1": [
    { id: 'G7WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G7WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G7GR1": [
    { id: 'G7GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G7GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G7TL1": [
    { id: 'G7TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G7TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 

"G7PTF1": [
    { id: 'G7PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G7PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'G7PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
  //Ground Drawing//Finishes Rough-in end//

//Ground Media Finsishes Rough-in start//
"G8BW1": [  
    { id: 'G8BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
    { id: 'G8BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    { id: 'G8BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
    ],
"G8EL1": [
  { id: 'G8EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G8EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G8EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G8MD1": [
  { id: 'G8MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G8MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G8MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G8PC1": [
  { id: 'G8PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'G8PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G8PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G8FF1": [
  { id: 'G8FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'G8FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G8FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G8DFI1": [
    { id: 'G8DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G8DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G8WFI1": [
    { id: 'G8WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
    { id: 'G8WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
"G8PL1": [
    { id: 'G8PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
    { id: 'G8PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  ],  
"G8PR1": [
    { id: 'G8PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G8PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G8PT1": [
    { id: 'G8PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G8PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ],  
"G8WP1": [
    { id: 'G8WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G8WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G8GR1": [
    { id: 'G8GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G8GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
"G8TL1": [
    { id: 'G8TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G8TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 

"G8PTF1": [
    { id: 'G8PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
    { id: 'G8PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'G8PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  ], 
//Ground Media Finsishes Rough-in end//

//Ground Pooja Finsishes Rough-in start//
"G9BW1": [  
  { id: 'G9BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G9BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G9BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G9EL1": [
{ id: 'G9EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G9EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G9EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G9MD1": [
{ id: 'G9MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G9MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G9MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G9PC1": [
{ id: 'G9PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G9PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G9PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G9FF1": [
{ id: 'G9FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G9FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G9FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G9DFI1": [
  { id: 'G9DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G9DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G9WFI1": [
  { id: 'G9WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G9WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G9PL1": [
  { id: 'G9PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G9PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G9PR1": [
  { id: 'G9PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G9PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G9PT1": [
  { id: 'G9PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G9PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G9WP1": [
  { id: 'G9WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G9WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G9GR1": [
  { id: 'G9GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G9GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G9TL1": [
  { id: 'G9TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G9TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G9PTF1": [
  { id: 'G9PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G9PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G9PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Pooja Finsishes Rough-in end//

//Ground Sitout Finsishes Rough-in start//
"G10BW1": [  
  { id: 'G10BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G10BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G10BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G10EL1": [
{ id: 'G10EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G10EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G10EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G10MD1": [
{ id: 'G10MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G10MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G10MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G10PC1": [
{ id: 'G10PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G10PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G10PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G10FF1": [
{ id: 'G10FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G10FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G10FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G10DFI1": [
  { id: 'G10DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G10DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G10WFI1": [
  { id: 'G10WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G10WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G10PL1": [
  { id: 'G10PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G10PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G10PR1": [
  { id: 'G10PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G10PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G10PT1": [
  { id: 'G10PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G10PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G10WP1": [
  { id: 'G10WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G10WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G10GR1": [
  { id: 'G10GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G10GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G10TL1": [
  { id: 'G10TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G10TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G10PTF1": [
  { id: 'G10PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G10PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G10PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Sitout Finsishes Rough-in end//

//Ground Balcony Finsishes Rough-in start//
"G11BW1": [  
  { id: 'G11BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G11BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G11BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G11EL1": [
{ id: 'G11EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G11EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G11EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G11MD1": [
{ id: 'G11MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G11MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G11MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G11PC1": [
{ id: 'G11PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G11PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G11PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G11FF1": [
{ id: 'G11FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G11FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G11FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G11DFI1": [
  { id: 'G11DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G11DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G11WFI1": [
  { id: 'G11WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G11WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G11PL1": [
  { id: 'G11PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G11PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G11PR1": [
  { id: 'G11PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G11PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G11PT1": [
  { id: 'G11PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G11PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G11WP1": [
  { id: 'G11WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G11WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G11GR1": [
  { id: 'G11GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G11GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G11TL1": [
  { id: 'G11TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G11TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G11PTF1": [
  { id: 'G11PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G11PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G11PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Balcony Finsishes Rough-in end//

//Ground Bath-1 Finsishes Rough-in start//
"G12BW1": [  
  { id: 'G12BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G12BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G12BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G12EL1": [
{ id: 'G12EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G12EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G12EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G12MD1": [
{ id: 'G12MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G12MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G12MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G12PC1": [
{ id: 'G12PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G12PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G12PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G12FF1": [
{ id: 'G12FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G12FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G12FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G12DFI1": [
  { id: 'G12DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G12DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G12WFI1": [
  { id: 'G12WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G12WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G12PL1": [
  { id: 'G12PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G12PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G12PR1": [
  { id: 'G12PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G12PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G12PT1": [
  { id: 'G12PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G12PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G12WP1": [
  { id: 'G12WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G12WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G12GR1": [
  { id: 'G12GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G12GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G12TL1": [
  { id: 'G12TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G12TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G12PTF1": [
  { id: 'G12PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G12PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G12PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Bath-1 Finsishes Rough-in end//

//Ground Bath-2 Finsishes Rough-in start//
"G13BW1": [  
  { id: 'G13BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G13BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G13BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G13EL1": [
{ id: 'G13EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G13EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G13EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G13MD1": [
{ id: 'G13MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G13MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G13MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G13PC1": [
{ id: 'G13PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G13PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G13PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G13FF1": [
{ id: 'G13FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G13FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G13FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G13DFI1": [
  { id: 'G13DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G13DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G13WFI1": [
  { id: 'G13WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G13WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G13PL1": [
  { id: 'G13PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G13PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G13PR1": [
  { id: 'G13PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G13PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G13PT1": [
  { id: 'G13PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G13PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G13WP1": [
  { id: 'G13WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G13WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G13GR1": [
  { id: 'G13GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G13GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G13TL1": [
  { id: 'G13TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G13TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G13PTF1": [
  { id: 'G13PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G13PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G13PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Bath-2 Finsishes Rough-in end//

//Ground Bath-3 Finsishes Rough-in start//
"G14BW1": [  
  { id: 'G14BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G14BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G14BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G14EL1": [
{ id: 'G14EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G14EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G14EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G14MD1": [
{ id: 'G14MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G14MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G14MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G14PC1": [
{ id: 'G14PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G14PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G14PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G14FF1": [
{ id: 'G14FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G14FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G14FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G14DFI1": [
  { id: 'G14DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G14DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G14WFI1": [
  { id: 'G14WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G14WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G14PL1": [
  { id: 'G14PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G14PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G14PR1": [
  { id: 'G14PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G14PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G14PT1": [
  { id: 'G14PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G14PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G14WP1": [
  { id: 'G14WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G14WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G14GR1": [
  { id: 'G14GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G14GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G14TL1": [
  { id: 'G14TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G14TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G14PTF1": [
  { id: 'G14PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G14PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G14PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Bath-3 Finsishes Rough-in end//

//Ground Bath-4 Finsishes Rough-in start//
"G15BW1": [  
  { id: 'G15BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G15BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G15BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G15EL1": [
{ id: 'G15EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G15EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G15EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G15MD1": [
{ id: 'G15MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G15MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G15MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G15PC1": [
{ id: 'G15PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G15PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G15PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G15FF1": [
{ id: 'G15FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G15FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G15FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G15DFI1": [
  { id: 'G15DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G15DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G15WFI1": [
  { id: 'G15WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G15WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G15PL1": [
  { id: 'G15PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G15PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G15PR1": [
  { id: 'G15PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G15PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G15PT1": [
  { id: 'G15PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G15PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G15WP1": [
  { id: 'G15WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G15WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G15GR1": [
  { id: 'G15GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G15GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G15TL1": [
  { id: 'G15TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G15TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G15PTF1": [
  { id: 'G15PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G15PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G15PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Bath-4 Finsishes Rough-in end//

//Ground Toilet Finsishes Rough-in start//
"G16BW1": [  
  { id: 'G16BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G16BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G16BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G16EL1": [
{ id: 'G16EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G16EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G16EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G16MD1": [
{ id: 'G16MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G16MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G16MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G16PC1": [
{ id: 'G16PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G16PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G16PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G16FF1": [
{ id: 'G16FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G16FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G16FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G16DFI1": [
  { id: 'G16DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G16DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G16WFI1": [
  { id: 'G16WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G16WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G16PL1": [
  { id: 'G16PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G16PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G16PR1": [
  { id: 'G16PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G16PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G16PT1": [
  { id: 'G16PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G16PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G16WP1": [
  { id: 'G16WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G16WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G16GR1": [
  { id: 'G16GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G16GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G16TL1": [
  { id: 'G16TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G16TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G16PTF1": [
  { id: 'G16PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G16PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G16PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Toilet Finsishes Rough-in end//

//Ground Store Finsishes Rough-in start//
"G17BW1": [  
  { id: 'G17BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G17BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G17BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G17EL1": [
{ id: 'G17EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G17EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G17EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G17MD1": [
{ id: 'G17MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G17MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G17MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G17PC1": [
{ id: 'G17PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G17PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G17PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G17FF1": [
{ id: 'G17FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G17FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G17FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G17DFI1": [
  { id: 'G17DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G17DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G17WFI1": [
  { id: 'G17WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G17WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G17PL1": [
  { id: 'G17PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G17PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G17PR1": [
  { id: 'G17PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G17PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G17PT1": [
  { id: 'G17PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G17PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G17WP1": [
  { id: 'G17WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G17WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G17GR1": [
  { id: 'G17GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G17GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G17TL1": [
  { id: 'G17TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G17TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G17PTF1": [
  { id: 'G17PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G17PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G17PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Store Finsishes Rough-in end//

//Ground Parking Finsishes Rough-in start//
"G18BW1": [  
  { id: 'G18BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G18BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G18BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G18EL1": [
{ id: 'G18EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G18EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G18EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G18MD1": [
{ id: 'G18MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G18MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G18MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G18PC1": [
{ id: 'G18PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G18PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G18PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G18FF1": [
{ id: 'G18FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G18FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G18FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G18DFI1": [
  { id: 'G18DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G18DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G18WFI1": [
  { id: 'G18WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G18WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G18PL1": [
  { id: 'G18PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G18PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G18PR1": [
  { id: 'G18PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G18PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G18PT1": [
  { id: 'G18PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G18PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G18WP1": [
  { id: 'G18WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G18WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G18GR1": [
  { id: 'G18GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G18GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G18TL1": [
  { id: 'G18TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G18TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G18PTF1": [
  { id: 'G18PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G18PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G18PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Parking Finsishes Rough-in end//

//Ground Staircase Finsishes Rough-in start//
"G19BW1": [  
  { id: 'G19BW11', resource: 'Cuminch9Redclayper1000', description: 'Brickwork Walls', length:livingLength, breadth: livingWidth, thickness: 0.15, perimeter:0, rate: Redclayper1000Rates.inch9.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code             
  { id: 'G19BW12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'G19BW13', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },  
  ],
"G19EL1": [
{ id: 'G19EL11', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G19EL12', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G19EL13', resource: 'HourlyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
],
"G19MD1": [
{ id: 'G19MD11', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G19MD12', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G19MD13', resource: 'HourlyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G19PC1": [
{ id: 'G19PC11', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
{ id: 'G19PC12', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G19PC13', resource: 'HourlyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G19FF1": [
{ id: 'G19FF11', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
{ id: 'G19FF12', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
{ id: 'G19FF13', resource: 'HourlyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
],
"G19DFI1": [
  { id: 'G19DFI11', resource: 'WP1TeakDFinsulation', description: 'Door insulation', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G19DFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G19WFI1": [
  { id: 'G19WFI11', resource: 'WP1TeakDFinsulation', description: 'Window insulation', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFinsulationRates.Teak.WP1, units: 'Unit', quantity: 0, totalCost: 0 },    
  { id: 'G19WFI13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
],  
"G19PL1": [
  { id: 'G19PL11', resource: 'Cummm12PlasterManual', description: 'Plaster', length:livingLength, breadth:livingWidth, thickness: 0.016, perimeter:0, rate: PlasterManualRates.mm18.Cum, units: 'Cum', quantity: 0, totalCost: 0 }, 
  { id: 'G19PL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],  
"G19PR1": [
  { id: 'G19PR11', resource: 'SqmPPaint', description: 'Primer', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Interior.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G19PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G19PT1": [
  { id: 'G19PR11', resource: 'SqmPPaint', description: 'Paint 1st Coat', length:livingLength, breadth:livingWidth, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G19PR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],  
"G19WP1": [
  { id: 'G19WP11', resource: 'SqmLiquidWP', description: 'Waterproofing', length:livingLength, breadth:livingWidth, area: 0, rate: WPRates.Liquid.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G19WP12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G19GR1": [
  { id: 'G19GR11', resource: 'SqmGraniteFloor', description: 'Granite', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Granite.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G19GR12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
"G19TL1": [
  { id: 'G19TL11', resource: 'SqmVitrifiedFloor', description: 'Vitrified', length:livingLength, breadth:livingWidth, area: 0, rate: FloorRates.Vitrified.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G19TL12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 

"G19PTF1": [
  { id: 'G19PTF11', resource: 'SqmPPaint', description: 'Paint Final Coat', length:livingLength, breadth:livingWidth,thickness: 3, area: 0, perimeter:0, rate: PPaintRates.Emulsion.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, 
  { id: 'G19PTF12', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
  { id: 'G19PTF13', resource: 'DailyHelper', description: 'Clean', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
], 
//Ground Staircase Finsishes Rough-in end//




//Ground Finishes Interior start//
//Ground Finishes Interior start//
//Ground Finishes Interior start//
//Ground Finishes Interior start//
  
"GFI3": [
    { id: 'GFI71', resource: 'TW1TeakperftDF', description: 'Door Frame', length: df1Length, breadth: df1Width, area: df1Area,  rate: DFRates.Teakperft.TW2, units: 'Sqm', quantity: 0, totalCost: 0 },    
  ],  
"GFI4": [
    { id: 'GFI81', resource: 'TW1TeakperftDF', description: 'Window Frame', length: wf1Length, breadth: wf1Width, area: wf1Area,  rate: DFRates.Teakperft.TW2, units: 'Sft', quantity: 0, totalCost: 0 },    
  ],  
"GFI5": [
    { id: 'GFI91', resource: 'SftUPVCSlidDoor', description: 'Window', length: window1Length, breadth: window1Width, area: window1Area,  rate: DoorRates.UPVCSlid.Sft, units: 'Sft', quantity: 0, totalCost: 0 },    
  ],  
"GFI6": [
    { id: 'GFI101', resource: 'UnitTeakWoodDoor', description: 'Door', length: door1Length, breadth: door1Width, area: door1Area,  rate: DoorRates.TeakWood.Unit, units: 'Unit', quantity: 1, totalCost: 0 },        
  ],
"GFEL": [
  { id: 'GFI31', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'GFI32', resource: 'HourlyMason', description: 'Electrical', rate: ElectricianRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  ],
  "GFPL": [
  { id: 'GFI51', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 2, totalCost: 0 },    
  { id: 'GFI52', resource: 'HourlyMason', description: 'Plumbing', rate: PlumberRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  ],
  "GFME": [
  { id: 'GFI41', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'GFI42', resource: 'HourlyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  ],  
  "GFFF": [
  { id: 'GFI61', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'GFI62', resource: 'HourlyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  ],

  "GFFC": [
    { id: 'GFI111', resource: 'Sft2CeilingLowC', description: 'FalseCeiling', length: livingLength, breadth: livingWidth, area: 0,  rate: LowCRates.Ceiling.Sft2, units: 'Sft', quantity: 0, totalCost: 0 },    
  ],
  "GFLF": [
    { id: 'GFI12', resource: 'Unit2RecsedLitCfix', description: 'Lights', length: 0.92, breadth: 2.13, area: 0,  rate: LitWfixRates.Wall.Unit2, units: 'Unit', quantity: 4, totalCost: 0 },        
  ],    
  "GFWA": [
    { id: 'GWFI11', resource: 'Sft2GraniteKCtop40sft', description: 'Kitchen Countertop L-Shape', length: 0.92, breadth: 2.13, area: 0,  rate: KCtop40sftRates.Granite.Sft2, units: 'Unit', quantity: 1, totalCost: 0 },        
  ], 
  "GFSD": [
    { id: 'GFI13', resource: 'UnitUPVCSlidDoor', description: 'Slide-Door', length: 0.92, breadth: 2.13, area: 0,  rate: DoorRates.UPVCSlid.Unit, units: 'Unit', quantity: 1, totalCost: 0 },        
  ], 
  
  "GFJY": [
    { id: 'GFI15', resource: 'Sft3KitchenCabinet', description: 'Cabinet', length: 3, breadth: 2.13, area: 0,  rate: CabinetRates.Kitchen.Sft3, units: 'Sft', quantity: 0, totalCost: 0 },        
  ],  
  "GFEX": [
    { id: 'GFI16', resource: 'Unit2KitchenExhaust', description: 'Exhaust', rate: ExhaustRates.Kitchen.Unit2, units: 'Unit', quantity: 1, totalCost: 0 },        
  ],    
  "GFFU": [
    { id: 'GFI17', resource: 'Sft3FurniCabinet', description: 'Furniture', length: 2, breadth: 2.5, area: 0,  rate: CabinetRates.Furni.Sft3, units: 'Sft', quantity: 0, totalCost: 0 },        
  ],     
  "CL01": [
    { id: 'CL01', resource: 'OthFFixFinal', description: 'FinalFix',   rate: FinalRates.FFix.Oth, units: 'Unit', quantity: 1, totalCost: 0 },    
    { id: 'CL01', resource: 'Unit2RecsedLitCfix', description: 'Lights', length: 0.92, breadth: 2.13, area: 0,  rate: LitWfixRates.Wall.Unit2, units: 'Unit', quantity: 4, totalCost: 0 },        
  ],  
  "CL04": [
    { id: 'CL04', resource: 'SnagClearConting', description: 'Snag&Desnag', rate: ContingRates.Clear.Snag, units: 'Unit', quantity: 1, totalCost: 0 },    
    { id: 'CL04', resource: 'Unit2RecsedLitCfix', description: 'Lights', length: 0.92, breadth: 2.13, area: 0,  rate: LitWfixRates.Wall.Unit2, units: 'Unit', quantity: 1, totalCost: 0 },        
  ]
//Ground Finishes Interior start//


  }
  if(taskResources)  return updateQuantities(taskResources)
    return updateQuantities( resources[ taskId ]??[] )
}

function updateQuantities ( resources ) {
  for(const resource of resources) {
    if ( resource?.length && resource?.breadth && resource.thickness ) {
      resource.quantity = resource.length * resource.breadth * resource.thickness
      resource.quantity = resource.quantity.toFixed( 2 )
      resource.area=(resource.length*resource.breadth).toFixed(2)
    }
    if ( resource?.diameter && resource?.noOfBars && resource.length ) {
      const { diameter, noOfBars, length } = resource
      resource.quantity = ( Math.pow( diameter, 2 ) * length * noOfBars ) / 162;
      resource.quantity = resource.quantity.toFixed( 2 )
      // resource.area=(resource.length*resource.breadth).toFixed(2)
    }

    if(resource?.perimeter!=undefined && resource?.length && resource.breadth ){
      resource.perimeter=(resource.length+resource.breadth)*2
      resource.area=resource.length*resource.breadth
      if(resource?.thickness){
        resource.quantity=resource.perimeter*resource.thickness
      }
    }

    if(resource?.numbersRequired!=undefined && resource?.numbersRequired>0){
      resource.quantity=resource.numbersRequired*resource.quantity
    }
  }
  return resources
}

export default getResources