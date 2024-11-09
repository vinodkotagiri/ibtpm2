import { updateDrawingData } from "../app/features/scheduleSlice";
import store from "../app/store";
import { DrawingData } from "../constants/types";

export const loadDrawingData = () => {
    let data: string = localStorage.getItem( 'state' );

    if ( data ) {
        let parsedData: any = JSON.parse( data );
        const drawingData: DrawingData = {
            currentUnits:"imperial",
            excavationArea: parsedData.drawing.PLOT.AREA as number,
            excavationDepth:3,

            plotLength: parsedData.drawing.PLOT.LENGTH  as number,
            plotWidth: parsedData.drawing.PLOT.BREADTH  as number,
            plotArea: parsedData.drawing.PLOT.AREA  as number,
            plotPerimeter:2*( parsedData.drawing.PLOT.LENGTH + parsedData.drawing.PLOT.BREADTH) as number,

            builtLength: parsedData.drawing.BUILT.LENGTH  as number,
            builtWidth: parsedData.drawing.BUILT.BREADTH  as number,
            builtupArea: parsedData.drawing.BUILT.AREA  as number,
            builtupPerimeter:2*( parsedData.drawing.BUILT.LENGTH + parsedData.drawing.BUILT.BREADTH) as number,

            groundFloorArea: parsedData.drawing.PLOT.AREA  as number,
            firstFloorArea: parsedData.drawing.PLOT.AREA  as number,
            secondFloorArea:parsedData.drawing.PLOT.AREA  as number,
            thirdFloorArea:parsedData.drawing.PLOT.AREA  as number,
            fourthFloorArea:parsedData.drawing.PLOT.AREA  as number,

            groundFloorWalls:[{length:0, thickness:0}],
            firstFloorWalls:[{length:0, thickness:0}],
            secondFloorWalls:[{length:0, thickness:0}],
            thirdFloorWalls:[{length:0, thickness:0}],
            fourthFloorWalls:[{length:0, thickness:0}],
        }
        store.dispatch(updateDrawingData({drawingData}));
    }
}
