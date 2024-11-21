type EngineerType =  'PerHourEngineer' |'DailyEngineer' | 'WeeklyEngineer' | 'MonthlyEngineer' | 'ContractEngineer' | 'PerSftEngineer' | 'VisitEngineer' 
type MasonType = 'DailyMason' | 'WeeklyMason' | 'MonthlyMason' | 'ContractMason' | 'PerSftMason' | 'PerCumMason' | 'PerHourMason' | 'HourlyMason'
type HelperType = 'DailyHelper' | 'WeeklyHelper' | 'MonthlyHelper' | 'ContractHelper' | 'PerSftHelper' | 'PerCumHelper' | 'PerHourHelper' | 'PerMTHelper' | 'HourlyHelper'
type MachinaryType = 'DailyMachinery' | 'DailyCompaction' | 'WeeklyMachinery' | 'MonthlyMachinery' | 'ContractMachinery' | 'PerSftMachinery' | 'PerCumMachinery' | "PerMT" | "PerHourMachinery"
type BarBenderType = 'DailyBarbender' | 'WeeklyBarbender' | 'MonthlyBarbender' | 'ContractBarbender' | 'PerMTBarbender' | 'PerCumBarbender'
type ConcreteType = 'sftM10pccConcrete' | 'CumM10pccConcrete' | 'CftM10pccConcrete'|'sftM15pccConcrete' | 'CumM15pccConcrete' | 'CftM15pccConcrete'|'sftM20Concrete' | 'CumM20Concrete' | 'CftM20Concrete'|'sftM20Concrete' | 'CumM20Concrete' | 'CftM20Concrete'
|'sftM25Concrete' | 'CumM25Concrete' | 'CftM25Concrete'| 'sftM30Concrete' | 'CumM30Concrete' | 'CftM30Concrete'| 'sftM35Concrete' | 'CumM35Concrete' | 'CftM35Concrete'| 'sftM40Concrete' | 'CumM40Concrete' | 'CftM40Concrete'| 'sftM40Concrete' | 'CumM45Concrete' | 'CftM45Concrete'
type SteelType = 'SftDia6Steel' | 'KgsDia6Steel' |'SftDia8Steel' | 'KgsDia8Steel' |'SftDia10Steel' | 'KgsDia10Steel' |'SftDia12Steel' | 'KgsDia12Steel' |'SftDia14Steel' | 'KgsDia14Steel' |'SftDia16Steel' | 'KgsDia16Steel' |'SftDia18Steel' | 'KgsDia18Steel' |'SftDia20Steel' | 'KgsDia20Steel' 
type WoodFormworkType = 'SftWoodFormwork' | 'CftWoodFormwork' | 'SqmWoodFormwork' | 'CumWoodFormwork'
type MetalFormworkType = 'SftMetalFormwork' | 'CftMetalFormwork' | 'SqmMetalFormwork' | 'CumMetalFormwork'

type FillingType = 'CumSoilFilling' | 'CumSandFilling' | 'CumAggregateFilling' | 'CumStoneFilling'
type FencingType = 'SqmFencing' | 'SftFencing'
type ShoringType = 'SqmShoring' | 'SftShoring'
type TermiteType = 'SqmTermite' | 'SftTermite'
type WaterType = 'SqmWater' | 'SftWater'| 'LtrWater'| 'CumWater'| 'ContractWater'| 'HourlyWater'| 'DailyWater'| 'WeeklyWater'
type ExcavationMachineType = 'CumBackhoeExcavationMachine' | 'SftBackhoeExcavationMachine'| 'CftBackhoeExcavationMachine'| 'HourlyBackhoeExcavationMachine'|
'CumExcavatorExcavatonMachine' | 'SftExcavatorExcavationMachine'| 'CftExcavatorExcavationMachine'| 'HourlyExcavatorExcavationMachine'| 
'CumSoftExcavatonMachine' | 'SftSoftExcavationMachine'| 'CftSoftExcavationMachine'| 'HourlySoftExcavationMachine' | 
'CumMediumExcavatonMachine' | 'SftMediumExcavationMachine'| 'CftMediumExcavationMachine'| 'HourlyMediumExcavationMachine' | 
'CumHardExcavatonMachine' | 'SftHardExcavationMachine'| 'CftHardExcavationMachine'| 'HourlyHardExcavationMachine' | 
'CumFoundationExcavatonMachine' | 'SftFoundationExcavationMachine'| 'CftFoundationExcavationMachine'| 'HourlyFoundationExcavationMachine' | 
'CumUtilitiesExcavatonMachine' | 'SftUtilitiesExcavationMachine'| 'CftUtilitiesExcavationMachine'| 'HourlyUtilitiesExcavationMachine' 

