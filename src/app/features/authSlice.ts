import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    darkMode: false,
    isAuthenticated:false,
    userInfo:null
}

const appSlice = createSlice({
    'name': 'app',
    initialState: INITIAL_STATE,
    reducers: {
        toggleThemeMode: function (state) {
            state.darkMode = !state.darkMode
        },
        setAuthentication:function(state,action){
            const {isAuthenticated,userInfo}=action.payload
            state.isAuthenticated=isAuthenticated
            state.userInfo=userInfo?userInfo:null
        },

        logout:(state)=>{
            state.isAuthenticated=false,
            state.userInfo=null
            window.localStorage.clear()
        }
    }
})

export const {
    logout,
    toggleThemeMode,
    setAuthentication
} = appSlice.actions
export default appSlice.reducer