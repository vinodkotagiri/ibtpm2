import { updateDrawingData } from "../app/features/scheduleSlice";
import store from "../app/store";
import { DrawingData } from "../constants/types";
import convertUnits from "./converisons";
import { getDrawing } from '../app/services/axios.ts'

export function loadDrawingData ( token: string, id: string ) {
    getDrawing( id, token ).then( ( response: any ) => {
        // return response?.data?.drawing?.Data
        const conversionFactor = 0.3048;
        const data = response?.data?.drawing?.Data ?? {}
        const innerWallThickness: unknown = ( 0.6 * conversionFactor ).toFixed( 2 )
        const floorHeight: unknown = ( 11 * conversionFactor ).toFixed( 2 )
        const drawingData: any = {
            innerWallThickness: innerWallThickness,
            floorHeight: floorHeight,
            plotLength: ( data?.plotLength * conversionFactor || 0 ).toFixed( 2 ),
            plotWidth: ( data?.plotBreadth * conversionFactor || 0 ).toFixed( 2 ),
            plotArea: ( data?.PlotArea * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),

            builtupLength: ( data?.builtupLength * conversionFactor || 0 ).toFixed( 2 ),
            builtupWidth: ( data?.builtupBreadth * conversionFactor || 0 ).toFixed( 2 ),
            builtupArea: ( data?.builtupArea * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),

            groundFloor: {
                length: ( data?.groundFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                breadth: ( data?.groundFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.groundFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),

            },
            firstFloor: {
                length: ( data?.firstFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                breadth: ( data?.firstFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.firstFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            },
            secondFloor: {
                length: ( data?.secondFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                breadth: ( data?.secondFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.secondFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            },
            thirdFloor: {
                length: ( data?.thirdFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                breadth: ( data?.thirdFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.thirdFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            },
            fourthFloor: {
                length: ( data?.fourthFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                breadth: ( data?.fourthFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.fourthFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            },
            fifthFloor: {
                length: ( data?.fifthFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                breadth: ( data?.fifthFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.fifthFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            }

        }

        //Handle ground floor rooms
        if ( data?.groundFloor ) {
            let roomsData = []
            for ( const room of data?.groundFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                const roomName = `GroundFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}

                currentRoomData[ `${ roomName }Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `${ roomName }Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `${ roomName }Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `${ roomName }LeftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }LeftWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }LeftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `${ roomName }RightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }RightWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }RightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `${ roomName }FrontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }FrontWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }FrontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `${ roomName }BackWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }BackWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }BackWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.groundFloor = {
                groundFloorLength: drawingData.groundFloor.length,
                groundFloorWidth: drawingData.groundFloor.breadth,
                groundFloorArea: drawingData.groundFloor.area,
                ...roomsData.reduce( ( acc, room ) => ( { ...acc, ...room } ), {} )
            }
        } else {
            delete drawingData.groundFloor
        }

        //Handle First floor rooms
        if ( data?.firstFloor ) {
            let roomsData = []
            for ( const room of data?.firstFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                const roomName = `FirstFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}

                currentRoomData[ `${ roomName }Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `${ roomName }Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `${ roomName }Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `${ roomName }LeftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }LeftWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }LeftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `${ roomName }RightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }RightWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }RightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `${ roomName }FrontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }FrontWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }FrontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `${ roomName }BackWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }BackWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }BackWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.firstFloor = {
                firstFloorLength: drawingData.firstFloor.length,
                firstFloorWidth: drawingData.firstFloor.breadth,
                firstFloorArea: drawingData.firstFloor.area,
                ...roomsData.reduce( ( acc, room ) => ( { ...acc, ...room } ), {} )
            }
        } else {
            delete drawingData.firstFloor
        }

         //Handle Second floor rooms
         if ( data?.secondFloor ) {
            let roomsData = []
            for ( const room of data?.secondFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                const roomName = `SecondFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}

                currentRoomData[ `${ roomName }Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `${ roomName }Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `${ roomName }Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `${ roomName }LeftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }LeftWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }LeftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `${ roomName }RightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }RightWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }RightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `${ roomName }FrontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }FrontWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }FrontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `${ roomName }BackWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }BackWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }BackWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.secondFloor = {
                secondFloorLength: drawingData.secondFloor.length,
                secondFloorWidth: drawingData.secondFloor.breadth,
                secondFloorArea: drawingData.secondFloor.area,
                ...roomsData.reduce( ( acc, room ) => ( { ...acc, ...room } ), {} )
            }
        } else {
            delete drawingData.secondFloor
        }

           //Handle Third floor rooms
           if ( data?.thirdFloor ) {
            let roomsData = []
            for ( const room of data?.thirdFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                const roomName = `ThirdFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}

                currentRoomData[ `${ roomName }Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `${ roomName }Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `${ roomName }Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `${ roomName }LeftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }LeftWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }LeftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `${ roomName }RightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }RightWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }RightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `${ roomName }FrontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }FrontWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }FrontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `${ roomName }BackWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }BackWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }BackWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.thirdFloor = {
                thirdFloorLength: drawingData.thirdFloor.length,
                thirdFloorWidth: drawingData.thirdFloor.breadth,
                thirdFloorArea: drawingData.thirdFloor.area,
                ...roomsData.reduce( ( acc, room ) => ( { ...acc, ...room } ), {} )
            }
        } else {
            delete drawingData.thirdFloor
        }
           //Handle Fourth floor rooms
           if ( data?.fourthFloor ) {
            let roomsData = []
            for ( const room of data?.fourthFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                const roomName = `FourthFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}

                currentRoomData[ `${ roomName }Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `${ roomName }Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `${ roomName }Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `${ roomName }LeftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }LeftWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }LeftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `${ roomName }RightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }RightWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }RightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `${ roomName }FrontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }FrontWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }FrontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `${ roomName }BackWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }BackWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }BackWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.fourthFloor = {
                fourthFloorLength: drawingData.fourthFloor.length,
                fourthFloorWidth: drawingData.fourthFloor.breadth,
                fourthFloorArea: drawingData.fourthFloor.area,
                ...roomsData.reduce( ( acc, room ) => ( { ...acc, ...room } ), {} )
            }
        } else {
            delete drawingData.fourthFloor
        }

           //Handle Fifth floor rooms
           if ( data?.fifthFloor ) {
            let roomsData = []
            for ( const room of data?.fifthFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                const roomName = `FifthFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}

                currentRoomData[ `${ roomName }Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `${ roomName }Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `${ roomName }Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `${ roomName }LeftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }LeftWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }LeftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `${ roomName }RightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }RightWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }RightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `${ roomName }FrontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }FrontWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }FrontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `${ roomName }BackWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `${ roomName }BackWallThickness` ] = innerWallThickness
                        currentRoomData[ `${ roomName }BackWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.fifthFloor = {
                fifthFloorLength: drawingData.fifthFloor.length,
                fifthFloorWidth: drawingData.fifthFloor.breadth,
                fifthFloorArea: drawingData.fifthFloor.area,
                ...roomsData.reduce( ( acc, room ) => ( { ...acc, ...room } ), {} )
            }
        } else {
            delete drawingData.fifthFloor
        }

        store.dispatch( updateDrawingData( { drawingData } ) );
    } ).catch( () => { } )
}