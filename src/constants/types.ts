type EngineerType =
  | "PerHourEngineer"
  | "DailyEngineer"
  | "WeeklyEngineer"
  | "MonthlyEngineer"
  | "ContractEngineer"
  | "PerSftEngineer"
  | "VisitEngineer";
type MasonType =
  | "DailyMason"
  | "WeeklyMason"
  | "MonthlyMason"
  | "ContractMason"
  | "PerSftMason"
  | "PerCumMason"
  | "PerHourMason"
  | "HourlyMason";
type HelperType =
  | "DailyHelper"
  | "WeeklyHelper"
  | "MonthlyHelper"
  | "ContractHelper"
  | "PerSftHelper"
  | "PerCumHelper"
  | "PerHourHelper"
  | "PerMTHelper"
  | "HourlyHelper";
type MachinaryType =
  | "DailyMachinery"
  | "DailyCompaction"
  | "WeeklyMachinery"
  | "MonthlyMachinery"
  | "ContractMachinery"
  | "PerSftMachinery"
  | "PerCumMachinery"
  | "PerMT"
  | "PerHourMachinery";
type BarBenderType =
  | "DailyBarbender"
  | "WeeklyBarbender"
  | "MonthlyBarbender"
  | "ContractBarbender"
  | "PerMTBarbender"
  | "PerCumBarbender";
type ConcreteType =
  | "sftM10pccConcrete"
  | "CumM10pccConcrete"
  | "CftM10pccConcrete"
  | "sftM15pccConcrete"
  | "CumM15pccConcrete"
  | "CftM15pccConcrete"
  | "sftM20Concrete"
  | "CumM20Concrete"
  | "CftM20Concrete"
  | "sftM20Concrete"
  | "CumM20Concrete"
  | "CftM20Concrete"
  | "sftM25Concrete"
  | "CumM25Concrete"
  | "CftM25Concrete"
  | "sftM30Concrete"
  | "CumM30Concrete"
  | "CftM30Concrete"
  | "sftM35Concrete"
  | "CumM35Concrete"
  | "CftM35Concrete"
  | "sftM40Concrete"
  | "CumM40Concrete"
  | "CftM40Concrete"
  | "sftM40Concrete"
  | "CumM45Concrete"
  | "CftM45Concrete";
type SteelType =
  | "SftDia6Steel"
  | "KgsDia6Steel"
  | "SftDia8Steel"
  | "KgsDia8Steel"
  | "SftDia10Steel"
  | "KgsDia10Steel"
  | "SftDia12Steel"
  | "KgsDia12Steel"
  | "SftDia14Steel"
  | "KgsDia14Steel"
  | "SftDia16Steel"
  | "KgsDia16Steel"
  | "SftDia18Steel"
  | "KgsDia18Steel"
  | "SftDia20Steel"
  | "KgsDia20Steel";

type WoodFormworkType =
  | "SftFootingWoodFormwork"
  | "CftFootingWoodFormwork"
  | "SqmFootingWoodFormwork"
  | "CumFootingWoodFormwork"
  | "SftPlinthWoodFormwork"
  | "CftPlinthWoodFormwork"
  | "SqmPlinthWoodFormwork"
  | "CumPlinthWoodFormwork"
  | "SftColumnWoodFormwork"
  | "CftColumnWoodFormwork"
  | "SqmColumnWoodFormwork"
  | "CumColumnWoodFormwork"
  | "SftBeamWoodFormwork"
  | "CftBeamWoodFormwork"
  | "SqmBeamWoodFormwork"
  | "CumBeamWoodFormwork"
  | "SftSlabWoodFormwork"
  | "CftSlabWoodFormwork"
  | "SqmSlabWoodFormwork"
  | "CumSlabWoodFormwork"
  | "SftStaircaseWoodFormwork"
  | "CftStaircaseWoodFormwork"
  | "SqmStaircaseWoodFormwork"
  | "CumStaircaseWoodFormwork"
  | "SftShearwallWoodFormwork"
  | "CftShearwallWoodFormwork"
  | "SqmShearwallWoodFormwork"
  | "CumShearwallWoodFormwork"
  | "SftFootingColumnWoodFormwork"
  | "CftFootingColumnWoodFormwork"
  | "SqmFootingColumnWoodFormwork"
  | "CumFootingColumnWoodFormwork"
  | "SftLintelWoodFormwork"
  | "CftLintelWoodFormwork"
  | "SqmLintelWoodFormwork"
  | "CumLintelWoodFormwork";