type ExcavationManualType = 'CumExcavationManual' | 'SftExcavationManual'| 'CftExcavationManual'| 'ContractExcavationManual'| 'HourlyExcavationManual'| 'DailyExcavationManual'

//Brickwork//
type Redclayper1000Type = 'Cuminch6Redclayper1000' | 'Sftinch6Redclayper1000'|'Cuminch9Redclayper1000' | 'Sftinch9Redclayper1000'|'Cuminch12Redclayper1000' | 'Sftinch12Redclayper1000'|'Cuminch16Redclayper1000' | 'Sftinch16Redclayper1000'
type FlyAshper1000Type = 'Cuminch6FlyAshper1000' | 'Sftinch6FlyAshper1000'|'Cuminch9FlyAshper1000' | 'Sftinch9FlyAshper1000'|'Cuminch12FlyAshper1000' | 'Sftinch12FlyAshper1000'|'Cuminch16FlyAshper1000' | 'Sftinch16FlyAshper1000'
type CCBlockper1000Type = 'Cuminch6CCBlockper1000' | 'Sftinch6CCBlockper1000'|'Cuminch9CCBlockper1000' | 'Sftinch9CCBlockper1000'|'Cuminch12CCBlockper1000' | 'Sftinch12CCBlockper1000'|'Cuminch16CCBlockper1000' | 'Sftinch16CCBlockper1000'
//Brickwork//

//plaster//
type PlasterManualType = 'Cummm6PlasterManual' | 'Sftmm6PlasterManual'| 'Sqtmm6PlasterManual'|'Cummm8PlasterManual' | 'Sftmm8PlasterManual'| 'Sqtmm8PlasterManual'|'Cummm10PlasterManual' | 'Sftmm10PlasterManual'| 'Sqtmm10PlasterManual'|'Cummm12PlasterManual' | 'Sftmm12PlasterManual'| 'Sqtmm12PlasterManual'
|'Cummm15PlasterManual' | 'Sftmm15PlasterManual'| 'Sqtmm15PlasterManual'|'Cummm20PlasterManual' | 'Sftmm20PlasterManual'| 'Sqtmm20PlasterManual'
type PlasterMachineType = 'Cummm6PlasterMachine' | 'Sftmm6PlasterMachine'| 'Sqtmm6PlasterMachine'|'Cummm8PlasterMachine' | 'Sftmm8PlasterMachine'| 'Sqtmm8PlasterMachinePlasterMachine'|'Cummm10PlasterMachinePlasterMachine' | 'Sftmm10PlasterMachine'| 'Sqtmm10PlasterMachine'|'Cummm12PlasterMachine' | 'Sftmm12PlasterMachine'| 'Sqtmm12PlasterMachine'
|'Cummm15PlasterMachine' | 'Sftmm15PlasterMachine'| 'Sqtmm15PlasterMachine'|'Cummm20PlasterMachine' | 'Sftmm20PlasterMachine'| 'Sqtmm20PlasterMachine'
//plaster//

type SewerS40PVCType = 'ftmm12SewerS40PVC'| 'mmm12SewerS40PVC'|'ftmm25SewerS40PVC'| 'mmm25SewerS40PVC'|'ftmm50SewerS40PVC'| 'mmm50SewerS40PVC'|'ftmm100SewerS40PVC'| 'mmm100SewerS40PVC'|'ftmm150SewerS40PVC'| 'mmm150SewerS40PVC'|'ftmm200SewerS40PVC'| 'mmm200SewerS40PVC'
type SewerS80PVCType = 'ftmm12SewerS80PVC'| 'mmm12SewerS80PVC'|'ftmm25SewerS80PVC'| 'mmm25SewerS80PVC'|'ftmm50SewerS80PVC'| 'mmm50SewerS80PVC'|'ftmm100SewerS80PVC'| 'mmm100SewerS80PVC'|'ftmm150SewerS80PVC'| 'mmm150SewerS80PVC'|'ftmm200SewerS80PVC'| 'mmm200SewerS80PVC'

