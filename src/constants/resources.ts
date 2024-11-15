import { EngineerRates,MachinaryRates, MasonRates, HelperRates, ConcreteRates, SteelRates, WoodFormworkRates,MetalFormworkRates,FillingRates, 
   PlasterFCManualRates,PlasterFCMachineRates,PlasterSCManualRates,PlasterSCMachineRates,BarBenderRates,FencingRates,ShoringRates,
  TermiteRates,WaterRates,ExcavationMachineRates,ExcavationManualRates,RedclayBrickRates,FlyAshBrickRates,CCBlockRates,ElectricalRates,MechanicalRates,FirefightingRates,PlumbingRates,
  SewerS40PVCRates,SewerS80PVCRates,CPVCRates,PPRRates,GIRates,ElectricianRates,PlumberRates,MechMasonRates,FFMasonRates } from './rates'
import { DrawingData, Resource } from './types'

function getResources ( taskId: string, drawingData: DrawingData, taskResources: Array<Resource> =null): Array<Resource> {
  const { excavationArea, plotArea, builtupPerimeter, builtupArea, builtLength, builtWidth, excavationDepth, slabThickness,groundFloorArea,groundFloorWalls } = drawingData
  const resources: Record<string, Array<Resource>> = {


    "C02A": [
      {
        "id": "C0",
        "resource": "DailyMason",
        "description": "Survery",
        "rate": FencingRates.Fencing.Sft,
        "units": "Sft",
        length:0,
        breadth:0,        
        thickness:3, // height of fencing
        area:0,        
        "quantity": 0,
        "totalCost": 0
      }
    ],
   
    "C03": [
      {
        "id": "C1",
        "resource": "DailyMason",
        "description": "Fencing",
        "rate": FencingRates.Fencing.Sqm,
        "units": "Sqm",
        length:0,
        breadth:0,
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
    "C04": [
      {
        "id": "C3",
        "resource": "DailyMachinery",
        "description": "Cum",
        "rate": MachinaryRates.Excavator.Sft,
        "units": "Day",         
        length: 0,
        breadth:0,               
        thickness:3, // height of excavation
        "quantity": excavationArea,
        "totalCost": 0
      },
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
    "C05": [
      {
        "id": "C7",
        "resource": "DailyMason",
        "description": "Shoring",
        "rate": ShoringRates.Shoring.Sft,
        "units": "Day",
        length: 0,
        breadth:0,
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
    "C06": [
      {
        "id": "C9",
        "resource": "DailyMason",
        "description": "Termite",
        "rate": TermiteRates.Termite.Sft,
        "units": "Day",
        length: 0,
        breadth:0,
        thickness:1, // height of fencing
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
    "C07": [
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
        "resource": "CumM15pcc",
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
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0.5, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 1.2, diameter: 10, noOfBars: 6, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 1.2, diameter: 12, noOfBars: 6, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT03": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length: 1.2, breadth: 1.2, thickness: 0.3, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT04": [
      { id: 'F12', resource: 'CumM20', description: 'Concrete', length: 1.2, breadth: 1.2, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],




    "FT201": [
      { id: 'F15', resource: 'CumM15pcc', description: 'Pcc', length: 1.5, breadth: 1.5, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT202": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0.6, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 1.5, diameter: 10, noOfBars: 8, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 1.5, diameter: 12, noOfBars: 8, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT203": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length: 1.5, breadth: 1.5, thickness: 0.3, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT204": [
      { id: 'F12', resource: 'CumM20', description: 'Concrete', length: 1.5, breadth: 1.5, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],



    "FT301": [
      { id: 'F15', resource: 'CumM15pcc', description: 'Pcc', length: 1.8, breadth: 1.5, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT302": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0.7, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 1.8, diameter: 12, noOfBars: 10, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 1.8, diameter: 12, noOfBars: 10, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT303": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length: 1.8, breadth: 1.8, thickness: 0.4, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT304": [
      { id: 'F12', resource: 'CumM20', description: 'Concrete', length: 1.8, breadth: 1.8, thickness: 0.4, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],




    "FT401": [
      { id: 'F15', resource: 'CumM15pcc', description: 'Pcc', length: 2.0, breadth: 2.0, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT402": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0.7, diameter: 8, noOfBars:6, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 2.0, diameter: 10, noOfBars: 10, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 2.0, diameter: 12, noOfBars: 10, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT403": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length:2.0, breadth: 2.0, thickness: 0.4, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT404": [
      { id: 'F12', resource: 'CumM20', description: 'Concrete', length: 2.0, breadth: 2.0, thickness: 0.4, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],





    "FT501": [
      { id: 'F15', resource: 'CumM15pcc', description: 'Pcc', length: 2.5, breadth: 2.5, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT502": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0.8, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 2.5, diameter: 12, noOfBars: 10, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 2.5, diameter: 12, noOfBars: 12, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT503": [
      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length:2.5, breadth: 2.5, thickness: 0.4, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT504": [
      { id: 'F12', resource: 'CumM20', description: 'Concrete', length: 2.5, breadth: 2.5, thickness: 0.4, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],





    "FT601": [
      { id: 'F15', resource: 'CumM15pcc', description: 'Pcc', length: 3.0, breadth: 3.0, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

    "FT602": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 1.0, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 3.0, diameter: 10, noOfBars: 12, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 3.0, diameter: 12, noOfBars: 12, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

    "FT603": [

      { id: 'F9', resource: 'CumWoodFormwork', description: 'Wood', length:3.0, breadth: 3.0, thickness: 0.5, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT604": [
      { id: 'F12', resource: 'CumM20', description: 'Concrete', length: 3.0, breadth: 3.0, thickness: 0.5, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

// Soil Filling//
// Soil Filling//
// Soil Filling//
// Soil Filling//
// Soil Filling//
// Soil Filling//
// Soil Filling//
// Soil Filling//


    "C11": [
          
      { id: 'F224', resource: 'CumSoil', description: 'perimeter-deduts (no of footings)', length: 0, breadth:0, thickness: excavationDepth, area:0, rate: FillingRates.Soil.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F225', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F226', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'F227', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'F228', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    // Plinth beam Length//
        
    "PT1L1": [
      { id: 'PL1', resource: 'CumStone', description: 'Filling', length: 0, breadth:0.23, thickness: 0.23, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT1L2": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT1L3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT1L4": [
      { id: 'F12', resource: 'CumM20', description: 'M25Concrete', length: 0, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

   
    "PT2L1": [
      { id: 'PL1', resource: 'CumStone', description: 'Filling', length: 0, breadth:0.26, thickness: 0.26, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT2L2": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2L3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.26, thickness: 0.26, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2L4": [
      { id: 'F12', resource: 'CumM20', description: 'M25Concrete', length: 0, breadth: 0.26, thickness: 0.26, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    
    "PT3L1": [
      { id: 'PL1', resource: 'CumStone', description: 'Filling', length: 0, breadth:0.3, thickness: 0.3, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT3L2": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3L3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3L4": [
      { id: 'F12', resource: 'CumM25', description: 'M25Concrete', length: 0, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    
    "PT4L1": [
      { id: 'PL1', resource: 'CumStone', description: 'Filling', length: 0, breadth:0.3, thickness: 0.45, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT4L2": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4L3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4L4": [
      { id: 'F12', resource: 'CumM25', description: 'M25Concrete', length: 3.0, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    // plinth beam Length//

    // plinth beam breadth//
    
    "PT1B1": [
      { id: 'PL1', resource: 'CumStone', description: 'Filling', length: 0, breadth:0.23, thickness: 0.23, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT1B2": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    ],
    "PT1B3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT1B4": [
      { id: 'F12', resource: 'CumM20', description: 'M20Concrete', length: 0, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

   
    "PT2B1": [
      { id: 'PL1', resource: 'CumStone', description: 'Filling', length: 0, breadth:0.26, thickness: 0.26, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT2B2": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2B3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.26, thickness: 0.26, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2B4": [
      { id: 'F12', resource: 'CumM20', description: 'M20Concrete', length: 0, breadth: 0.26, thickness: 0.26, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    
    "PT3B1": [
      { id: 'PL1', resource: 'CumStone', description: 'Filling', length: 0, breadth:0.3, thickness: 0.3, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT3B2": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3B3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3B4": [
      { id: 'F12', resource: 'CumM25', description: 'M25Concrete', length: 0, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    
    "PT4B1": [
      { id: 'PL1', resource: 'CumStone', description: 'Filling', length: 0, breadth:0.3, thickness: 0.45, area:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PT4B2": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4B3": [
      { id: 'F9', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4B4": [
      { id: 'F12', resource: 'CumM25', description: 'M25Concrete', length: 3.0, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    // plinth beam breadth//              //plinth beam breadth end//

    //underground Sewage tank //
    "STO": [
    { id: 'STO', resource: 'CumExcavation', description: 'Excavation', length: 5, breadth:5, thickness: 3, area:0,  rate:  ExcavationMachineRates.Excavator.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
    { id: 'ST1', resource: 'CumExcavation', description: 'Excavation', length: 5, breadth:5, thickness: 3, area:0,  rate:  ExcavationManualRates.ToolsExcavation.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
    {id: 'ST2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'ST3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'ST4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'ST5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
  ],
    "ST1": [
      { id: 'ST11', resource: 'CumM15pcc', description: 'M15Concrete', length: 6, breadth: 6, thickness: 0.15, area:0,  rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'ST12', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST2": [
      { id: 'ST21', resource: 'SftRedclayBrick', description: 'Brickwork', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: RedclayBrickRates.inch9.Sft, units: 'Sft', quantity: 0, totalCost: 0 },      
      { id: 'ST22', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST23', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST24', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST25', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST3": [
      { id: 'ST31', resource: 'SftRedclayBrick', description: 'Brickwork', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: RedclayBrickRates.inch9.Sft, units: 'Sft', quantity: 0, totalCost: 0 },      
      { id: 'ST32', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST33', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST34', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST35', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST4": [
      { id: 'ST41', resource: 'SftRedclayBrick', description: 'Baffle', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: RedclayBrickRates.inch6.Sft, units: 'Sft', quantity: 0, totalCost: 0 },      
      { id: 'ST42', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST43', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST44', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST45', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST5": [
      { id: 'ST51', resource: 'Sftmm6', description: 'Plaster', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: PlasterFCManualRates.mm6.Sft, units: 'Sft', quantity: 0, totalCost: 0 },      
      { id: 'ST52', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST53', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST54', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST55', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "ST6": [
      { id: 'ST61', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST62', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'ST63', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    
      { id: 'ST71', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST72', resource: 'KgsSteel', description: 'Main Bars', length: 6, diameter: 10, noOfBars: 8, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST73', resource: 'KgsSteel', description: 'Distribution Bars', length: 3, diameter: 10, noOfBars: 16, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
      { id: 'ST76', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'ST77', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
      { id: 'ST78', resource: 'CumM20', description: 'M20Concrete', length: 6, breadth: 6, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'ST79', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST710', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    //sewer pipes//
    "DC1": [
    { id: 'DC11', resource: 'mmm100SewerS40PVC', description: 'Sewer', length: 5, area:0,  rate:  SewerS40PVCRates.mm100.m, units: 'm', quantity: 0, totalCost: 0 },    
    { id: 'DC12', resource: 'DailyMason', description: 'sewer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'DC13', resource: 'DailyHelper', description: 'sewer', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },    
  ],
  "DC2": [
    { id: 'DC22', resource: 'DailyMason', description: 'sewer', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'DC23', resource: 'DailyHelper', description: 'sewer', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },    
  ],
  //sewer pipes//

  //underground Sewage tank //

  //underground Water tank //
  "WT1": [
    { id: 'STO', resource: 'CumExcavation', description: 'Excavation', length: 5, breadth:5, thickness: 3, area:0,  rate:  ExcavationMachineRates.Excavator.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
    { id: 'ST1', resource: 'CumExcavation', description: 'Excavation', length: 5, breadth:5, thickness: 3, area:0,  rate:  ExcavationManualRates.ToolsExcavation.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
    {id: 'ST2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    { id: 'ST3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'ST4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    { id: 'ST5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
  ],
    "WT2": [
      { id: 'ST11', resource: 'CumM15pcc', description: 'M15Concrete', length: 6, breadth: 6, thickness: 0.15, area:0,  rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'ST12', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "WT3": [
      { id: 'ST21', resource: 'SftRedclayBrick', description: 'Brickwork', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: RedclayBrickRates.inch9.Sft, units: 'Sft', quantity: 0, totalCost: 0 },      
      { id: 'ST22', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST23', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST24', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST25', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "WT4": [
      { id: 'ST31', resource: 'SftRedclayBrick', description: 'Brickwork', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: RedclayBrickRates.inch9.Sft, units: 'Sft', quantity: 0, totalCost: 0 },      
      { id: 'ST32', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST33', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST34', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST35', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],    
    "WT5": [
      { id: 'ST41', resource: 'Sftmm6', description: 'Plaster', length: 6, breadth:3, thickness: 0.6, perimeter:0,  rate: PlasterFCManualRates.mm6.Sft, units: 'Sft', quantity: 0, totalCost: 0 },      
      { id: 'ST42', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST43', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST44', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'ST45', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "WT6": [
      { id: 'ST61', resource: 'CumMetalFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST62', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'ST63', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    
      { id: 'ST71', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 12, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST72', resource: 'KgsSteel', description: 'Main Bars', length: 6, diameter: 10, noOfBars: 8, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'ST73', resource: 'KgsSteel', description: 'Distribution Bars', length: 3, diameter: 10, noOfBars: 16, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
      { id: 'ST76', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'ST77', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
      { id: 'ST78', resource: 'CumM20', description: 'M20Concrete', length: 6, breadth: 6, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
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
      { id: 'GP10', resource: 'CumSoil', description: 'perimeter-deduts (no of footings)', length: 0, breadth:0, thickness: excavationDepth, area:0, rate: FillingRates.Soil.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'GP11', resource: 'DailyMason', description: 'Filling', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'GP12', resource: 'DailyHelper', description: 'Filling', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
      { id: 'GP13', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
      { id: 'GP14', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "GP2": [
      { id: 'GP20', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 6, noOfBars: 20, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GP21', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 6, noOfBars: 20, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GP22', resource: 'KgsSteel', description: 'BarBender', rate: BarBenderRates.Hourly, units: 'Hour', quantity: 8, totalCost: 0 },
      { id: 'GP23', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'GP24', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "GP3": [
      { id: 'GP30', resource: 'CumM25', description: 'groundFloorArea-groundFloorWalls', area: groundFloorArea,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'GP31', resource: 'DailyMason', description: 'mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'GP32', resource: 'DailyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

    "GP4": [
      { id: 'GP40', resource: 'SftWater', description: 'Curing Water', area: groundFloorArea,  rate: WaterRates.Water.Sft, units: 'Sft', quantity: 0, totalCost: 0 },
      { id: 'GP31', resource: 'DailyMason', description: 'mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'GP32', resource: 'DailyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

//ground slab //

//column 3x0.23x0.23 //type-1//
    "GCT1": [
      { id: 'GCT11', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GCT12', resource: 'KgsSteel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GCT13', resource: 'KgsSteel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
      { id: 'GCT14', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'GCT15', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },      
    ],
    "GCT11": [
      { id: 'GCT110', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'GCT111', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'GCT112', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },         
    ],
    "GCT12": [
      { id: 'ST78', resource: 'CumM25', description: 'M25Concrete', length: 3, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'ST79', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'ST710', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
//column 3x0.23x0.23 //type-1//

//column 3x0.3x0.3 //type-2//
"CT21": [
  { id: 'CT211', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT212', resource: 'KgsSteel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT213', resource: 'KgsSteel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'CT214', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'CT215', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
],
"CT22": [
  { id: 'CT221', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT222', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'CT223', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },         
],
"CT23": [
  { id: 'CT231', resource: 'CumM25', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'CT232', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'CT233', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//column 3x0.23x0.23 //type-2//

//column 3x0.3x0.45 //type-3//
"CT31": [
  { id: 'CT311', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT312', resource: 'KgsSteel', description: 'Main Bars', length: 3, diameter: 16, noOfBars: 4, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT313', resource: 'KgsSteel', description: 'Distribution Bars', length: 3, diameter: 12, noOfBars: 2, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'CT314', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'CT315', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
],
"CT32": [
  { id: 'CT321', resource: 'CumMetalFormwork', description: 'Metal', length:3, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'CT322', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'CT323', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },         
],
"CT33": [
  { id: 'CT331', resource: 'CumM25', description: 'M25Concrete', length: 3, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'CT332', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'CT333', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//column 3x0.23x0.23 //type-3//

//Beam Type-1//3x0.23x0.45
"BT11": [
  { id: 'BT111', resource: 'CumMetalFormwork', description: 'Metal', length:3.2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT112', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'BT113', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },           
],
"BT12": [
  { id: 'BT121', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT122', resource: 'KgsSteel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT123', resource: 'KgsSteel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'BT124', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'BT125', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
],
"BT13": [  
  { id: 'BT131', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"BT14": [
  { id: 'BT141', resource: 'CumM25', description: 'M30Concrete', length: 3, breadth: 0.23, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'BT142', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'BT143', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//Beam Type-1//
//Beam Type-2//
"BT21": [
  { id: 'BT211', resource: 'CumMetalFormwork', description: 'Metal', length:3.2, breadth:0.23, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT212', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'BT213', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },           
],
"BT22": [
  { id: 'BT221', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 2, diameter: 8, noOfBars:2, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT222', resource: 'KgsSteel', description: 'Top Bars', length: 3, diameter: 12, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'BT223', resource: 'KgsSteel', description: 'Bottom Bars', length: 3, diameter: 16, noOfBars: 6, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'BT224', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
  { id: 'BT225', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },  
],
"BT23": [  
  { id: 'BT231', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
],
"BT24": [
  { id: 'BT241', resource: 'CumM25', description: 'M30Concrete', length: 3, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'BT242', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'BT243', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
],
//Beam Type-2//

//SlabSteel @ Level-1//

//Bottom Bars slab level1//
"SLB1": [
  { id: 'SLB11', resource: 'CumMetalFormwork', description: 'Metal', length:builtLength, breadth:builtWidth, thickness: 0.15, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
  { id: 'SLB12', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB13', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 4, totalCost: 0 },           
],
"SSL1": [  
  { id: 'SSL11', resource: 'KgsSteel', description: 'Bottom Main Bars', length: builtLength, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'SSL12', resource: 'KgsSteel', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'SSL13', resource: 'DailyMason', description: 'steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SSL14', resource: 'DailyHelper', description: 'helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
"SSB1": [    
  { id: 'SSB11', resource: 'KgsSteel', description: 'Bottom Distri Bars', breadth: builtWidth, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'SSB12', resource: 'KgsSteel', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'SSB13', resource: 'DailyMason', description: 'steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SSB14', resource: 'DailyHelper', description: 'helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Bottom Bars slab level1//

//MEP Level1//
"SLB3": [
  { id: 'SLB31', resource: 'mPVCElectrical', description: 'Electrical', rate: ElectricalRates.PVC.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'SLB32', resource: 'DailyMason', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB33', resource: 'DailyHelper', description: 'Electrical', rate: ElectricianRates.Mason.Daily, units: 'Day', quantity: 2, totalCost: 0 },
],
"SLB4": [
  { id: 'SLB41', resource: 'mHangersMechanical', description: 'Mechanical', rate: MechanicalRates.Hangers.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'SLB42', resource: 'DailyMason', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB43', resource: 'DailyHelper', description: 'Mechanical', rate: MechMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
"SLB5": [
  { id: 'SLB51', resource: 'mCPVCPlumbing', description: 'Plumbing', rate: PlumbingRates.CPVC.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'SLB52', resource: 'DailyMason', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB53', resource: 'DailyHelper', description: 'Plumbing', rate: PlumberRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
"SLB6": [
  { id: 'SLB61', resource: 'mHangerssprinklerFirefighting', description: 'FireFighting', rate: FirefightingRates.Hangerssprinkler.m, units: 'm', quantity: 1, totalCost: 0 },    
  { id: 'SLB62', resource: 'DailyMason', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB63', resource: 'DailyHelper', description: 'FireFighting', rate: FFMasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
],
//MEP Level1//

//Top Bars lab level1//
"SSL2": [  
  { id: 'SSL21', resource: 'KgsSteel', description: 'Bottom Main Bars', length: builtLength, diameter: 16, noOfBars: 16, rate: SteelRates.Dia16.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code   
  { id: 'SSL22', resource: 'KgsSteel', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'SSL23', resource: 'DailyMason', description: 'steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SSL24', resource: 'DailyHelper', description: 'helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
"SLB2": [    
  { id: 'SLB21', resource: 'KgsSteel', description: 'Bottom Distri Bars', breadth: builtWidth, diameter: 12, noOfBars: 21, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code       
  { id: 'SLB22', resource: 'KgsSteel', description: 'BarBender', rate: BarBenderRates.Daily, units: 'Day', quantity: 8, totalCost: 0 },
  { id: 'SLB23', resource: 'DailyMason', description: 'steelfixer', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB24', resource: 'DailyHelper', description: 'helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },  
],
//Top Bars lab level1//

//Slab Concrete Level1//
"SLB7": [
  { id: 'SLB71', resource: 'VisitEngineer', description: 'Inspection', rate: EngineerRates.Inspection.Visit, units: 'Day', quantity: 1, totalCost: 0 },  
  { id: 'SLB72', resource: 'CumM25', description: 'M30Concrete', length: builtLength, breadth: builtWidth, thickness: 0.15, area:0,  rate: ConcreteRates.M30.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
  { id: 'SLB73', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
  { id: 'SLB74', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 5, totalCost: 0 },
],
//Slab Concrete Level1//
"SLB8": [
      { id: 'SLB81', resource: 'SftWater', description: 'Curing Water', length: builtLength, breadth: builtWidth, thickness: 0.15,area: 0,  rate: WaterRates.Water.Sft, units: 'Sft', quantity: 0, totalCost: 0 },
      { id: 'SLB82', resource: 'DailyMason', description: 'mason', rate: MasonRates.Mason.Daily, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'SLB83', resource: 'DailyHelper', description: 'helper', rate: HelperRates.Helper.Daily, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

"SLB9": [      
      { id: 'SLB91', resource: 'DailyMason', description: 'mason', rate: MasonRates.Mason.Daily, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'SLB92', resource: 'DailyHelper', description: 'helper', rate: HelperRates.Helper.Daily, units: 'Day', quantity: 2, totalCost: 0 },
    ],



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