type MetalFormworkType =
  | "SftFootingMetalFormwork"
  | "CftFootingMetalFormwork"
  | "SqmFootingMetalFormwork"
  | "CumFootingMetalFormwork"
  | "SftPlinthMetalFormwork"
  | "CftPlinthMetalFormwork"
  | "SqmPlinthMetalFormwork"
  | "CumPlinthMetalFormwork"
  | "SftColumnMetalFormwork"
  | "CftColumnMetalFormwork"
  | "SqmColumnMetalFormwork"
  | "CumColumnMetalFormwork"
  | "SftBeamMetalFormwork"
  | "CftBeamMetalFormwork"
  | "SqmBeamMetalFormwork"
  | "CumBeamMetalFormwork"
  | "SftSlabMetalFormwork"
  | "CftSlabMetalFormwork"
  | "SqmSlabMetalFormwork"
  | "CumSlabMetalFormwork"
  | "SftStaircaseMetalFormwork"
  | "CftStaircaseMetalFormwork"
  | "SqmStaircaseMetalFormwork"
  | "CumStaircaseMetalFormwork"
  | "SftShearwallMetalFormwork"
  | "CftShearwallMetalFormwork"
  | "SqmShearwallMetalFormwork"
  | "CumShearwallMetalFormwork"
  | "SftFootingColumnMetalFormwork"
  | "CftFootingColumnMetalFormwork"
  | "SqmFootingColumnMetalFormwork"
  | "CumFootingColumnMetalFormwork"
  | "SftLintelMetalFormwork"
  | "CftLintelMetalFormwork"
  | "SqmLintelMetalFormwork"
  | "CumLintelMetalFormwork";

type FillingType = "CumSoilFilling" | "CumSandFilling" | "CumAggregateFilling" | "CumStoneFilling";
type FencingType = "SqmFencing" | "SftFencing";
type ShoringType = "SqmShoring" | "SftShoring";
type TermiteType = "SqmTermite" | "SftTermite";
type WaterType =
  | "SqmWater"
  | "SftWater"
  | "LtrWater"
  | "CumWater"
  | "ContractWater"
  | "HourlyWater"
  | "DailyWater"
  | "WeeklyWater";
type ExcavationMachineType =
  | "CumBackhoeExcavationMachine"
  | "SftBackhoeExcavationMachine"
  | "CftBackhoeExcavationMachine"
  | "HourlyBackhoeExcavationMachine"
  | "CumExcavatorExcavatonMachine"
  | "SftExcavatorExcavationMachine"
  | "CftExcavatorExcavationMachine"
  | "HourlyExcavatorExcavationMachine"
  | "CumSoftExcavatonMachine"
  | "SftSoftExcavationMachine"
  | "CftSoftExcavationMachine"
  | "HourlySoftExcavationMachine"
  | "CumMediumExcavatonMachine"
  | "SftMediumExcavationMachine"
  | "CftMediumExcavationMachine"
  | "HourlyMediumExcavationMachine"
  | "CumHardExcavatonMachine"
  | "SftHardExcavationMachine"
  | "CftHardExcavationMachine"
  | "HourlyHardExcavationMachine"
  | "CumFoundationExcavatonMachine"
  | "SftFoundationExcavationMachine"
  | "CftFoundationExcavationMachine"
  | "HourlyFoundationExcavationMachine"
  | "CumUtilitiesExcavatonMachine"
  | "SftUtilitiesExcavationMachine"
  | "CftUtilitiesExcavationMachine"
  | "HourlyUtilitiesExcavationMachine";

type ExcavationManualType =
  | "CumExcavationManual"
  | "SftExcavationManual"
  | "CftExcavationManual"
  | "ContractExcavationManual"
  | "HourlyExcavationManual"
  | "DailyExcavationManual";

//Brickwork//
type Redclayper1000Type =
  | "Cuminch6Redclayper1000"
  | "Sftinch6Redclayper1000"
  | "Cuminch9Redclayper1000"
  | "Sftinch9Redclayper1000"
  | "Cuminch12Redclayper1000"
  | "Sftinch12Redclayper1000"
  | "Cuminch16Redclayper1000"
  | "Sftinch16Redclayper1000";
type FlyAshper1000Type =
  | "Cuminch6FlyAshper1000"
  | "Sftinch6FlyAshper1000"
  | "Cuminch9FlyAshper1000"
  | "Sftinch9FlyAshper1000"
  | "Cuminch12FlyAshper1000"
  | "Sftinch12FlyAshper1000"
  | "Cuminch16FlyAshper1000"
  | "Sftinch16FlyAshper1000";
