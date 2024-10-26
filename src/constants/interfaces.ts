import { CurrencyUnits, ResourceUnits } from "./scheduleTypes"

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
}

export type Estimate{
  id:string
  name:string
  resource:string
  qty:number
  resourceUnits:ResourceUnits
  unitCost:number
  totalCost:number
  currency:CurrencyUnits
}

export type Strategy='FF'|'SF'|'FS'|'SS'
export type TaskType='task'|'project'|'milestone'

