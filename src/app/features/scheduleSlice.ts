import { createSlice } from "@reduxjs/toolkit";
import schedule from "../../constants/schedule";
import { updateTaskDates } from "../../helpers/calculations";
const scheduleSlice = createSlice( {
  initialState: {
    tasks:[...schedule]
  },
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
    },
  }
} )

export const {updateTaskStartDate} = scheduleSlice.actions
export default scheduleSlice.reducer