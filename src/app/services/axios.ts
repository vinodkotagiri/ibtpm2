import axios from 'axios';
const BASE_SERVER_URL='https://node.ibuiltup.in/api/v1';
// const BASE_SERVER_URL='http://localhost:5500/api/v1';
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

export async function saveEstimate ( data,token ) {
  return new Promise( ( resolve, reject ) => {
    try {
      instance.post( `/project/create-estimate`,data,{headers:{
        Authorization:`Bearer ${token}`
      }} )
        .then( result => resolve( result ) )
        .catch( err => reject( err ) )
    } catch ( err ) {
      reject( err )
    }
  } )
}

export async function updateEstimate ( data,token ) {
  return new Promise( ( resolve, reject ) => {
    try {
      instance.post( `/project/update-estimate`,data,{headers:{
        Authorization:`Bearer ${token}`
      }} )
        .then( result => resolve( result ) )
        .catch( err => reject( err ) )
    } catch ( err ) {
      reject( err )
    }
  } )
}

export async function getEstimate (estimateId,token) {
  return new Promise( ( resolve, reject ) => {
    try {
      instance.get( `/project/get-estimate/${estimateId}`,{headers:{
        Authorization:`Bearer ${token}`
      }} )
        .then( result => resolve( result ) )
        .catch( err => reject( err ) )
    } catch ( err ) {
      reject( err )
    }
  } )
}
export async function getAllEstimates (User,token) {
  return new Promise( ( resolve, reject ) => {
    try {
      instance.get( `/project/user-estimates/${User}`,{headers:{
        Authorization:`Bearer ${token}`
      }} )
        .then( result => resolve( result ) )
        .catch( err => reject( err ) )
    } catch ( err ) {
      reject( err )
    }
  } )
}

export async function getUserDetails(token){
  return new Promise( ( resolve, reject ) => {
    try {
      instance.get( `/user`,{headers:{
        Authorization:`Bearer ${token}`
      }} )
        .then( result => resolve( result ) )
        .catch( err => reject( err ) )
    } catch ( err ) {
      reject( err )
    }
  } )
}