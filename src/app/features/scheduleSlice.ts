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
    plotLength: 0,
    plotWidth: 0,
    plotArea: 0,
    plotPerimeter: 0,
    builtLength: 0,
    builtWidth: 0,
    builtupArea: 0,
    builtupPerimeter: 0,
    excavationArea: 0,
    excavationDepth:0,
    groundFloorArea: 0,
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
        task.resources=getResources(task.id,state.drawingData)
        return task
      })
      state.tasks=calculateTotalResourceCost(state.tasks)
    },
    updateDrawingData(state,action){ 
      let {drawingData}=action.payload
      if(state.units==='imperial' && drawingData.currentUnits=="SI"){
        drawingData.currentUnits="imperial"
        drawingData.plotLength=convertUnits({fromUnit:"m",toUnit:"ft",value:drawingData.plotLength})
        drawingData.plotWidth=convertUnits({fromUnit:"m",toUnit:"ft",value:drawingData.plotWidth})
        drawingData.builtLength=convertUnits({fromUnit:"m",toUnit:"ft",value:drawingData.builtLength})
        drawingData.builtWidth=convertUnits({fromUnit:"m",toUnit:"ft",value:drawingData.builtWidth})
        drawingData.plotArea=convertUnits({fromUnit:"m2",toUnit:"ft2",value:drawingData.plotArea})
        drawingData.builtupArea=convertUnits({fromUnit:"m2",toUnit:"ft2",value:drawingData.builtupArea})
        drawingData.plotPerimeter=convertUnits({fromUnit:"m",toUnit:"ft",value:drawingData.plotPerimeter})
        drawingData.builtupPerimeter=convertUnits({fromUnit:"m",toUnit:"ft",value:drawingData.builtupPerimeter})
        drawingData.excavationArea=convertUnits({fromUnit:"m2",toUnit:"ft2",value:drawingData.excavationArea})
        drawingData.excavationDepth=convertUnits({fromUnit:"m",toUnit:"ft",value:drawingData.excavationDepth})
        drawingData.groundFloorArea=convertUnits({fromUnit:"m2",toUnit:"ft2",value:drawingData.groundFloorArea})
        drawingData.firstFloorArea=convertUnits({fromUnit:"m2",toUnit:"ft2",value:drawingData.firstFloorArea})
        drawingData.secondFloorArea=convertUnits({fromUnit:"m2",toUnit:"ft2",value:drawingData.secondFloorArea})
        drawingData.thirdFloorArea=convertUnits({fromUnit:"m2",toUnit:"ft2",value:drawingData.thirdFloorArea})
        drawingData.fourthFloorArea=convertUnits({fromUnit:"m2",toUnit:"ft2",value:drawingData.fourthFloorArea})
        drawingData.groundFloorWalls=drawingData.groundFloorWalls.map(wall=>convertUnits({fromUnit:"m",toUnit:"ft",value:wall.length}))
        drawingData.firstFloorWalls=drawingData.firstFloorWalls.map(wall=>convertUnits({fromUnit:"m",toUnit:"ft",value:wall.length}))
        drawingData.secondFloorWalls=drawingData.secondFloorWalls.map(wall=>convertUnits({fromUnit:"m",toUnit:"ft",value:wall.length}))
        drawingData.thirdFloorWalls=drawingData.thirdFloorWalls.map(wall=>convertUnits({fromUnit:"m",toUnit:"ft",value:wall.length}))
        drawingData.fourthFloorWalls=drawingData.fourthFloorWalls.map(wall=>convertUnits({fromUnit:"m",toUnit:"ft",value:wall.length}))
      }
      else if(state.units==='SI' && drawingData.currentUnits=="imperial"){
        drawingData.currentUnits="SI"
        drawingData.plotLength=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.plotLength})
        drawingData.plotWidth=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.plotWidth})
        drawingData.builtLength=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.builtLength})
        drawingData.builtWidth=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.builtWidth})
        drawingData.plotArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.plotArea})
        drawingData.builtupArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.builtupArea})
        drawingData.plotPerimeter=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.plotPerimeter})
        drawingData.builtupPerimeter=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.builtupPerimeter})
        drawingData.excavationArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.excavationArea})
        drawingData.excavationDepth=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.excavationDepth})
        drawingData.groundFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.groundFloorArea})
        drawingData.firstFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.firstFloorArea})
        drawingData.secondFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.secondFloorArea})
        drawingData.thirdFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.thirdFloorArea})
        drawingData.fourthFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.fourthFloorArea})
        drawingData.groundFloorWalls=drawingData.groundFloorWalls.map(wall=>convertUnits({fromUnit:"ft",toUnit:"m",value:wall.length}))
        drawingData.firstFloorWalls=drawingData.firstFloorWalls.map(wall=>convertUnits({fromUnit:"ft",toUnit:"m",value:wall.length}))
        drawingData.secondFloorWalls=drawingData.secondFloorWalls.map(wall=>convertUnits({fromUnit:"ft",toUnit:"m",value:wall.length}))
        drawingData.thirdFloorWalls=drawingData.thirdFloorWalls.map(wall=>convertUnits({fromUnit:"ft",toUnit:"m",value:wall.length}))
        drawingData.fourthFloorWalls=drawingData.fourthFloorWalls.map(wall=>convertUnits({fromUnit:"ft",toUnit:"m",value:wall.length}))
      }
      state.drawingData=drawingData
     updateAllResources()
    },
    setUnits(state,action){
      state.units=action.payload
      updateDrawingData({drawingData:state.drawingData})
    }
  }
} )

export const {updateTaskStartDate,addNewTask,setCurrency,updateAllResources,updateDrawingData,setUnits} = scheduleSlice.actions
export default scheduleSlice.reducer