type CCBlockper1000Type =
  | "Cuminch6CCBlockper1000"
  | "Sftinch6CCBlockper1000"
  | "Cuminch9CCBlockper1000"
  | "Sftinch9CCBlockper1000"
  | "Cuminch12CCBlockper1000"
  | "Sftinch12CCBlockper1000"
  | "Cuminch16CCBlockper1000"
  | "Sftinch16CCBlockper1000";
//Brickwork//
//plaster//
type PlasterManualType =
  | "Cummm6PlasterManual"
  | "Sftmm6PlasterManual"
  | "Sqtmm6PlasterManual"
  | "Cummm8PlasterManual"
  | "Sftmm8PlasterManual"
  | "Sqtmm8PlasterManual"
  | "Cummm10PlasterManual"
  | "Sftmm10PlasterManual"
  | "Sqtmm10PlasterManual"
  | "Cummm12PlasterManual"
  | "Sftmm12PlasterManual"
  | "Sqtmm12PlasterManual"
  | "Cummm15PlasterManual"
  | "Sftmm15PlasterManual"
  | "Sqtmm15PlasterManual"
  | "Cummm20PlasterManual"
  | "Sftmm20PlasterManual"
  | "Sqtmm20PlasterManual";
type PlasterMachineType =
  | "Cummm6PlasterMachine"
  | "Sftmm6PlasterMachine"
  | "Sqtmm6PlasterMachine"
  | "Cummm8PlasterMachine"
  | "Sftmm8PlasterMachine"
  | "Sqtmm8PlasterMachinePlasterMachine"
  | "Cummm10PlasterMachinePlasterMachine"
  | "Sftmm10PlasterMachine"
  | "Sqtmm10PlasterMachine"
  | "Cummm12PlasterMachine"
  | "Sftmm12PlasterMachine"
  | "Sqtmm12PlasterMachine"
  | "Cummm15PlasterMachine"
  | "Sftmm15PlasterMachine"
  | "Sqtmm15PlasterMachine"
  | "Cummm20PlasterMachine"
  | "Sftmm20PlasterMachine"
  | "Sqtmm20PlasterMachine";
//plaster//
type SewerS40PVCType =
  | "ftmm12SewerS40PVC"
  | "mmm12SewerS40PVC"
  | "ftmm25SewerS40PVC"
  | "mmm25SewerS40PVC"
  | "ftmm50SewerS40PVC"
  | "mmm50SewerS40PVC"
  | "ftmm100SewerS40PVC"
  | "mmm100SewerS40PVC"
  | "ftmm150SewerS40PVC"
  | "mmm150SewerS40PVC"
  | "ftmm200SewerS40PVC"
  | "mmm200SewerS40PVC";
type SewerS80PVCType =
  | "ftmm12SewerS80PVC"
  | "mmm12SewerS80PVC"
  | "ftmm25SewerS80PVC"
  | "mmm25SewerS80PVC"
  | "ftmm50SewerS80PVC"
  | "mmm50SewerS80PVC"
  | "ftmm100SewerS80PVC"
  | "mmm100SewerS80PVC"
  | "ftmm150SewerS80PVC"
  | "mmm150SewerS80PVC"
  | "ftmm200SewerS80PVC"
  | "mmm200SewerS80PVC";
//MEP//
type CPVCType = "ftmm15CPVC" | "ftmm20CPVC" | "ftmm32CPVC";
type PPRType = "ftmm20PPR" | "ftmm25PPR" | "ftmm40PPR";
type GIType = "ftmm15GI" | "ftmm20GI" | "ftmm40GI";
type ElecType =
  | "SftPVCElec"
  | "mPVCElec"
  | "UnitJunctionBoxElec"
  | "mJunctionBoxElec"
  | "SftJunctionBoxElec"
  | "UnitPullwiresconduitsElec"
  | "mPullwiresconduitsElec"
  | "SftPullwiresconduitsElec"
  | "mLightFixturesElec"
  | "UnitLightFixturesElec"
  | "SftLightFixturesElec";
type MechType =
  | "SftHangersMech"
  | "mHangersMech"
  | "ALDuctperSqmMech"
  | "SSDuctperSqmMech"
  | "GIDuctperSqmMech"
  | "FabGIDuctperSqmMech"
  | "FabGIDuctperSqmMech"
  | "UnitAirCMech";
