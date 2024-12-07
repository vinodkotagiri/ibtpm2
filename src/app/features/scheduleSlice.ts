import { createSlice } from "@reduxjs/toolkit";
import schedule from "../../constants/schedule";
import { calculateTotalResourceCost, getCurrencySymbol, updateTaskDates } from "../../helpers/calculations";
import { CurrencyUnits, DrawingData, Task } from "../../constants/types";
import getResources from "../../constants/resourcesXXX";
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
    plotLength: 12,
    plotWidth: 12,
    plotArea: 144,
    plotPerimeter: 0,
    builtLength: 8,
    builtWidth: 10,
    builtupArea: 0,
    builtLength1: 6,
    builtWidth1: 9,
    builtupArea1: 0,
    builtLength2: 5,
    builtWidth2: 8,
    builtupArea2: 0,
    builtLength3: 5,
    builtWidth3: 8,
    builtupArea3: 0,
    slabThickness:0.15,    
    builtupPerimeter: 0,
    //xxxx room wise L&B  xxxxxxx//helps to calculate brickwork, flooring, paint and other materials as required
    livingLength: 12,
    livingWidth: 9,
    livingArea: 0,
    bedroom1Length: 0,
    bedroom1Width: 0,
    bedroom1Area: 0,
    bedroom2Length: 0,
    bedroom2Width: 0,
    bedroom2Area: 0,
    bedroom3Length: 0,
    bedroom3Width: 0,
    bedroom3Area: 0,
    bedroom4Length: 0,
    bedroom4Width: 0,
    bedroom4Area: 0,
    drawingLength: 0,
    drawingWidth: 0,
    drawingArea: 0,
    kitchenLength: 0,
    kitchenWidth: 0,
    kitchenArea: 0,
    poojaLength: 0,
    poojaWidth: 0,
    poojaArea: 0,
    mediaLength: 0,
    mediaWidth: 0,
    mediaArea: 0,
    bath1Length: 0,
    bath1Width: 0,
    bath1Area: 0,
    bath2Length: 0,
    bath2Width: 0,
    bath2Area: 0,
    bath3Length: 0,
    bath3Width: 0,
    bath3Area: 0,
    bath4Length: 0,
    bath4Width: 0,
    bath4Area: 0,
    toiletLength: 0,
    toiletWidth: 0,
    toiletArea: 0,
    balconyLength: 0,
    balconyWidth: 0,
    balconyArea: 0,
    sitoutLength: 0,
    sitoutWidth: 0,
    sitoutArea: 0,
    storeLength: 0,  
    storeWidth: 0,
    storeArea: 0,
    parkingLength: 0,
    parkingWidth: 0,
    parkingArea: 0,
    staircaseLength: 0,
    staircaseWidth: 0,
    staircaseArea: 0,
  //xxxx room wise L&B  xxxxxxx//
    //xxx//
df1Length: 0,  
df1Width: 0,
df1Area: 0,

wf1Length: 0,  
wf1Width: 0,
wf1Area: 0,
///xxxx//
df2Length: 0,  
df2Width: 0,
df21Area: 0,

wf21Length: 0,  
wf2Width: 0,
wf2Area: 0,
///xxxx//
df3Length: 0,  
df3Width: 0,
df31Area: 0,

wf31Length: 0,  
wf3Width: 0,
wf3Area: 0,
///xxxx//
  //xxx//
door1Length: 0,  
door1Width: 0,
door1Area: 0,

window1Length: 0,  
window1Width: 0,
window1Area: 0,
///xxxx//
door2Length: 0,  
door2Width: 0,
door21Area: 0,

window21Length: 0,  
window2Width: 0,
window2Area: 0,
///xxxx//
door3Length: 0,  
door3Width: 0,
door31Area: 0,

window31Length: 0,  
window3Width: 0,
window3Area: 0,
///xxxx//
    excavationArea: 0,
    excavationDepth:0,
    groundFloorArea:0,
    firstFloorArea: 0,
    secondFloorArea:0,
    thirdFloorArea:0,
    fourthFloorArea:0,
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
      const {drawingData}=action.payload
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
      const {id,field,value,type}=action.payload
      state.tasks=state.tasks.map(task=>{
        if(task.id===id&&type=='project'){
          task[field]=value
        }
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
    },
    updateTasksDuration(state,action){
      const {id,duration}=action.payload
      state.tasks=state.tasks.map(task=>{
        if(task.id===id){
          task.duration=duration
        }
        return task
      })
      state.tasks=updateTaskDates(state.tasks,true)
      state.tasks=calculateTotalResourceCost(state.tasks)
    }
  }
} )

export const {updateTasksDuration,updateTaskStartDate,addNewTask,setCurrency,updateAllResources,updateDrawingData,setUnits,updateTaskField} = scheduleSlice.actions
export default scheduleSlice.reducer