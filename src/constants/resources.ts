import { MachinaryRates, MasonRates, HelperRates, ConcreteRates, SteelRates, WoodFormworkRates,MetalFormworkRates,FillingRates, BarBenderRates,FencingRates,ShoringRates,TermiteRates } from './rates'
import { DrawingData, Resource } from './types'

function getResources ( taskId: string, drawingData: DrawingData, taskResources: Array<Resource> =null): Array<Resource> {
  const { excavationArea, plotArea, builtupPerimeter, builtupArea, builtLength, builtWidth, excavationDepth, slabThickness } = drawingData
  const resources: Record<string, Array<Resource>> = {


    "C02A": [
      {
        "id": "C0",
        "resource": "DailyMason",
        "description": "Survery",
        "rate": FencingRates.Fencing.Sft,
        "units": "Sft",
        length: 10,
        breadth:20,
        area:0,        
        thickness:3, // height of fencing
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
        length: 10,
        breadth:20,
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
        length: 10,
        breadth:20,
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
        length: 10,
        breadth:20,
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
        "resource": "CumConcrete",
        "description": "M15",
        length: builtLength,
        breadth: builtWidth,
        thickness: 0.1,
        area:0,        
        "quantity": 0, // Will be calculated automatically
        "rate": ConcreteRates.M15pcc.Cum,
        "units": "Cum",
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
        "resource": "CumConcrete",
        "description": "PccbaseM15",
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
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 1.2, diameter: 10, noOfBars: 6, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT03": [
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length: 1.2, breadth: 1.2, thickness: 0.3, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT04": [
      { id: 'F12', resource: 'CumConcrete', description: 'Concrete', length: 1.2, breadth: 1.2, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],




    "FT201": [
      { id: 'F15', resource: 'CumConcrete', description: 'Pcc', length: 1.5, breadth: 1.5, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT202": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0.6, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 1.5, diameter: 12, noOfBars: 8, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 1.5, diameter: 12, noOfBars: 8, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT203": [
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length: 1.5, breadth: 1.5, thickness: 0.3, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT204": [
      { id: 'F12', resource: 'CumConcrete', description: 'Concrete', length: 1.5, breadth: 1.5, thickness: 0.3, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],



    "FT301": [
      { id: 'F15', resource: 'CumConcrete', description: 'Pcc', length: 1.8, breadth: 1.5, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
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
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length: 1.8, breadth: 1.8, thickness: 0.4, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT304": [
      { id: 'F12', resource: 'CumConcrete', description: 'Concrete', length: 1.8, breadth: 1.8, thickness: 0.4, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],




    "FT401": [
      { id: 'F15', resource: 'CumConcrete', description: 'Pcc', length: 2.0, breadth: 2.0, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT402": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0.7, diameter: 8, noOfBars:6, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 2.0, diameter: 10, noOfBars: 10, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 2.0, diameter: 10, noOfBars: 10, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT403": [
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:2.0, breadth: 2.0, thickness: 0.4, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT404": [
      { id: 'F12', resource: 'CumConcrete', description: 'Concrete', length: 2.0, breadth: 2.0, thickness: 0.4, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],





    "FT501": [
      { id: 'F15', resource: 'CumConcrete', description: 'Pcc', length: 2.5, breadth: 2.5, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT502": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0.8, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 2.5, diameter: 12, noOfBars: 12, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 2.5, diameter: 12, noOfBars: 12, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT503": [
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:2.5, breadth: 2.5, thickness: 0.4, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT504": [
      { id: 'F12', resource: 'CumConcrete', description: 'Concrete', length: 2.5, breadth: 2.5, thickness: 0.4, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],





    "FT601": [
      { id: 'F15', resource: 'CumConcrete', description: 'Pcc', length: 3.0, breadth: 3.0, thickness: 0.15, area:0, rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity:0, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

    "FT602": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 1.0, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 3.0, diameter: 16, noOfBars: 12, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 3.0, diameter: 16, noOfBars: 12, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],

    "FT603": [

      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:3.0, breadth: 3.0, thickness: 0.5, perimeter:0, rate: WoodFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT604": [
      { id: 'F12', resource: 'CumConcrete', description: 'Concrete', length: 3.0, breadth: 3.0, thickness: 0.5, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
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
      { id: 'F9', resource: 'CumFormwork', description: 'Metal', length:0, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT1L4": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 0, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
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
      { id: 'F9', resource: 'CumFormwork', description: 'Metal', length:0, breadth:0.26, thickness: 0.26, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2L4": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 0, breadth: 0.26, thickness: 0.26, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
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
      { id: 'F9', resource: 'CumFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3L4": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 0, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
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
      { id: 'F9', resource: 'CumFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4L4": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 3.0, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
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
      { id: 'F9', resource: 'CumFormwork', description: 'Metal', length:0, breadth:0.23, thickness: 0.23, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT1B4": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 0, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
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
      { id: 'F9', resource: 'CumFormwork', description: 'Metal', length:0, breadth:0.26, thickness: 0.26, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT2B4": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 0, breadth: 0.26, thickness: 0.26, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
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
      { id: 'F9', resource: 'CumFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.3, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT3B4": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 0, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
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
      { id: 'F9', resource: 'CumFormwork', description: 'Metal', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: MetalFormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PT4B4": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 3.0, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    // plinth beam breadth//

    "C17": [
      { id: 'F224', resource: 'CumSoil', description: 'perimeter-deduts (no of footings)', length: 0, breadth:0, thickness: excavationDepth, area:0, rate: FillingRates.Soil.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL19', resource: 'DailyMason', description: 'Filling', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL20', resource: 'DailyHelper', description: 'Filling', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL21', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL22', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "C18": [
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 12, diameter: 6, noOfBars: 20, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 12, diameter: 6, noOfBars: 20, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'PL26', resource: 'KgsSteel', description: 'dia16', rate: BarBenderRates.Hourly, units: 'Hour', quantity: 8, totalCost: 0 },
      { id: 'PL27', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL28', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "C19": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 3.0, breadth: 0.3, thickness: 0.15, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL30', resource: 'DailyMason', description: 'mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL31', resource: 'DailyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ]
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