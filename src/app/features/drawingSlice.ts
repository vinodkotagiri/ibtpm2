import { createSlice } from "@reduxjs/toolkit";

const drawingSlice = createSlice({
  name: "drawing",
  initialState: {
    drawingData: {
      plotLength: 0,
      plotWidth: 0,
      plotArea: 0,
      builtLength: 0,
      builtWidth: 0,
      builtupArea: 0,
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
    }
  },
  reducers: {
    setDrawingData: (state, action) => {
      state.drawingData = action.payload;
    }
  }
});

export const { setDrawingData } = drawingSlice.actions;
export default drawingSlice.reducer;
