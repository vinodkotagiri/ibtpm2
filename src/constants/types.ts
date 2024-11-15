type MasonType = 'DailyMason' | 'WeeklyMason' | 'MonthlyMason' | 'ContractMason' | 'PerSftMason' | 'PerCumMason' | 'PerHourMason' | 'HourlyMason'
type HelperType = 'DailyHelper' | 'WeeklyHelper' | 'MonthlyHelper' | 'ContractHelper' | 'PerSftHelper' | 'PerCumHelper' | 'PerHourHelper' | 'PerMTHelper' | 'HourlyHelper'
type MachinaryType = 'DailyMachinery' | 'DailyCompaction' | 'WeeklyMachinery' | 'MonthlyMachinery' | 'ContractMachinery' | 'PerSftMachinery' | 'PerCumMachinery' | "PerMT" | "PerHourMachinery"
type BarBenderType = 'DailyBarbender' | 'WeeklyBarbender' | 'MonthlyBarbender' | 'ContractBarbender' | 'PerMTBarbender' | 'PerCumBarbender'
type ConcreteType = 'sftM10pcc' | 'CumM10pcc' | 'CftM10pcc'|'sftM15pcc' | 'CumM15pcc' | 'CftM15pcc'|'sftM20' | 'CumM20' | 'CftM20'|'sftM20' | 'CumM20' | 'CftM20'
|'sftM25' | 'CumM25' | 'CftM25'| 'sftM30' | 'CumM30' | 'CftM30'| 'sftM35' | 'CumM35' | 'CftM35'| 'sftM40' | 'CumM40' | 'CftM40'| 'sftM40' | 'CumM45' | 'CftM45'
type SteelType = 'SftSteel' | 'KgsSteel' | 'TonSteel' | 'MTSteel'
type WoodFormworkType = 'SftWoodFormwork' | 'CftWoodFormwork' | 'SqmWoodFormwork' | 'CumWoodFormwork'
type MetalFormworkType = 'SftMetalFormwork' | 'CftMetalFormwork' | 'SqmMetalFormwork' | 'CumMetalFormwork'

type FillingType = 'CumSoil' | 'CumSand' | 'CumAggregate' | 'CumStone'
type FencingType = 'SqmFencing' | 'SftFencing'
type ShoringType = 'SqmShoring' | 'SftShoring'
type TermiteType = 'SqmTermite' | 'SftTermite'
type WaterType = 'SqmWater' | 'SftWater'| 'LtrWater'| 'CumWater'| 'ContractWater'| 'HourlyWater'| 'DailyWater'| 'WeeklyWater'
type ExcavationMachineType = 'CumExcavation' | 'SftExcavation'| 'CftExcavation'| 'ContractExcavation'| 'HourlyExcavation'| 'DailyExcavation'| 'WeeklyExcavation'
type ExcavationManualType = 'CumExcavation' | 'SftExcavation'| 'CftExcavation'| 'ContractExcavation'| 'HourlyExcavation'| 'DailyExcavation'| 'WeeklyExcavation'
type RedclayBrickType = 'CumRedclayBrick' | 'SftRedclayBrick'
type FlyAshBrickType = 'CumFlyAshBrick' | 'SftFlyAshBrick'
type CCBlockRatesType = 'CumCCBlock' | 'SftCCBlock'
type PlasterFCManualType = 'Cummm6' | 'Sftmm6'| 'Sqtmm6'|'Cummm8' | 'Sftmm8'| 'Sqtmm8'|'Cummm10' | 'Sftmm10'| 'Sqtmm10'|'Cummm12' | 'Sftmm12'| 'Sqtmm12'
|'Cummm15' | 'Sftmm15'| 'Sqtmm15'|'Cummm20' | 'Sftmm20'| 'Sqtmm20'
type PlasterSCManualType = 'Cummm6' | 'Sftmm6'| 'Sqtmm6'|'Cummm8' | 'Sftmm8'| 'Sqtmm8'|'Cummm10' | 'Sftmm10'| 'Sqtmm10'|'Cummm12' | 'Sftmm12'| 'Sqtmm12'
|'Cummm15' | 'Sftmm15'| 'Sqtmm15'|'Cummm20' | 'Sftmm20'| 'Sqtmm20'
type PlasterFCMachineType = 'Cummm6' | 'Sftmm6'| 'Sqtmm6'|'Cummm8' | 'Sftmm8'| 'Sqtmm8'|'Cummm10' | 'Sftmm10'| 'Sqtmm10'|'Cummm12' | 'Sftmm12'| 'Sqtmm12'
|'Cummm15' | 'Sftmm15'| 'Sqtmm15'|'Cummm20' | 'Sftmm20'| 'Sqtmm20'
type PlasterSCMachineType = 'Cummm6' | 'Sftmm6'| 'Sqtmm6'|'Cummm8' | 'Sftmm8'| 'Sqtmm8'|'Cummm10' | 'Sftmm10'| 'Sqtmm10'|'Cummm12' | 'Sftmm12'| 'Sqtmm12'
|'Cummm15' | 'Sftmm15'| 'Sqtmm15'|'Cummm20' | 'Sftmm20'| 'Sqtmm20'

