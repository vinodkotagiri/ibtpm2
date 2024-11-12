import { createSlice } from "@reduxjs/toolkit";
import schedule from "../../constants/schedule";
import { calculateTotalResourceCost, getCurrencySymbol, updateTaskDates } from "../../helpers/calculations";
import { CurrencyUnits, DrawingData, Task } from "../../constants/types";
import getResources from "../../constants/resources";
import convertUnits from "../../helpers/converisons";

interface ScheduleState {
  tasks:Task[],
  currency:CurrencyUnits
  currencyCode:string
  drawingData:DrawingData
  units:'imperial'|'SI'
}
const initialState: ScheduleState = {
  tasks:[...schedule],
  currency:'INR',
  currencyCode:getCurrencySymbol('INR'),
  drawingData: {
    currentUnits:'imperial',
    plotLength: 30,
    plotWidth: 40,
    plotArea: 1200,
    plotPerimeter: 10,
    builtLength: 25,
    builtWidth: 32,
    builtupArea: 700,
    slabThickness:0.15,
    builtupPerimeter: 50,
    excavationArea: 1000,
    excavationDepth:30,
    groundFloorArea: 30,
    firstFloorArea: 30,
    secondFloorArea:30,
    thirdFloorArea:30,
    fourthFloorArea:30,
    groundFloorWalls:[{length:0, thickness:0}],
    firstFloorWalls:[{length:0, thickness:0}],
    secondFloorWalls:[{length:0, thickness:0}],
    thirdFloorWalls:[{length:0, thickness:0}],
    fourthFloorWalls:[{length:0, thickness:0}],
  },
  units:'imperial'
}
const scheduleSlice = createSlice( {
  initialState,
  name: "schedule",
  reducers: {
    updateTaskStartDate ( state, action ) {
      const { id, newDate } = action.payload
      state.tasks=state.tasks.map((task)=>{
        if(task.id===id){
          task.start=newDate
        }
        return task
      })
     // Recalculate the entire task schedule based on updated start date)
     state.tasks = updateTaskDates(state.tasks);
     state.tasks=calculateTotalResourceCost(state.tasks)
    },
    addNewTask(state, action) {
      const {newTask,index} = action.payload
      state.tasks.splice(index,0,newTask)
    },
    setCurrency(state,action){
      state.currency=action.payload
      state.currencyCode=getCurrencySymbol(action.payload)
    },
    updateAllResources(state){
      state.tasks=state.tasks.map(task=>{
        if(task.resources?.length){
          task.resources=getResources(task.id,state.drawingData,task.resources)
        }else{
          task.resources=getResources(task.id,state.drawingData)
        }
        return task
      })
      state.tasks=calculateTotalResourceCost(state.tasks)
    },
    updateDrawingData(state,action){ 
      let {drawingData}=action.payload
      state.drawingData=drawingData
       state.tasks=state.tasks.map(task=>{
        if(task.resources?.length){
          task.resources=getResources(task.id,state.drawingData,task.resources)
        }else{
          task.resources=getResources(task.id,state.drawingData)
        }
        return task
      })
      state.tasks=calculateTotalResourceCost(state.tasks)
    },
    setUnits(state,action){
      state.units=action.payload
      updateDrawingData({drawingData:state.drawingData})
    },
    updateTaskField(state,action){
      const {id,field,value}=action.payload
      state.tasks=state.tasks.map(task=>{
        if(task?.resources?.length){
          task.resources=task.resources.map(resource=>{
            if(resource.id===id){
              resource[field]=value
            }
            return resource
          })
        }
        return task
      })
      state.tasks=state.tasks.map(task=>{
        if(task.resources?.length){
          task.resources=getResources(task.id,state.drawingData,task.resources)
        }else{
          task.resources=getResources(task.id,state.drawingData)
        }
        return task
      })
      state.tasks=calculateTotalResourceCost(state.tasks)
    }
  }
} )

export const {updateTaskStartDate,addNewTask,setCurrency,updateAllResources,updateDrawingData,setUnits,updateTaskField} = scheduleSlice.actions
export default scheduleSlice.reducer