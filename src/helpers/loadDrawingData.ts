import { updateDrawingData } from "../app/features/scheduleSlice";
import store from "../app/store";
import { DrawingData } from "../constants/types";
import convertUnits from "./converisons";

export const loadDrawingData = () => {
    let data: string = localStorage.getItem( 'state' );

    if ( data ) {
        let parsedData: any = JSON.parse( data );
        let drawingData: DrawingData = {
            currentUnits:"imperial",
            excavationArea: parsedData.drawing.PLOT.AREA as number,
            excavationDepth:3,
            slabThickness:6,
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
        drawingData=convertDataToSI(drawingData)
        store.dispatch(updateDrawingData({drawingData}));
    }
}

function convertDataToSI(drawingData:DrawingData){
    drawingData.plotLength=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.plotLength})
    drawingData.plotWidth=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.plotWidth})
    drawingData.builtLength=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.builtLength})
    drawingData.builtWidth=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.builtWidth})
    drawingData.plotArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.plotArea})
    drawingData.builtupArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.builtupArea})
    drawingData.slabThickness=convertUnits({fromUnit:"in",toUnit:"m",value:drawingData.slabThickness})
    drawingData.plotPerimeter=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.plotPerimeter})
    drawingData.builtupPerimeter=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.builtupPerimeter})
    drawingData.excavationArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.excavationArea})
    drawingData.excavationDepth=convertUnits({fromUnit:"ft",toUnit:"m",value:drawingData.excavationDepth})
    drawingData.groundFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.groundFloorArea})
    drawingData.firstFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.firstFloorArea})
    drawingData.secondFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.secondFloorArea})
    drawingData.thirdFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.thirdFloorArea})
    drawingData.fourthFloorArea=convertUnits({fromUnit:"ft2",toUnit:"m2",value:drawingData.fourthFloorArea})
    return drawingData
}