type SewerS40PVCType = 'ftmm12SewerS40PVC'| 'mmm12SewerS40PVC'|'ftmm25SewerS40PVC'| 'mmm25SewerS40PVC'|'ftmm50SewerS40PVC'| 'mmm50SewerS40PVC'|'ftmm100SewerS40PVC'| 'mmm100SewerS40PVC'|'ftmm150SewerS40PVC'| 'mmm150SewerS40PVC'|'ftmm200SewerS40PVC'| 'mmm200SewerS40PVC'
type SewerS80PVCType = 'ftmm12SewerS80PVC'| 'mmm12SewerS80PVC'|'ftmm25SewerS80PVC'| 'mmm25SewerS80PVC'|'ftmm50SewerS80PVC'| 'mmm50SewerS80PVC'|'ftmm100SewerS80PVC'| 'mmm100SewerS80PVC'|'ftmm150SewerS80PVC'| 'mmm150SewerS80PVC'|'ftmm200SewerS80PVC'| 'mmm200SewerS80PVC'

type CPVCType = 'ftmm15CPVC'| 'ftmm20CPVC'| 'ftmm32CPVC'
type PPRType = 'ftmm20PPR'| 'ftmm25PPR'| 'ftmm40PPR'
type GIType = 'ftmm15PPR'| 'ftmm20PPR'| 'ftmm40PPR'


export type Strategy = 'FF' | 'SF' | 'FS' | 'SS'
export type TaskType = 'task' | 'project' | 'milestone'
export type ResourceUnits = 'Hour' | 'Day' | 'Week' | 'Month' | 'Contract' | 'Sft' | 'mm' | 'm' | 'Cum' | 'MT' | 'Kgs' | 'Ton' | 'Cft' | 'Sqm'
export type CurrencyUnits =
  | "USD" | "EUR" | "GBP" | "INR" | "JPY" | "CNY" | "AUD" | "CAD" | "CHF"
  | "SEK" | "NZD" | "ZAR" | "MXN" | "SGD" | "HKD" | "NOK" | "KRW" | "TRY"
  | "RUB" | "BRL" | "PLN" | "TWD" | "THB" | "MYR" | "IDR" | "DKK" | "HUF"
  | "CZK" | "ILS" | "CLP" | "PHP" | "AED" | "COP" | "SAR" | "RON" | "VND"
  | "PKR" | "EGP" | "NGN" | "BDT" | "ARS" | "KES" | "QAR" | "UAH" | "PEN"
  | "LKR" | "GHS" | "MMK" | "IRR" | "BHD" | "OMR" | "IQD" | "MAD" | "LYD"
  | "JOD" | "ALL" | "RSD" | "ISK" | "BGN" | "HRK" | "GEL" | "TND" | "AZN"
  | "UZS" | "KZT" | "AMD" | "BYN" | "MNT" | "LBP" | "SDG" | "SYP" | "YER";

export type ResourceType = MasonType | HelperType | MachinaryType | BarBenderType | ConcreteType | SteelType | WoodFormworkType 
|MetalFormworkType | FillingType |FencingType |ShoringType |TermiteType|WaterType| ExcavationMachineType | ExcavationManualType| 
RedclayBrickType | FlyAshBrickType|CCBlockRatesType| PlasterFCManualType|PlasterSCManualType|PlasterFCMachineType|PlasterSCMachineType
|SewerS40PVCType| SewerS80PVCType |CPVCType |PPRType |GIType

export type Task = {
  id: string
  name: string
  start: string
  end: string
  duration: number
  cost: number
  numbersRequired?:number
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
