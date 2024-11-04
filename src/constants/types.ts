type MasonType='DailyMason'|'WeeklyMason'|'MonthlyMason'|'ContractMason'|'PerSqftMason'|'PerCumMason'|'PerHourMason'
type HelperType='DailyHelper'|'WeeklyHelper'|'MonthlyHelper'|'ContractHelper'|'PerSqftHelper'|'PerCumHelper'|'PerHourHelper'|'PerMTHelper'
type MachinaryType='DailyMachinery'|'WeeklyMachinery'|'MonthlyMachinery'|'ContractMachinery'|'PerSqftMachinery'|'PerCumMachinery'|"PerMT"|"PerHourMachinery"
type BarBenderType='DailyBarbender'|'WeeklyBarbender'|'MonthlyBarbender'|'ContractBarbender'|'PerMTBarbender'|'PerCumBarbender'
type ConcreteType='concretesft'|'concretecum'|'concretecft'
type M10pccType='M10pccsft'|'M10pcccum'|'M10pcccft'
type M15pccType='M15pccsft'|'M15pcccum'|'M15pcccft'
type M20Type='M20sft'|'M20cum'|'M20cft'
type M25Type='M25sft'|'M25cum'|'M25cft'
type M30Type='M30sft'|'M30cum'|'M30cft'
type M35Type='M35sft'|'M35cum'|'M35cft'
type M40Type='M40sft'|'M40cum'|'M40cft'
type steel6Type='steel8kgs'|'steel8ton'|'steel8MT'
type steel8Type='steel8kgs'|'steel8ton'|'steel8MT'
type steel10Type='steel10kgs'|'steel10ton'|'steel10MT'
type steel12Type='steel12kgs'|'steel12ton'|'steel12MT'
type steel16Type='steel16kgs'|'steel16ton'|'steel16MT'
type steel18Type='steel18kgs'|'steel18ton'|'steel18MT'
type steel20Type='steel20kgs'|'steel20ton'|'steel20MT'
type steel22Type='steel22kgs'|'steel22ton'|'steel22MT'
type steel24Type='steel24kgs'|'steel24ton'|'steel24MT'
type steel26Type='steel26kgs'|'steel26ton'|'steel26MT'
type steel28Type='steel30kgs'|'steel30ton'|'steel30MT'
type steel30Type='steel40kgs'|'steel40ton'|'steel40MT'
type steel32Type='steel40kgs'|'steel40ton'|'steel40MT'
type steel34Type='steel40kgs'|'steel40ton'|'steel40MT'
type steel36Type='steel40kgs'|'steel40ton'|'steel40MT'
type steel40Type='steel40kgs'|'steel40ton'|'steel40MT'
type redbrickType='redbricknos'
type flyashbrickType='flyashbricknos'
type ccbrickType='ccbricknos'


export type Strategy='FF'|'SF'|'FS'|'SS'
export type TaskType='task'|'project'|'milestone'
export type ResourceUnits='Hour'|'Day'|'Week'|'Month'|'Contract'|'Sqft'|'Cum'|'MT'|'number'|'kgs'|'ton'
export type CurrencyUnits = 
  | "USD" | "EUR" | "GBP" | "INR" | "JPY" | "CNY" | "AUD" | "CAD" | "CHF"
  | "SEK" | "NZD" | "ZAR" | "MXN" | "SGD" | "HKD" | "NOK" | "KRW" | "TRY"
  | "RUB" | "BRL" | "PLN" | "TWD" | "THB" | "MYR" | "IDR" | "DKK" | "HUF"
  | "CZK" | "ILS" | "CLP" | "PHP" | "AED" | "COP" | "SAR" | "RON" | "VND"
  | "PKR" | "EGP" | "NGN" | "BDT" | "ARS" | "KES" | "QAR" | "UAH" | "PEN"
  | "LKR" | "GHS" | "MMK" | "IRR" | "BHD" | "OMR" | "IQD" | "MAD" | "LYD"
  | "JOD" | "ALL" | "RSD" | "ISK" | "BGN" | "HRK" | "GEL" | "TND" | "AZN"
  | "UZS" | "KZT" | "AMD" | "BYN" | "MNT" | "LBP" | "SDG" | "SYP" | "YER";

export type ResourceType=MasonType|HelperType|MachinaryType|BarBenderType|ConcreteType|steel6Type|steel8Type|steel10Type|steel12Type|steel16Type|steel18Type|steel20Type|steel22Type|
steel24Type|steel26Type|steel28Type|steel30Type|steel32Type|steel34Type|steel36Type|steel40Type
|M10pccType|M15pccType|M20Type|M25Type|M30Type|M35Type|M40Type|redbrickType|flyashbrickType|ccbrickType

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

