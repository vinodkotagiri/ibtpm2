import axios from 'axios';
const BASE_SERVER_URL='https://node.ibuiltup.in/api/v1';
import stringify from 'json-stringify-pretty-compact';
import pako from 'pako';
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
      const minifiedData = stringify(data);
      const compressedData = pako.deflate(minifiedData, { level: 9 });
      const formData = new FormData();
      formData.append('file', new Blob([compressedData], { type: 'application/octet-stream' }));

      instance.post( `/project/create-estimate`,formData,{headers:{
        Authorization:`Bearer ${token}`,
        "Content-Type": 'multipart/form-data'
      }} )
        .then( result => resolve( result ) )
        .catch( err => reject( err ) )
    } catch ( err ) {
      console.log('Error:',err)
      reject( err )
    }
  } )
}

export async function updateEstimate ( data,token ) {
 
  return new Promise( ( resolve, reject ) => {
    try {
      const minifiedData = stringify(data);
      const compressedData = pako.deflate(minifiedData, { level: 9 });
      const formData = new FormData();
      formData.append('file', new Blob([compressedData], { type: 'application/octet-stream' }));
      instance.post( `/project/update-estimate`,formData,{headers:{
        Authorization:`Bearer ${token}`,
         "Content-Type": 'multipart/form-data'
      }} )
        .then( result => resolve( result ) )
        .catch( err => reject( err ) )
    } catch ( err ) {
      reject( err )
    }
  } )
}

export async function getEstimate (estimateId,token) {
  if(!token) token=window.localStorage.getItem('token')
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

export async function loginUser ( data ) {
  const RegisteredIP = await getIpAddress()
  data={...data,RegisteredIP}
  return new Promise( ( resolve, reject ) => {
    instance.post( `/auth/signin`, data )
      .then( result => resolve( result ) )
      .catch( err => reject( err ) )
  } )
}


export async function getIpAddress () {
  return new Promise( ( resolve, reject ) => {
    axios.get( 'https://api.ipify.org' )
      .then( result => resolve( result.data ) )
      .catch( err => reject( err ) )
  } )
}

export const setBearerToken = () => {
  if ( window.localStorage.getItem( 'token' ) ) {
    const token = window.localStorage.getItem( 'token' )
    instance.defaults.headers[ 'Authorization' ] = `Bearer ${ token }`
  }
}

export async function signupUser ( data ) {
  const RegisteredIP = await getIpAddress()
  return new Promise( ( resolve, reject ) => {
    instance.post( `/auth/signup`, {...data,RegisteredIP} )
      .then( result => resolve( result ) )
      .catch( err => reject( err ) )
  } )
}

