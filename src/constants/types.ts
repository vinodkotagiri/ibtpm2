type MasonType = 'DailyMason' | 'WeeklyMason' | 'MonthlyMason' | 'ContractMason' | 'PerSftMason' | 'PerCumMason' | 'PerHourMason' | 'HourlyMason'
type HelperType = 'DailyHelper' | 'WeeklyHelper' | 'MonthlyHelper' | 'ContractHelper' | 'PerSftHelper' | 'PerCumHelper' | 'PerHourHelper' | 'PerMTHelper' | 'HourlyHelper'
type MachinaryType = 'DailyMachinery' | 'DailyCompaction' | 'WeeklyMachinery' | 'MonthlyMachinery' | 'ContractMachinery' | 'PerSftMachinery' | 'PerCumMachinery' | "PerMT" | "PerHourMachinery"
type BarBenderType = 'DailyBarbender' | 'WeeklyBarbender' | 'MonthlyBarbender' | 'ContractBarbender' | 'PerMTBarbender' | 'PerCumBarbender'
type ConcreteType = 'sftConcrete' | 'CumConcrete' | 'CftConcrete'
type SteelType = 'SftSteel' | 'KgsSteel' | 'TonSteel' | 'MTSteel'
type WoodFormworkType = 'SftFormwork' | 'CftFormwork' | 'SqmFormwork' | 'CumFormwork'
type MetalFormworkType = 'SftFormwork' | 'CftFormwork' | 'SqmFormwork' | 'CumFormwork'
type redbrickType = 'redbricknos'
type flyashbrickType = 'flyashbricknos'
type ccbrickType = 'ccbricknos'
type FillingType = 'CumSoil' | 'CumSand' | 'CumAggregate' | 'CumStone'
type FencingType = 'SqmFencing' | 'SftFencing'
type ShoringType = 'SqmShoring' | 'SftShoring'
type TermiteType = 'SqmTermite' | 'SftTermite'


export type Strategy = 'FF' | 'SF' | 'FS' | 'SS'
export type TaskType = 'task' | 'project' | 'milestone'
export type ResourceUnits = 'Hour' | 'Day' | 'Week' | 'Month' | 'Contract' | 'Sft' | 'Cum' | 'MT' | 'Kgs' | 'Ton' | 'Cft' | 'Sqm'
export type CurrencyUnits =
  | "USD" | "EUR" | "GBP" | "INR" | "JPY" | "CNY" | "AUD" | "CAD" | "CHF"
  | "SEK" | "NZD" | "ZAR" | "MXN" | "SGD" | "HKD" | "NOK" | "KRW" | "TRY"
  | "RUB" | "BRL" | "PLN" | "TWD" | "THB" | "MYR" | "IDR" | "DKK" | "HUF"
  | "CZK" | "ILS" | "CLP" | "PHP" | "AED" | "COP" | "SAR" | "RON" | "VND"
  | "PKR" | "EGP" | "NGN" | "BDT" | "ARS" | "KES" | "QAR" | "UAH" | "PEN"
  | "LKR" | "GHS" | "MMK" | "IRR" | "BHD" | "OMR" | "IQD" | "MAD" | "LYD"
  | "JOD" | "ALL" | "RSD" | "ISK" | "BGN" | "HRK" | "GEL" | "TND" | "AZN"
  | "UZS" | "KZT" | "AMD" | "BYN" | "MNT" | "LBP" | "SDG" | "SYP" | "YER";

export type ResourceType = MasonType | HelperType | MachinaryType | BarBenderType | ConcreteType | SteelType | redbrickType | flyashbrickType | ccbrickType
  | WoodFormworkType |MetalFormworkType | FillingType |FencingType |ShoringType |TermiteType

export type Task = {
  id: string
  name: string
  start: string
  end: string
  duration: number
  cost: number
  strategy: Strategy
  dependencies: Array<string>
  type: TaskType
  progress: number
  hideChildren: boolean
  parent?: string
  resources?: Array<Resource>
}

export type Resource = {
  id: string
  resource: ResourceType
  description: string
  rate: number
  length?:number
  breadth?:number
  thickness?:number
  diameter?:number
  area?:number
  perimeter?:number
  noOfBars?:number
  numbersRequired?:number
  quantity: number
  units: ResourceUnits
  totalCost: number
}

export type DrawingData = {
  currentUnits:"imperial"|"SI"
  plotLength: number,
  plotWidth: number,
  plotArea: number,
  plotPerimeter: number,
  builtLength: number,
  builtWidth: number,
  builtupArea: number,
  builtupPerimeter: number,
  excavationArea: number,
  excavationDepth: number,
  slabThickness:number
  groundFloorArea: number,
  firstFloorArea: number,
  secondFloorArea: number,
  thirdFloorArea: number,
  fourthFloorArea: number,
  groundFloorWalls: [ { length: number, thickness: number } ],
  firstFloorWalls: [ { length: number, thickness: number } ],
  secondFloorWalls: [ { length: number, thickness: number } ],
  thirdFloorWalls: [ { length: number, thickness: number } ],
  fourthFloorWalls: [ { length: number, thickness: number } ],
}