type FFType =
  | "SftSprinklerpipesFF"
  | "mSprinklerpipesFF"
  | "mFirehosereelconduitFF"
  | "SftFirehosereelconduitFF"
  | "SftHangerssprinklerFF"
  | "mHangerssprinklerFF"
  | "UnitsprinklerFF";
type PlumbType =
  | "SftCPVCPlumb"
  | "mCPVCPlumb"
  | "mDrainagepipespvcPlumb"
  | "SftDrainagepipespvcPlumb"
  | "JaguarTapsPlumb"
  | "KohlerTapsPlumb"
  | "CeraTapsPlumb"
  | "RegTapsPlumb"
  | "LocalTapsPlumb";
//doorframe Insulation//
type DFinsulationType =
  | "WP1TeakDFinsulation"
  | "WP2TeakDFinsulation"
  | "WP3TeakDFinsulation"
  | "FT1TeakDFinsulation"
  | "FT2TeakDFinsulation"
  | "FT1PlyDFinsulation"
  | "FT2PlyDFinsulation"
  | "AS1PlyDFinsulation"
  | "AS2PlyDFinsulation"
  | "WP1PlyDFinsulation"
  | "WP2PlyDFinsulation"
  | "WP3PlyDFinsulation"
  | "WP4PlyDFinsulation"
  | "SRI1WPFlushDFinsulation"
  | "SRI2WPFlushDFinsulation"
  | "SRI3WPFlushDFinsulation"
  | "SRI4WPFlushDFinsulation"
  | "AFS1LamWoodDFinsulation"
  | "AFS2LamWoodDFinsulation"
  | "Rt1LamWoodDFinsulation"
  | "Rt2LamWoodDFinsulation"
  | "IF1SolidcoreFlushDFinsulation"
  | "IF2SolidcoreFlushDFinsulation"
  | "FM1SolidcoreFlushDFinsulation"
  | "FM2SolidcoreFlushDFinsulation"
  | "RubbersealWPCDFinsulation"
  | "Rubbersea2WPCDFinsulation"
  | "Rubbersea3WPCDFinsulation"
  | "Rubbersea4WPCDFinsulation"
  | "GI1GlassPanelDFinsulation"
  | "GI2GlassPanelDFinsulation";
//doorframe//
type DFType =
  | "TW1TeakperftDF"
  | "TW2TeakperftDF"
  | "TW3TeakperftDF"
  | "TW4TeakperftDF"
  | "TW5TeakperftDF"
  | "HW1GraniteperftDF"
  | "HW2GraniteperftDF"
  | "HW3GraniteperftDF"
  | "GRN1GraniteperftDF"
  | "GRN2GraniteperftDF"
  | "GRN3GraniteperftDF"
  | "WPC1WPCperftDF"
  | "WPC2WPCperftDF"
  | "WPC3WPCperftDF"
  | "WPC4WPCperftDF";
//doorframe//

type PPaintType =
  | "SftInteriorPPaint"
  | "SqmPPaint"
  | "SftExteriorPPaint"
  | "SqmExteriorPPaint"
  | "SftWhitewashPPaint"
  | "SqmWhitewashPPaint"
  | "SftEmulsionPPaint"
  | "SqmEmulsionPPaint"
  | "SftEnamelPPaint"
  | "SqmEnamelPPaint"
  | "SftTexturedPPaint"
  | "SqmTexturedPPaint";

type WPType =
  | "SftCementWP"
  | "SqmCementWP"
  | "SftLiquidWP"
  | "SqmLiquidWP"
  | "SqmBituminWP"
  | "SftBituminWP"
  | "SqmPolyurthWP"
  | "SftPolyurthWP"
  | "SqmEPDMembrWP"
  | "SftEPDMembrWP"
  | "SqmCrystalWP"
  | "SftCrystalWP"
  | "SqmInjectgroutWP"
  | "SftInjectgroutWP"
  | "SqmHybridWP"
  | "SftHybridWP"
  | "SqmSelfAdWPWP"
  | "SftSelfAdWPWP"
  | "SqmNanoCoatWP"
  | "SftNanoCoatWPWP";