type CPVCType = 'ftmm15CPVC'| 'ftmm20CPVC'| 'ftmm32CPVC'
type PPRType = 'ftmm20PPR'| 'ftmm25PPR'| 'ftmm40PPR'
type GIType = 'ftmm15GI'| 'ftmm20GI'| 'ftmm40GI'
type ElectricalType = 'SftPVCElectrical'| 'mPVCElectrical'| 'UnitJunctionBoxElectrical'| 'mJunctionBoxElectrical'| 'SftJunctionBoxElectrical'| 'UnitPullwiresconduitsElectrical'  | 'mPullwiresconduitsElectrical'| 'SftPullwiresconduitsElectrical'  | 'mLightFixturesElectrical'| 'UnitLightFixturesElectrical'| 'SftLightFixturesElectrical'
type MechanicalType = 'SftHangersMechanical'| 'mHangersMechanical'| 'SftDuctMechanical'| 'SftDrainpipesMechanical'  | 'mDrainpipesMechanical'
type FirefightingType = 'SftSprinklerpipesFirefighting'| 'mSprinklerpipesFirefighting'|'mFirehosereelconduitFirefighting'|'SftFirehosereelconduitFirefighting'|'SftHangerssprinklerFirefighting'|'mHangerssprinklerFirefighting'
type PlumbingType = 'SftCPVCPlumbing'| 'mCPVCPlumbing'| 'mDrainagepipespvcPlumbing'| 'SftDrainagepipespvcPlumbing'
//doorframe Insulation//
type DFinsulationType = 'WP1TeakDFinsulation'| 'WP2TeakDFinsulation'| 'WP3TeakDFinsulation'| 'FT1TeakDFinsulation'| 'FT2TeakDFinsulation'
|'FT1PlyDFinsulation'| 'FT2PlyDFinsulation'| 'AS1PlyDFinsulation'| 'AS2PlyDFinsulation'| 'WP1PlyDFinsulation'| 'WP2PlyDFinsulation'| 'WP3PlyDFinsulation'| 'WP4PlyDFinsulation'
|'SRI1WPFlushDFinsulation'|'SRI2WPFlushDFinsulation'|'SRI3WPFlushDFinsulation'|'SRI4WPFlushDFinsulation'
|'AFS1LamWoodDFinsulation'|'AFS2LamWoodDFinsulation'|'Rt1LamWoodDFinsulation'|'Rt2LamWoodDFinsulation'
|'IF1SolidcoreFlushDFinsulation'|'IF2SolidcoreFlushDFinsulation'|'FM1SolidcoreFlushDFinsulation'|'FM2SolidcoreFlushDFinsulation'
|'RubbersealWPCDFinsulation'|'Rubbersea2WPCDFinsulation'|'Rubbersea3WPCDFinsulation'|'Rubbersea4WPCDFinsulation'
|'GI1GlassPanelDFinsulation'|'GI2GlassPanelDFinsulation'
//doorframe//
type DFType = 'WP1TeakDFinsulation'| 'WP2TeakDFinsulation'| 'WP3TeakDFinsulation'| 'FT1TeakDFinsulation'| 'FT2TeakDFinsulation'
//doorframe//
type PPaintType = 'SftInteriorPPaint'| 'SqmPPaint'| 'SftExteriorPPaint'| 'SqmExteriorPPaint'| 'SftWhitewashPPaint'| 'SqmWhitewashPPaint'
| 'SftEmulsionPPaint'| 'SqmEmulsionPPaint'| 'SftEnamelPPaint'| 'SqmEnamelPPaint'| 'SftTexturedPPaint'| 'SqmTexturedPPaint'




