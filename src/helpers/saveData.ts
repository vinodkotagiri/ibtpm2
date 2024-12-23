import store from "../app/store"

export function handleSaveData(){
  return new Promise( ( resolve, reject ) => {
    try {
      const state=store.getState()
      console.log("state",state)
      resolve(true)
    } catch ( err ) {
      reject(err)
    }
  } )
}