type FloorType =
  | "SftCeramicFloor"
  | "SqmCeramicFloor"
  | "SftVitrifiedFloor"
  | "SqmVitrifiedFloor"
  | "SftPorcelainFloor"
  | "SqmPorcelainFloor"
  | "SftMarbleFloor"
  | "SqmMarbleFloor"
  | "SftGraniteFloor"
  | "SqmGraniteFloor"
  | "SftKotaFloor"
  | "SqmKotaFloor"
  | "SftQuartzFloor"
  | "SqmQuartzFloor"
  | "SftWoodenFloor"
  | "SqmWoodenFloor"
  | "SftVinlyFloor"
  | "SqmVinlyFloor"
  | "SftTerracottaFloor"
  | "SqmTerracottaFloor";

type IBTType =
  | "UnitDesignIBT"
  | "BusinessDesignIBT"
  | "UnitEstimateIBT"
  | "BusinessEstimateIBT"
  | "UnitCityapprIBT"
  | "BusinessCityapprIBT";

type DoorType =
  | "SftUPVCSlidDoor"
  | "UnitUPVCSlidDoor"
  | "SftUPVCfixDoor"
  | "UnitUPVCfixDoor"
  | "SftAlumDoor"
  | "UnitAlumDoor"
  | "SftMetalDoor"
  | "UnitMetalDoor"
  | "SftTeakWoodDoor"
  | "UnitTeakWoodDoor"
  | "SftDecorDoor"
  | "UnitDecorDoor"
  | "SftWProofDoor"
  | "UnitWProofDoor"
  | "SftSolidwdDoor"
  | "UnitSolidwdDoor"
  | "SftPanelwdDoor"
  | "UnitPanelwdDoor"
  | "SftFlushwdDoor"
  | "UnitFlushwdDoor"
  | "SftGlassDoor"
  | "UnitGlassDoor";

type LitCfixType =
  | "Unit1RecsedLitCfix"
  | "Unit2RecsedLitCfix"
  | "Unit3RecsedLitCfix"
  | "Unit4RecsedLitCfix"
  | "Unit1PendtLitCfix"
  | "Unit2PendtLitCfix"
  | "Unit3PendtLitCfix"
  | "Unit4PendtLitCfix"
  | "Unit5PendtLitCfix"
  | "Unit6PendtLitCfix"
  | "Unit1FlushLitCfix"
  | "Unit2PFlusLitCfix"
  | "Unit3PFlushLitCfix";

type LitWfixType =
  | "Unit1WallLitWfix"
  | "Unit2WallLitWfix"
  | "Unit3WallLitWfix"
  | "Unit4WallLitWfix"
  | "Unit5WallLitWfix"
  | "Unit6WallLitWfix"
  | "Unit1LEDWPLitWfix"
  | "Unit2LEDWPLitWfix"
  | "Unit3LEDWPLitWfix"
  | "Unit4LEDWPLitWfix"
  | "Unit5LEDWPLitWfix"
  | "Unit6LEDWPLitWfix";

type FCeilingType =
  | "Sqm1GypFCeiling"
  | "Sqm2GypFCeiling"
  | "Sqm3GypFCeiling"
  | "Sqm4GypFCeiling"
  | "Sqm5GypFCeiling"
  | "Sqm1PVCFCeiling"
  | "Sqm2PVCFCeiling"
  | "Sqm3PVCFCeiling"
  | "Sqm4PVCFCeiling"
  | "Sqm5PVCFCeiling"
  | "Sqm1WoodFCeiling"
  | "Sqm2WoodFCeiling"
  | "Sqm3WoodFCeiling"
  | "Sqm4WoodFCeiling"
  | "Sqm5WoodFCeiling"
  | "Sqm1GlassFCeiling"
  | "Sqm2GlassFCeiling"
  | "Sqm3GlassFCeiling"
  | "Sqm4GlassFCeiling"
  | "Sqm5GlassFCeiling";

