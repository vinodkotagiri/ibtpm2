import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from './features/scheduleSlice'
const store=configureStore({
  reducer:{
    schedule:scheduleReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch