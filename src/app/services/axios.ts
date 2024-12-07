import axios from 'axios';
const BASE_SERVER_URL='https://node.ibuiltup.in/api/v1';

const instance = axios.create( {
  baseURL:BASE_SERVER_URL ,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
} );
export async function getDrawing ( drawingId:string,token:string ) {
  return new Promise( ( resolve, reject ) => {
    try {
      instance.get( `/project/get-drawing/${ drawingId }`,{headers:{
        Authorization:`Bearer ${token}`
      }} )
        .then( result => resolve( result ) )
        .catch( err => reject( err ) )
    } catch ( err ) {
      reject( err )
    }
  } )
}