type KCtop40sftType =
  | "Sft1GraniteKCtop20sft"
  | "Sft2GraniteKCtop20sft"
  | "Sft3GraniteKCtop20sft"
  | "Sft4GraniteKCtop20sft"
  | "Sft5GraniteKCtop20sft" //kitchen countertop
  | "Sft1QuartzKCtop20sft"
  | "Sft2QuartzKCtop20sft"
  | "Sft3QuartzKCtop20sft"
  | "Sft4QuartzKCtop20sft"
  | "Sft5QuartzKCtop20sft"
  | "Sft1CorianKCtop20sft"
  | "Sft2CorianKCtop20sft"
  | "Sft3CorianKCtop20sft"
  | "Sft4CorianKCtop20sft"
  | "Sft5CorianKCtop20sft"
  | "Sft1CCKCtop20sft"
  | "Sft2CCKCtop20sft"
  | "Sft3CCKCtop20sft"
  | "Sft4CCKCtop20sft"
  | "Sft5CCKCtop20sft"
  | "Sft1GraniteKCtop40sft"
  | "Sft2GraniteKCtop40sft"
  | "Sft3GraniteKCtop40sft"
  | "Sft4GraniteKCtop40sft"
  | "Sft5GraniteKCtop40sft"
  | "Sft1QuartzKCtop40sft"
  | "Sft2QuartzKCtop40sft"
  | "Sft3QuartzKCtop40sft"
  | "Sft4QuartzKCtop40sft"
  | "Sft5QuartzKCtop40sft"
  | "Sft1CorianKCtop40sft"
  | "Sft2CorianKCtop40sft"
  | "Sft3CorianKCtop40sft"
  | "Sft4CorianKCtop40sft"
  | "Sft5CorianKCtop40sft"
  | "Sft1CCKCtop40sft"
  | "Sft2CCKCtop40sft"
  | "Sft3CCKCtop40sft"
  | "Sft4CCKCtop40sft"
  | "Sft5CCKCtop40sft"
  | "Sft1GraniteKCtop60sft"
  | "Sft2GraniteKCtop60sft"
  | "Sft3GraniteKCtop60sft"
  | "Sft4GraniteKCtop60sft"
  | "Sft5GraniteKCtop60sft"
  | "Sft1QuartzKCtop60sft"
  | "Sft2QuartzKCtop60sft"
  | "Sft3QuartzKCtop60sft"
  | "Sft4QuartzKCtop60sft"
  | "Sft5QuartzKCtop60sft"
  | "Sft1CorianKCtop60sft"
  | "Sft2CorianKCtop60sft"
  | "Sft3CorianKCtop60sft"
  | "Sft4CorianKCtop60sft"
  | "Sft5CorianKCtop60sft"
  | "Sft1CCKCtop60sft"
  | "Sft2CCKCtop60sft"
  | "Sft3CCKCtop60sft"
  | "Sft4CCKCtop60sft"
  | "Sft5CCKCtop60sft";

type CabinetType =
  | "Sft1PlyWCabinet"
  | "Sft2PlyWCabinet"
  | "Sft3PlyWCabinet"
  | "Sft4PlyWCabinet"
  | "Sft5PlyWCabinet"
  | "Sqm1PlyWCabinet"
  | "Sqm2PlyWCabinet"
  | "Sqm3PlyWCabinet"
  | "Sqm4PlyWCabinet"
  | "Sqm5PlyWCabinet"
  | "Sft1HardWCabinet"
  | "Sft2HardWCabinet"
  | "Sft3HardWCabinet"
  | "Sft4HardWCabinet"
  | "Sft5HardWCabinet"
  | "Sqm1HardWCabinet"
  | "Sqm2HardWCabinet"
  | "Sqm3HardWCabinet"
  | "Sqm4HardWCabinet"
  | "Sqm5HardWCabinet"
  | "Sft1MetalCabinet"
  | "Sft2MetalCabinet"
  | "Sft3MetalCabinet"
  | "Sft4MetalCabinet"
  | "Sft5MetalCabinet"
  | "Sqm1MetalCabinet"
  | "Sqm2MetalCabinet"
  | "Sqm3MetalCabinet"
  | "Sqm4MetalCabinet"
  | "Sqm5MetalCabinet";

type FurnishType =
  | "Sqm1FurniFurnish"
  | "Sqm2FurniFurnish"
  | "Sqm3FurniFurnish"
  | "Sqm4FurniFurnish"
  | "Sqm5FurniFurnish";

type ExhaustType = "Unit1KitchenExhaust" | "Unit2KitchenExhaust" | "Unit3KitchenExhaust" | "Unit4KitchenExhaust";

type FinalType = "OthFFixFinal";
type ContingType = "SnagClearConting";

//xxx//
export type ResourceType =
  | EngineerType
  | MasonType
  | HelperType
  | MachinaryType
  | BarBenderType
  | ConcreteType
  | SteelType
  | WoodFormworkType
  | MetalFormworkType
  | FillingType
  | FencingType
  | ShoringType
  | TermiteType
  | WaterType
  | ExcavationMachineType
  | ExcavationManualType
  | Redclayper1000Type
  | FlyAshper1000Type
  | CCBlockper1000Type
  | PlasterManualType
  | PlasterMachineType
  | SewerS40PVCType
  | SewerS80PVCType
  | CPVCType
  | PPRType
  | GIType
  | ElecType
  | MechType
  | FFType
  | PlumbType
  | DFinsulationType
  | DFType
  | PPaintType
  | WPType
  | FloorType
  | IBTType
  | DoorType
  | LitCfixType
  | LitWfixType
  | FCeilingType
  | KCtop40sftType
  | CabinetType
  | ExhaustType
  | FinalType
  | ContingType
  | FurnishType;