export type ResourceType = EngineerType| MasonType | HelperType | MachinaryType | BarBenderType | ConcreteType | SteelType | WoodFormworkType 
|MetalFormworkType | FillingType |FencingType |ShoringType |TermiteType|WaterType| ExcavationMachineType | ExcavationManualType| Redclayper1000Type | FlyAshper1000Type |CCBlockper1000Type |
 PlasterManualType|PlasterMachineType|SewerS40PVCType| SewerS80PVCType |CPVCType |PPRType |GIType |ElectricalType |MechanicalType|FirefightingType |PlumbingType
 |DFinsulationType|DFType | PPaintType

export type Strategy = 'FF' | 'SF' | 'FS' | 'SS'
export type TaskType = 'task' | 'project' | 'milestone'
export type ResourceUnits = 'Unit' |'Hour' | 'Day' | 'Week' | 'Month' | 'Contract' | 'Sft' | 'mm' | 'm' | 'Cum' | 'MT' | 'Kgs' | 'Ton' | 'Cft' | 'Sqm'
export type CurrencyUnits =
  | "USD" | "EUR" | "GBP" | "INR" | "JPY" | "CNY" | "AUD" | "CAD" | "CHF"
  | "SEK" | "NZD" | "ZAR" | "MXN" | "SGD" | "HKD" | "NOK" | "KRW" | "TRY"
  | "RUB" | "BRL" | "PLN" | "TWD" | "THB" | "MYR" | "IDR" | "DKK" | "HUF"
  | "CZK" | "ILS" | "CLP" | "PHP" | "AED" | "COP" | "SAR" | "RON" | "VND"
  | "PKR" | "EGP" | "NGN" | "BDT" | "ARS" | "KES" | "QAR" | "UAH" | "PEN"
  | "LKR" | "GHS" | "MMK" | "IRR" | "BHD" | "OMR" | "IQD" | "MAD" | "LYD"
  | "JOD" | "ALL" | "RSD" | "ISK" | "BGN" | "HRK" | "GEL" | "TND" | "AZN"
  | "UZS" | "KZT" | "AMD" | "BYN" | "MNT" | "LBP" | "SDG" | "SYP" | "YER";

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
  builtLength1: number,
  builtWidth1: number,
  builtLength2: number,
  builtWidth2: number,
  builtLength3: number,
  builtWidth3: number,
  builtupArea: number,
  builtupArea1: number,
  builtupArea2: number,
  builtupArea3: number,
  builtupPerimeter: number,
  
  livingLength: number,//xxxx room wise L&B  xxxxxxx//helps to calculate brickwork, flooring, paint and other materials as required
  livingWidth: number,
  livingArea: number,
  bedroom1Length: number,
  bedroom1Width: number,
  bedroom1Area: number,
  bedroom2Length: number,
  bedroom2Width: number,
  bedroom2Area: number,
  bedroom3Length: number,
  bedroom3Width: number,
  bedroom3Area: number,
  bedroom4Length: number,
  bedroom4Width: number,
  bedroom4Area: number,
  drawingLength: number,
  drawingWidth: number,
  drawingArea: number,
  kitchenLength: number,
  kitchenWidth: number,
  kitchenArea: number,
  poojaLength: number,
  poojaWidth: number,
  poojaArea: number,
  mediaLength: number,
  mediaWidth: number,
  mediaArea: number,
  bath1Length: number,
  bath1Width: number,
  bath1Area: number,
  bath2Length: number,
  bath2Width: number,
  bath2Area: number,
  bath3Length: number,
  bath3Width: number,
  bath3Area: number,
  bath4Length: number,
  bath4Width: number,
  bath4Area: number,
  toiletLength: number,
  toiletWidth: number,
  toiletArea: number,
  balconyLength: number,
  balconyWidth: number,
  balconyArea: number,
  sitoutLength: number,
  sitoutWidth: number,
  sitoutArea: number,
  storeLength: number,  
  storeWidth: number,
  storeArea: number,
  parkingLength: number,
  parkingWidth: number,
  parkingArea: number,
  staircaseLength: number,
  staircaseWidth: number,
  staircaseArea: number,
//xxxx room wise L&B  xxxxxxx//

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
