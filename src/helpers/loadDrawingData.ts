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
                width: ( data?.groundFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.groundFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),

            },
            firstFloor: {
                length: ( data?.firstFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                width: ( data?.firstFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.firstFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            },
            secondFloor: {
                length: ( data?.secondFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                width: ( data?.secondFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.secondFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            },
            thirdFloor: {
                length: ( data?.thirdFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                width: ( data?.thirdFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.thirdFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            },
            fourthFloor: {
                length: ( data?.fourthFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                width: ( data?.fourthFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.fourthFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            },
            fifthFloor: {
                length: ( data?.fifthFloor.length * conversionFactor || 0 ).toFixed( 2 ),
                width: ( data?.fifthFloor.breadth * conversionFactor || 0 ).toFixed( 2 ),
                area: ( data?.fifthFloor.area * conversionFactor * conversionFactor || 0 ).toFixed( 2 ),
            }

        }
       
        //Handle ground floor rooms
        if ( data?.groundFloor?.rooms?.length > 0 ) {
            let roomsData = []
            for ( const room of data?.groundFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                // const roomName = `GroundFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}
                currentRoomData[ "name" ] = room.name
                currentRoomData[ "length" ] = roomLength.toFixed( 2 )
                currentRoomData[ "width" ] = roomBreadth.toFixed( 2 )
                currentRoomData[ "area" ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `leftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `leftWallThickness` ] = innerWallThickness
                        currentRoomData[ `leftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `rightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `rightWallThickness` ] = innerWallThickness
                        currentRoomData[ `rightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `frontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `frontWallThickness` ] = innerWallThickness
                        currentRoomData[ `frontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `backWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `backWallThickness` ] = innerWallThickness
                        currentRoomData[ `backWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.groundFloor.rooms = roomsData
        } else {
            delete drawingData.groundFloor
        }

        //Handle First floor rooms
        if ( data?.firstFloor?.rooms?.length > 0 ) {
            let roomsData = []
            for ( const room of data?.firstFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                // const roomName = `FirstFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}

                currentRoomData[ "name" ] = room.name
                currentRoomData[ "length" ] = roomLength.toFixed( 2 )
                currentRoomData[ "width" ] = roomBreadth.toFixed( 2 )
                currentRoomData[ "area" ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `leftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `leftWallThickness` ] = innerWallThickness
                        currentRoomData[ `leftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `rightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `rightWallThickness` ] = innerWallThickness
                        currentRoomData[ `rightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `frontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `frontWallThickness` ] = innerWallThickness
                        currentRoomData[ `frontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `backWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `backWallThickness` ] = innerWallThickness
                        currentRoomData[ `backWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.firstFloor.rooms = roomsData
        } else {
            delete drawingData.firstFloor
        }

        //Handle Second floor rooms
        if ( data?.secondFloor?.rooms?.length > 0 ) {
            let roomsData = []
            for ( const room of data?.secondFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                // const roomName = `SecondFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}

                currentRoomData[ "name" ] = room.name
                currentRoomData[ `Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `leftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `leftWallThickness` ] = innerWallThickness
                        currentRoomData[ `leftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `rightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `rightWallThickness` ] = innerWallThickness
                        currentRoomData[ `rightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `frontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `frontWallThickness` ] = innerWallThickness
                        currentRoomData[ `frontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `backWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `backWallThickness` ] = innerWallThickness
                        currentRoomData[ `backWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.secondFloor.rooms = roomsData
        } else {
            delete drawingData.secondFloor
        }

        //Handle Third floor rooms
        if ( data?.thirdFloor?.rooms?.length > 0 ) {
            let roomsData = []
            for ( const room of data?.thirdFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                // const roomName = `ThirdFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}

                currentRoomData[ "name" ] = room.name
                currentRoomData[ `Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `leftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `leftWallThickness` ] = innerWallThickness
                        currentRoomData[ `leftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `rightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `rightWallThickness` ] = innerWallThickness
                        currentRoomData[ `rightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `frontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `frontWallThickness` ] = innerWallThickness
                        currentRoomData[ `frontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `backWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `backWallThickness` ] = innerWallThickness
                        currentRoomData[ `backWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.thirdFloor.rooms = roomsData
        } else {
            delete drawingData.thirdFloor
        }
        //Handle Fourth floor rooms
        if ( data?.fourthFloor?.rooms?.length > 0 ) {
            let roomsData = []
            for ( const room of data?.fourthFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                // const roomName = `FourthFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}
                currentRoomData[ "name" ] = room.name
                currentRoomData[ `Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `leftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `leftWallThickness` ] = innerWallThickness
                        currentRoomData[ `leftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `rightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `rightWallThickness` ] = innerWallThickness
                        currentRoomData[ `rightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `frontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `frontWallThickness` ] = innerWallThickness
                        currentRoomData[ `frontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `backWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `backWallThickness` ] = innerWallThickness
                        currentRoomData[ `backWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.fourthFloor.rooms = roomsData
        } else {
            delete drawingData.fourthFloor
        }

        //Handle Fifth floor rooms
        if ( data?.fifthFloor?.rooms?.length > 0 ) {
            let roomsData = []
            for ( const room of data?.fifthFloor?.rooms ) {
                const roomLength = room.length * conversionFactor
                const roomBreadth = room.breadth * conversionFactor
                // const roomName = `FifthFloor${ room.name.split( '-' ).join( '' ) }`
                const currentRoomData = {}
                currentRoomData[ "name" ] = room.name
                currentRoomData[ `Length` ] = roomLength.toFixed( 2 )
                currentRoomData[ `Width` ] = roomBreadth.toFixed( 2 )
                currentRoomData[ `Area` ] = ( roomLength * roomBreadth ).toFixed( 2 )

                for ( const wall of room?.walls ) {
                    if ( wall.side == 'L' ) {
                        currentRoomData[ `leftWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `leftWallThickness` ] = innerWallThickness
                        currentRoomData[ `leftWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'R' ) {
                        currentRoomData[ `rightWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `rightWallThickness` ] = innerWallThickness
                        currentRoomData[ `rightWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'F' ) {
                        currentRoomData[ `frontWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `frontWallThickness` ] = innerWallThickness
                        currentRoomData[ `frontWallHeight` ] = floorHeight
                    }
                    if ( wall.side == 'B' ) {
                        currentRoomData[ `backWallLength` ] = ( wall.length * conversionFactor ).toFixed( 2 )
                        currentRoomData[ `backWallThickness` ] = innerWallThickness
                        currentRoomData[ `backWallHeight` ] = floorHeight
                    }
                }

                roomsData.push( currentRoomData )
            }

            drawingData.fifthFloor.rooms = roomsData
        } else {
            delete drawingData.fifthFloor
        }
        console.log('data',drawingData)
        const obj = {}
        store.dispatch( updateDrawingData( { drawingData } ) );
    } ).catch( () => { } )
}