export type Strategy = "FF" | "SF" | "FS" | "SS";
export type TaskType = "task" | "project" | "milestone";
export type ResourceUnits =
  | "Unit"
  | "Hour"
  | "Day"
  | "Week"
  | "Month"
  | "Contract"
  | "Sft"
  | "mm"
  | "m"
  | "Cum"
  | "MT"
  | "Kgs"
  | "Ton"
  | "Cft"
  | "Sqm";
export type CurrencyUnits =
  | "USD"
  | "EUR"
  | "GBP"
  | "INR"
  | "JPY"
  | "CNY"
  | "AUD"
  | "CAD"
  | "CHF"
  | "SEK"
  | "NZD"
  | "ZAR"
  | "MXN"
  | "SGD"
  | "HKD"
  | "NOK"
  | "KRW"
  | "TRY"
  | "RUB"
  | "BRL"
  | "PLN"
  | "TWD"
  | "THB"
  | "MYR"
  | "IDR"
  | "DKK"
  | "HUF"
  | "CZK"
  | "ILS"
  | "CLP"
  | "PHP"
  | "AED"
  | "COP"
  | "SAR"
  | "RON"
  | "VND"
  | "PKR"
  | "EGP"
  | "NGN"
  | "BDT"
  | "ARS"
  | "KES"
  | "QAR"
  | "UAH"
  | "PEN"
  | "LKR"
  | "GHS"
  | "MMK"
  | "IRR"
  | "BHD"
  | "OMR"
  | "IQD"
  | "MAD"
  | "LYD"
  | "JOD"
  | "ALL"
  | "RSD"
  | "ISK"
  | "BGN"
  | "HRK"
  | "GEL"
  | "TND"
  | "AZN"
  | "UZS"
  | "KZT"
  | "AMD"
  | "BYN"
  | "MNT"
  | "LBP"
  | "SDG"
  | "SYP"
  | "YER";

export type Task = {
  children: any;
  id: string;
  name: string;
  start: string;
  end: string;
  duration: number;
  cost: number;
  numbersRequired?: number;
  strategy: Strategy;
  dependencies: Array<string>;
  type: TaskType;
  progress: number;
  hideChildren: boolean;
  parent?: string;
  resources?: Array<Resource>;
};

export type Resource = {
  id: string;
  type?: string;
  resource: ResourceType;
  description: string;
  rate: number;
  length?: number;
  breadth?: number;
  thickness?: number;
  diameter?: number;
  area?: number;
  perimeter?: number;
  noOfBars?: number;
  numbersRequired?: number;
  required?: boolean;
  quantity: number;
  units: ResourceUnits;
  totalCost: number;
};

// export type DrawingData = {
//   currentUnits:"imperial"|"SI"
//   plotLength: number,
//   plotWidth: number,
//   plotArea: number,
//   plotPerimeter: number,
//   builtLength: number,
//   builtWidth: number,
//   builtupLength:number,
//   builtupWidth:number
//   builtLength1: number,
//   builtWidth1: number,
//   builtLength2: number,
//   builtWidth2: number,
//   builtLength3: number,
//   builtWidth3: number,
//   builtupArea: number,
//   builtupArea1: number,
//   builtupArea2: number,
//   builtupArea3: number,
//   builtupPerimeter: number,

//   groundHeight: number,     //Room height //Each floor height //For brickwork, plaster / paint /wall tiles
//   level1Height: number,
//   level2Height: number,
//   level3Height: number,

