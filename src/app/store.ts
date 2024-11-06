import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from './features/scheduleSlice'
import drawingReducer from './features/drawingSlice'
const store=configureStore({
  reducer:{
    schedule:scheduleReducer,
    drawing:drawingReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch