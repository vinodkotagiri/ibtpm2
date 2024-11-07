type MasonType='DailyMason'|'WeeklyMason'|'MonthlyMason'|'ContractMason'|'PerSqftMason'|'PerCumMason'|'PerHourMason'|'HourlyMason'
type HelperType='DailyHelper'|'WeeklyHelper'|'MonthlyHelper'|'ContractHelper'|'PerSqftHelper'|'PerCumHelper'|'PerHourHelper'|'PerMTHelper'|'HourlyHelper'
type MachinaryType='DailyMachinery'|'DailyCompaction'|'WeeklyMachinery'|'MonthlyMachinery'|'ContractMachinery'|'PerSqftMachinery'|'PerCumMachinery'|"PerMT"|"PerHourMachinery"
type BarBenderType='DailyBarbender'|'WeeklyBarbender'|'MonthlyBarbender'|'ContractBarbender'|'PerMTBarbender'|'PerCumBarbender'
type ConcreteType='sftConcrete'|'CumConcrete'|'cftConcrete'
type SteelType='SqftSteel'|'KgsSteel'|'TonSteel'|'MTSteel'
type FormworkType='SqftFormwork'|'CuftFormwork'|'SqmFormwork'|'CumFormwork'
type redbrickType='redbricknos'
type flyashbrickType='flyashbricknos'
type ccbrickType='ccbricknos'
type FillingType='CumSoil'|'CumSand'|'CumAggregate'|'CumStone'


export type Strategy='FF'|'SF'|'FS'|'SS'
export type TaskType='task'|'project'|'milestone'
export type ResourceUnits='Hour'|'Day'|'Week'|'Month'|'Contract'|'Sqft'|'Cum'|'MT'|'Kgs'|'Ton'|'Cuft'|'Sqmt'
export type CurrencyUnits = 
  | "USD" | "EUR" | "GBP" | "INR" | "JPY" | "CNY" | "AUD" | "CAD" | "CHF"
  | "SEK" | "NZD" | "ZAR" | "MXN" | "SGD" | "HKD" | "NOK" | "KRW" | "TRY"
  | "RUB" | "BRL" | "PLN" | "TWD" | "THB" | "MYR" | "IDR" | "DKK" | "HUF"
  | "CZK" | "ILS" | "CLP" | "PHP" | "AED" | "COP" | "SAR" | "RON" | "VND"
  | "PKR" | "EGP" | "NGN" | "BDT" | "ARS" | "KES" | "QAR" | "UAH" | "PEN"
  | "LKR" | "GHS" | "MMK" | "IRR" | "BHD" | "OMR" | "IQD" | "MAD" | "LYD"
  | "JOD" | "ALL" | "RSD" | "ISK" | "BGN" | "HRK" | "GEL" | "TND" | "AZN"
  | "UZS" | "KZT" | "AMD" | "BYN" | "MNT" | "LBP" | "SDG" | "SYP" | "YER";

export type ResourceType=MasonType|HelperType|MachinaryType|BarBenderType|ConcreteType|SteelType|redbrickType|flyashbrickType|ccbrickType
|FormworkType|FillingType

export type Task={
  id:string
  name:string
  start:string
  end:string
  duration:number
  cost:number
  strategy:Strategy
  dependencies:Array<string>
  type:TaskType
  progress:number
  hideChildren:boolean
  parent?:string
  resources?:Array<Resource>
}

export type Resource={
  id:string
  resource:ResourceType
  description:string
  rate:number
  quantity:number
  units:ResourceUnits
  totalCost:number
}