//   livingLength: number,     //xxxx room wise L&B  xxxxxxx//helps to calculate brickwork, flooring, paint and other materials as required
//   livingWidth: number,
//   livingArea: number,
//   bedroom1Length: number,
//   bedroom1Width: number,
//   bedroom1Area: number,
//   bedroom2Length: number,
//   bedroom2Width: number,
//   bedroom2Area: number,
//   bedroom3Length: number,
//   bedroom3Width: number,
//   bedroom3Area: number,
//   bedroom4Length: number,
//   bedroom4Width: number,
//   bedroom4Area: number,
//   drawingLength: number,
//   drawingWidth: number,
//   drawingArea: number,
//   kitchenLength: number,
//   kitchenWidth: number,
//   kitchenArea: number,
//   poojaLength: number,
//   poojaWidth: number,
//   poojaArea: number,
//   mediaLength: number,
//   mediaWidth: number,
//   mediaArea: number,
//   bath1Length: number,
//   bath1Width: number,
//   bath1Area: number,
//   bath2Length: number,
//   bath2Width: number,
//   bath2Area: number,
//   bath3Length: number,
//   bath3Width: number,
//   bath3Area: number,
//   bath4Length: number,
//   bath4Width: number,
//   bath4Area: number,
//   toiletLength: number,
//   toiletWidth: number,
//   toiletArea: number,
//   balconyLength: number,
//   balconyWidth: number,
//   balconyArea: number,
//   sitoutLength: number,
//   sitoutWidth: number,
//   sitoutArea: number,
//   storeLength: number,
//   storeWidth: number,
//   storeArea: number,
//   parkingLength: number,
//   parkingWidth: number,
//   parkingArea: number,
//   staircaseLength: number,
//   staircaseWidth: number,
//   staircaseArea: number,
// //xxxx room wise L&B  xxxxxxx//
//     //xxx//           //Door Frames
//     df1Length: number,
//     df1Width: number,
//     df1Area: number,

//     wf1Length: number,  //Window Frames
//     wf1Width: number,
//     wf1Area: number,
//     ///xxxx//
//     df2Length: number,
//     df2Width: number,
//     df21Area: number,

//     wf21Length: number,
//     wf2Width: number,
//     wf2Area: number,
//     ///xxxx//
//     df3Length: number,
//     df3Width: number,
//     df31Area: number,

//     wf31Length: number,
//     wf3Width: number,
//     wf3Area: number,
//     ///xxxx//
// //xxx//
// door1Length: number,  //Door
// door1Width: number,
// door1Area: number,

// window1Length: number,
// window1Width: number,
// window1Area: number,
// ///xxxx//
// door2Length: number,
// door2Width: number,
// door21Area: number,

// window21Length: number,
// window2Width: number,
// window2Area: number,
// ///xxxx//
// door3Length: number,
// door3Width: number,
// door31Area: number,

// window31Length: number,
// window3Width: number,
// window3Area: number,
// ///xxxx//

//   excavationArea: number,
//   excavationDepth: number,
//   slabThickness:number
//   groundFloorArea: number,
//   firstFloorArea: number,
//   secondFloorArea: number,
//   thirdFloorArea: number,
//   fourthFloorArea: number,
//   groundFloorWalls: [ { length: number, thickness: number } ],
//   firstFloorWalls: [ { length: number, thickness: number } ],
//   secondFloorWalls: [ { length: number, thickness: number } ],
//   thirdFloorWalls: [ { length: number, thickness: number } ],
//   fourthFloorWalls: [ { length: number, thickness: number } ],
// }

export type roomType = {
  name: string;
  length: number;
  width: number;
  area: number;
  leftWallLength?: number;
  rightWallLength?: number;
  frontWallLength?: number;
  backWallLength?: number;

  leftWallThickness?: number;
  rightWallThickness?: number;
  frontWallThickness?: number;
  backWallThickness?: number;

  leftWallHeight?: number;
  rightWallHeight?: number;
  frontWallHeight?: number;
  backWallHeight?: number;
};
export type DrawingData = {
  innerWallThickness: number;
  excavationDepth: number;
  floorHeight: number;
  plotLength: number;
  plotWidth: number;
  plotArea: number;
  builtupLength: number;
  builtupWidth: number;
  builtupArea: number;
  groundFloor?: {
    length: number;
    width: number;
    area: number;
    rooms?: [];
  };
  firstFloor?: {
    length: number;
    width: number;
    area: number;
    rooms: Array<roomType>;
  };
  secondFloor?: {
    length: number;
    width: number;
    area: number;
    rooms: Array<roomType>;
  };
  thirdFloor?: {
    length: number;
    width: number;
    area: number;
    rooms: Array<roomType>;
  };
  fourthFloor?: {
    length: number;
    width: number;
    area: number;
    rooms: Array<roomType>;
  };
  fifthFloor?: {
    length: number;
    width: number;
    area: number;
    rooms: Array<roomType>;
  };
};
