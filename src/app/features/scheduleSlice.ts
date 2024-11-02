import { createSlice } from "@reduxjs/toolkit";
import schedule from "../../constants/schedule";
import { calculateTotalResourceCost, getCurrencySymbol, updateTaskDates } from "../../helpers/calculations";
import { CurrencyUnits, Task } from "../../constants/types";

interface ScheduleState {
  tasks:Task[],
  currency:CurrencyUnits
  currencyCode:string
}
const initialState: ScheduleState = {
  tasks:[...schedule],
  currency:'INR',
  currencyCode:getCurrencySymbol('INR')
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
    }
  }
} )

export const {updateTaskStartDate,addNewTask,setCurrency} = scheduleSlice.actions
export default scheduleSlice.reducer