import { MachinaryRates, MasonRates, HelperRates, ConcreteRates, SteelRates, FormworkRates, FillingRates, BarBenderRates,FencingRates,ShoringRates,TermiteRates } from './rates'
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
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length: 1.2, breadth: 1.2, thickness: 0.3, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
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
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length: 1.5, breadth: 1.5, thickness: 0.3, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
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
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length: 1.8, breadth: 1.8, thickness: 0.4, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
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
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:2.0, breadth: 2.0, thickness: 0.4, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
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
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:2.5, breadth: 2.5, thickness: 0.4, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
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

      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:3.0, breadth: 3.0, thickness: 0.5, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT604": [
      { id: 'F12', resource: 'CumConcrete', description: 'Concrete', length: 3.0, breadth: 3.0, thickness: 0.5, area:0,  rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],




    // "FT701": [
    //   { id: 'F85', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F86', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F87', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT702": [
    //   { id: 'F88', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F89', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F90', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F91', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F92', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT703": [
    //   { id: 'F93', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F94', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F95', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT704": [
    //   { id: 'F96', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F97', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F98', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],
    // "FT801": [
    //   { id: 'F99', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F100', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F101', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT802": [
    //   { id: 'F102', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F103', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F104', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F105', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F106', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT803": [
    //   { id: 'F107', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F108', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F109', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT804": [
    //   { id: 'F110', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F111', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F112', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],
    // "FT901": [
    //   { id: 'F113', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F114', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F115', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT902": [
    //   { id: 'F116', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F117', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F118', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F118A', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F119', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT903": [
    //   { id: 'F120', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F121', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F122', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT904": [
    //   { id: 'F123', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F124', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F125', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],
    // "FT1001": [
    //   { id: 'F126', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F127', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F128', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1002": [
    //   { id: 'F129', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F130', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F131', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F132', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F133', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1003": [
    //   { id: 'F134', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F135', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F136', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1004": [
    //   { id: 'F137', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F138', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F139', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],
    // "FT1101": [
    //   { id: 'F140', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F141', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F142', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1102": [
    //   { id: 'F143', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F144', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F145', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F146', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F147', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1103": [
    //   { id: 'F148', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F149', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F150', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1104": [
    //   { id: 'F151', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F152', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F153', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],
    // "FT1201": [
    //   { id: 'F154', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F155', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F156', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1202": [
    //   { id: 'F157', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F158', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F159', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F160', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F161', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1203": [
    //   { id: 'F162', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F163', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F164', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1204": [
    //   { id: 'F165', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F166', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F167', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],
    // "FT1301": [
    //   { id: 'F168', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F169', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F170', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1302": [
    //   { id: 'F171', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F172', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F173', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F174', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F175', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1303": [
    //   { id: 'F176', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F177', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F178', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1304": [
    //   { id: 'F179', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F180', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F181', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],
    // "FT1401": [
    //   { id: 'F182', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F183', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F184', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1402": [
    //   { id: 'F185', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F186', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F187', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F188', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F189', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1403": [
    //   { id: 'F190', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F191', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F192', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1404": [
    //   { id: 'F193', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F194', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F195', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],
    // "FT1501": [
    //   { id: 'F196', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F197', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F198', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1502": [
    //   { id: 'F199', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F200', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F201', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F202', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F203', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1503": [
    //   { id: 'F204', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F205', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F206', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1504": [
    //   { id: 'F207', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F208', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F209', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],
    // "FT1601": [
    //   { id: 'F210', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
    //   { id: 'F211', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F212', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1602": [
    //   { id: 'F213', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
    //   { id: 'F214', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
    //   { id: 'F215', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
    //   { id: 'F216', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F217', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1603": [
    //   { id: 'F218', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F219', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
    //   { id: 'F220', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    // ],
    // "FT1604": [
    //   { id: 'F221', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
    //   { id: 'F222', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
    //   { id: 'F223', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    // ],


    "C11": [
          
      { id: 'F224', resource: 'CumSoil', description: 'perimeter-deduts (no of footings)', length: 0, breadth:0, thickness: excavationDepth, area:0, rate: FillingRates.Soil.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F225', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F226', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'F227', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'F228', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PB1": [
      { id: 'PL1', resource: 'CumStone', description: 'perimeter', length: 0, breadth:0.23, thickness: 0.23, perimeter:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PB2": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 0, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 0, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PB3": [
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:0, breadth:0.23, thickness: 0.23, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PB4": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 0, breadth: 0.23, thickness: 0.23, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

   
    "PB02": [
      { id: 'PL1', resource: 'CumStone', description: 'perimeter', length: 0, breadth:0.26, thickness: 0.26, perimeter:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PB03": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 0, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 0, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PB04": [
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:0, breadth:0.26, thickness: 0.26, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PB05": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 0, breadth: 0.26, thickness: 0.26, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    
    "PB002": [
      { id: 'PL1', resource: 'CumStone', description: 'perimeter', length: 0, breadth:0.3, thickness: 0.3, perimeter:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PB003": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 0, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 0, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PB004": [
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:0, breadth:0.3, thickness: 0.3, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PB005": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 0, breadth: 0.3, thickness: 0.3, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    
    "PB0002": [
      { id: 'PL1', resource: 'CumStone', description: 'perimeter', length: 0, breadth:0.3, thickness: 0.45, perimeter:0,  rate: FillingRates.Stone.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "PB0003": [
      { id: 'F4', resource: 'KgsSteel', description: 'Stirrups&Hooks', length: 0, diameter: 8, noOfBars:4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 0, diameter: 12, noOfBars: 3, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 0, diameter: 16, noOfBars: 4, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F7', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },    
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PB0004": [
      { id: 'F9', resource: 'CumFormwork', description: 'Wood', length:0, breadth:0.3, thickness: 0.45, perimeter:0, rate: FormworkRates.Footing.Sqm, units: 'Sqm', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F10', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "PB0005": [
      { id: 'F12', resource: 'CumConcrete', description: 'M25Concrete', length: 3.0, breadth: 0.3, thickness: 0.45, area:0,  rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],

    "C17": [
      { id: 'F224', resource: 'CumSoil', description: 'perimeter-deduts (no of footings)', length: 0, breadth:0, thickness: excavationDepth, area:0, rate: FillingRates.Soil.Cum, units: 'Cum', quantity: 0, totalCost: 0 },
      { id: 'PL19', resource: 'DailyMason', description: 'Filling', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL20', resource: 'DailyHelper', description: 'Filling', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL21', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL22', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "C18": [
      { id: 'F5', resource: 'KgsSteel', description: 'Main Bars', length: 0, diameter: 6, noOfBars: 20, rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F6', resource: 'KgsSteel', description: 'Distribution Bars', length: 0, diameter: 6, noOfBars: 20, rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
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
  }
  return resources
}

export default getResources