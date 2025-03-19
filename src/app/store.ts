import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from './features/scheduleSlice'
import appReducer from './features/authSlice'
const store=configureStore({
  reducer:{
    schedule:scheduleReducer,
    app:appReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch