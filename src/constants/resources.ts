import { MachinaryRates, MasonRates, HelperRates, ConcreteRates, SteelRates, FormworkRates, FillingRates, BarBenderRates } from './rates'
import { DrawingData, Resource } from './types'

function getResources ( taskId: string, drawingData: DrawingData, taskResources: Array<Resource> =null): Array<Resource> {
  const { excavationArea, plotArea, builtupPerimeter, builtupArea, builtLength, builtWidth, excavationDepth, slabThickness } = drawingData
  const resources: Record<string, Array<Resource>> = {
    "C03": [
      {
        "id": "C1",
        "resource": "DailyMason",
        "description": "Fencing",
        "rate": MasonRates.Mason.Daily,
        "units": "Day",
        "quantity": 2,
        "totalCost": 0
      },
      {
        "id": "C2",
        "resource": "DailyHelper",
        "description": "Clean-up",
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
        "quantity": excavationArea / 3,
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
        "description": "Fencing",
        "rate": MasonRates.Mason.Daily,
        "units": "Day",
        length: 10,
        breadth:20,
        area:0,
        perimeter:0,
        thickness:3, // height of fencing
        "quantity": 0,
        "totalCost": 0
      },
      {
        "id": "C8",
        "resource": "DailyHelper",
        "description": "Clean-up",
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
        "rate": MasonRates.Mason.Daily,
        "units": "Day",
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
        "description": "M15pcc",
        length: builtLength,
        breadth: builtWidth,
        thickness: excavationDepth,
        "quantity": 0, // Will be calculated automatically
        "rate": ConcreteRates.M15pcc.Cum,
        "units": "Cum",
        "totalCost": 0
      },
      {
        "id": "C12",
        "resource": "DailyMason",
        "description": "pcc",
        "rate": MasonRates.Mason.Daily,
        "units": "Day",
        "quantity": 1,
        "totalCost": 0
      },
      {
        "id": "C13",
        "resource": "DailyHelper",
        "description": "pcc",
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
        "description": "M15pcc",
        "rate": ConcreteRates.M15pcc.Cum,
        "units": "Cum",
        "quantity": 0.2,
        "totalCost": 0
      },
      {
        "id": "F2",
        "resource": "HourlyMason",
        "description": "pcc",
        "rate": MasonRates.Mason.Hourly,
        "units": "Hour",
        "quantity": 1,
        "totalCost": 0
      },
      {
        "id": "F3",
        "resource": "HourlyHelper",
        "description": "pcc",
        "rate": HelperRates.Helper.Hourly,
        "units": "Hour",
        "quantity": 2,
        "totalCost": 0
      }
    ],
    "FT02": [
      { id: 'F4', resource: 'KgsSteel', description: '1x1x0.5', length: 1, diameter: 8, noOfBars: 4, rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 0, totalCost: 0 }, // qty and cost will be calculated in code 
      { id: 'F5', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F6', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F7', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F8', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT03": [
      { id: 'F9', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F10', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F11', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT04": [
      { id: 'F12', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F13', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F14', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT201": [
      { id: 'F15', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F16', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F17', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT202": [
      { id: 'F18', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F19', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F20', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F21', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F22', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT203": [
      { id: 'F23', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F24', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F25', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT204": [
      { id: 'F26', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F27', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F28', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT301": [
      { id: 'F29', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F30', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F31', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT302": [
      { id: 'F32', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F33', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F34', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F35', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F36', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT303": [
      { id: 'F37', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F38', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F39', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT304": [
      { id: 'F40', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F41', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F42', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT401": [
      { id: 'F43', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F44', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F45', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT402": [
      { id: 'F46', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F47', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F48', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F49', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F50', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT403": [
      { id: 'F51', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F52', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F53', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT404": [
      { id: 'F54', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F55', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F56', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT501": [
      { id: 'F57', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F58', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F59', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT502": [
      { id: 'F60', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F61', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F62', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F63', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F64', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT503": [
      { id: 'F65', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F66', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F67', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT504": [
      { id: 'F68', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F69', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F70', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT601": [
      { id: 'F71', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F72', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F73', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT602": [
      { id: 'F74', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F75', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F76', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F77', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F78', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT603": [

      { id: 'F79', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F80', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F81', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT604": [
      { id: 'F82', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F83', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F84', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT701": [
      { id: 'F85', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F86', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F87', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT702": [
      { id: 'F88', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F89', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F90', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F91', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F92', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT703": [
      { id: 'F93', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F94', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F95', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT704": [
      { id: 'F96', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F97', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F98', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT801": [
      { id: 'F99', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F100', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F101', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT802": [
      { id: 'F102', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F103', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F104', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F105', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F106', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT803": [
      { id: 'F107', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F108', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F109', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT804": [
      { id: 'F110', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F111', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F112', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT901": [
      { id: 'F113', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F114', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F115', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT902": [
      { id: 'F116', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F117', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F118', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F118A', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F119', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT903": [
      { id: 'F120', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F121', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F122', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT904": [
      { id: 'F123', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F124', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F125', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT1001": [
      { id: 'F126', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F127', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F128', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1002": [
      { id: 'F129', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F130', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F131', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F132', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F133', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1003": [
      { id: 'F134', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F135', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F136', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1004": [
      { id: 'F137', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F138', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F139', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT1101": [
      { id: 'F140', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F141', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F142', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1102": [
      { id: 'F143', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F144', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F145', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F146', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F147', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1103": [
      { id: 'F148', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F149', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F150', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1104": [
      { id: 'F151', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F152', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F153', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT1201": [
      { id: 'F154', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F155', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F156', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1202": [
      { id: 'F157', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F158', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F159', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F160', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F161', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1203": [
      { id: 'F162', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F163', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F164', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1204": [
      { id: 'F165', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F166', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F167', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT1301": [
      { id: 'F168', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F169', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F170', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1302": [
      { id: 'F171', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F172', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F173', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F174', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F175', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1303": [
      { id: 'F176', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F177', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F178', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1304": [
      { id: 'F179', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F180', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F181', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT1401": [
      { id: 'F182', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F183', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F184', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1402": [
      { id: 'F185', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F186', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F187', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F188', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F189', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1403": [
      { id: 'F190', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F191', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F192', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1404": [
      { id: 'F193', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F194', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F195', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT1501": [
      { id: 'F196', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F197', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F198', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1502": [
      { id: 'F199', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F200', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F201', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F202', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F203', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1503": [
      { id: 'F204', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F205', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F206', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1504": [
      { id: 'F207', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F208', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F209', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "FT1601": [
      { id: 'F210', resource: 'CumConcrete', description: 'M15pcc', rate: ConcreteRates.M15pcc.Cum, units: 'Cum', quantity: 0.2, totalCost: 0 },
      { id: 'F211', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F212', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1602": [
      { id: 'F213', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 2, totalCost: 0 },
      { id: 'F214', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'F215', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'F216', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F217', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1603": [
      { id: 'F218', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F219', resource: 'HourlyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'F220', resource: 'HourlyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "FT1604": [
      { id: 'F221', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'F222', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F223', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "C11": [
      { id: 'F224', resource: 'CumSoil', description: '1x1x0.5', rate: FillingRates.Soil.Cum, units: 'Cum', quantity: plotArea * 0.3, totalCost: 0 },
      { id: 'F225', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'F226', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'F227', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'F228', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "C13": [
      { id: 'PL1', resource: 'CumStone', description: '1x1x0.5', rate: FillingRates.Stone.Cum, units: 'Cum', quantity: plotArea * 0.3, totalCost: 0 },
      { id: 'PL2', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL3', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL4', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL5', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "C14": [
      { id: 'PL6', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: builtupPerimeter * 0.3, totalCost: 0 },
      { id: 'PL7', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: 4, totalCost: 0 },
      { id: 'PL8', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia12.Kgs, units: 'Kgs', quantity: 8, totalCost: 0 },
      { id: 'PL9', resource: 'KgsSteel', description: 'dia16', rate: BarBenderRates.Hourly, units: 'Hour', quantity: 8, totalCost: 0 },
      { id: 'PL10', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL11', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "C15": [
      { id: 'PL12', resource: 'CumFormwork', description: '1x1x0.5', rate: FormworkRates.Footing.Cum, units: 'Cum', quantity: ( builtupPerimeter * 0.3 ) * 2, totalCost: 0 },
      { id: 'PL13', resource: 'HourlyMason', description: 'CarpenterMason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL14', resource: 'HourlyHelper', description: 'CarpenterHelper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "C16": [
      { id: 'PL15', resource: 'CumConcrete', description: '0.3x0.3x0.3', rate: ConcreteRates.M25.Cum, units: 'Cum', quantity: 0.5, totalCost: 0 },
      { id: 'PL16', resource: 'HourlyMason', description: 'Mason', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL17', resource: 'HourlyHelper', description: 'Helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "C17": [
      { id: 'PL18', resource: 'CumSoil', description: '1x1x0.5', rate: FillingRates.Soil.Cum, units: 'Cum', quantity: plotArea * 0.15, totalCost: 0 },
      { id: 'PL19', resource: 'DailyMason', description: 'PCC', rate: MasonRates.Mason.Hourly, units: 'Day', quantity: 1, totalCost: 0 },
      { id: 'PL20', resource: 'DailyHelper', description: 'Clean-up', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL21', resource: 'DailyCompaction', description: 'Manual', rate: MachinaryRates.Compaction.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
      { id: 'PL22', resource: 'DailyHelper', description: 'Curing', rate: HelperRates.Helper.Hourly, units: 'Day', quantity: 2, totalCost: 0 },
    ],
    "C18": [
      { id: 'PL23', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: builtupArea * 0.3, totalCost: 0 },
      { id: 'PL24', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia8.Kgs, units: 'Kgs', quantity: builtupArea * 0.4, totalCost: 0 },
      { id: 'PL25', resource: 'KgsSteel', description: '1x1x0.5', rate: SteelRates.Dia10.Kgs, units: 'Kgs', quantity: builtupArea * 0.4, totalCost: 0 },
      { id: 'PL26', resource: 'KgsSteel', description: 'dia16', rate: BarBenderRates.Hourly, units: 'Hour', quantity: 8, totalCost: 0 },
      { id: 'PL27', resource: 'HourlyMason', description: 'steelfixer', rate: MasonRates.Mason.Hourly, units: 'Hour', quantity: 1, totalCost: 0 },
      { id: 'PL28', resource: 'HourlyHelper', description: 'helper', rate: HelperRates.Helper.Hourly, units: 'Hour', quantity: 2, totalCost: 0 },
    ],
    "C19": [
      { id: 'PL29', resource: 'CumConcrete', description: '1x1x0.5', rate: ConcreteRates.M20.Cum, units: 'Cum', quantity: 9, totalCost: 0 },
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