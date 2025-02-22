import { createSlice } from "@reduxjs/toolkit";
import schedule from "../../constants/schedule";
import { calculateTotalResourceCost, getCurrencySymbol, updateProjectProgress, updateTaskDates } from "../../helpers/calculations";
import { CurrencyUnits, DrawingData, Task } from "../../constants/types";
import getResources from "../../constants/resources";
import { updateTasksFromDrawingData } from "../../helpers/updateTasksFromDrawingData";

interface ScheduleState {
  tasks:Task[],
  totalTasks:number
  totalBudget:number
  currency:CurrencyUnits
  currencyCode:string
  drawingData:DrawingData
  units:'imperial'|'SI',
  chartsData:Object
}
const initialState: ScheduleState = {
  tasks:[...schedule],
  totalTasks:0,
  totalBudget:0,
  currency:'INR',
  currencyCode:getCurrencySymbol('INR'),
  drawingData:
    {
      innerWallThickness: 0,
      floorHeight: 0,
      plotLength: 0,
      plotWidth: 0,
      plotArea: 0,
      excavationDepth:0,
      builtupLength: 0,
      builtupWidth: 0,
      builtupArea: 0,
      groundFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      firstFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      secondFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      thirdFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      fourthFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      fifthFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      }
  },
  units:'imperial',
  chartsData:{
    totalTasks:0,
    completed:0,
    totalBudget:0,
    totalEstimate:0,
  },
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
      const drawingData=state.drawingData
      state.tasks=updateTasksFromDrawingData(state.tasks,drawingData)
      state.tasks=calculateTotalResourceCost(state.tasks)
      state.totalTasks=state.tasks.filter(task=>task.type=='task').length
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
  // In scheduleSlice reducers:
updateTaskField(state, action) {
  const {id, field, value, type} = action.payload;
  
  if (field === 'batchUpdate') {
    // Handle structural element batch updates
    state.tasks = state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          selectedElementId: value.selectedElementId,
          elementCost: value.elementCost,
          dimensions: value.dimensions,
          elementType: value.elementType,
          rate: value.rate,
          totalCost: value.elementCost,
          ...(task.id.startsWith('F0') && { selectedName: value.selectedName })
        };
      }
      // Update parent costs
      if (task.children?.some(child => child.id === id)) {
        const childrenCosts = task.children.reduce((sum, child) => 
          sum + (child.elementCost || 0), 0);
        return {...task, totalCost: childrenCosts};
      }
      return task;
    });
  } else {
    // Keep existing single field update logic
    state.tasks = state.tasks.map(task => {
      if (task.id === id && type === 'project') {
        task[field] = value;
      }
      if (task?.resources?.length) {
        task.resources = task.resources.map(resource => {
          if (resource.id === id) {
            resource[field] = value;
          }
          return resource;
        });
      }
      return task;
    });
  }

  // Recalculate resources and final costs
  state.tasks = state.tasks.map(task => {
    if (task.resources?.length) {
      task.resources = getResources(task.id, state.drawingData, task.resources);
    }
    return task;
  });
  state.tasks = calculateTotalResourceCost(state.tasks);
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
    },
    updateTaskFromDrawing(state){
      const drawingData=state.drawingData
      state.tasks=updateTasksFromDrawingData(state.tasks,drawingData)
    },
    updateTotalTasksCount(state){
      state.totalTasks=state.tasks.filter(task=>task.type=='task').length
    },
    updateTaskProgress(state,action){
      const {id,progress}=action.payload
      state.tasks=state.tasks.map(task=>{
        if(task.id===id){
          task.progress=progress
        }
        return task
      })
      state.tasks=updateProjectProgress(state.tasks)
    },
    updateEstimateRestore(state,action){
      const {Data}=action.payload
      return Data
    }
  }
} )

export const {updateTaskProgress,updateEstimateRestore,updateTasksDuration,updateTaskFromDrawing,updateTaskStartDate,addNewTask,setCurrency,updateAllResources,updateDrawingData,setUnits,updateTaskField} = scheduleSlice.actions
export default scheduleSlice.reducer