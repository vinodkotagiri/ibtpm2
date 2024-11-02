type MasionType='DailyMason'|'WeeklyMason'|'MonthlyMason'|'ContractMason'|'PerSqftMason'|'PerCumMason'|'PerHourMason'
type HelperType='DailyHelper'|'WeeklyHelper'|'MonthlyHelper'|'ContractHelper'|'PerSqftHelper'|'PerCumHelper'|'PerHourHelper'|'PerMTHelper'
type MachinaryType='DailyMachinery'|'WeeklyMachinery'|'MonthlyMachinery'|'ContractMachinery'|'PerSqftMachinery'|'PerCumMachinery'|"PerMT"|"PerHourMachinery"
type BarBenderType='DailyBarbender'|'WeeklyBarbender'|'MonthlyBarbender'|'ContractBarbender'|'PerMTBarbender'|'PerCumBarbender'



export type Strategy='FF'|'SF'|'FS'|'SS'
export type TaskType='task'|'project'|'milestone'
export type ResourceUnits='Hour'|'Day'|'Week'|'Month'|'Contract'|'Sqft'|'Cum'|'MT'
export type CurrencyUnits = 
  | "USD" | "EUR" | "GBP" | "INR" | "JPY" | "CNY" | "AUD" | "CAD" | "CHF"
  | "SEK" | "NZD" | "ZAR" | "MXN" | "SGD" | "HKD" | "NOK" | "KRW" | "TRY"
  | "RUB" | "BRL" | "PLN" | "TWD" | "THB" | "MYR" | "IDR" | "DKK" | "HUF"
  | "CZK" | "ILS" | "CLP" | "PHP" | "AED" | "COP" | "SAR" | "RON" | "VND"
  | "PKR" | "EGP" | "NGN" | "BDT" | "ARS" | "KES" | "QAR" | "UAH" | "PEN"
  | "LKR" | "GHS" | "MMK" | "IRR" | "BHD" | "OMR" | "IQD" | "MAD" | "LYD"
  | "JOD" | "ALL" | "RSD" | "ISK" | "BGN" | "HRK" | "GEL" | "TND" | "AZN"
  | "UZS" | "KZT" | "AMD" | "BYN" | "MNT" | "LBP" | "SDG" | "SYP" | "YER";

export type ResourceType=MasionType|HelperType|MachinaryType|BarBenderType

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
