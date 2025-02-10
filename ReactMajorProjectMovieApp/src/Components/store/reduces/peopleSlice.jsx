import { createSlice } from "@reduxjs/toolkit";

export const initialState={
    info:null,
}
export const tvSlice =createSlice({
    name:"tv",
    initialState,
    reducers:{
        setInfo:(state,action)=>{
            state.info=action.payload;
        },
        removeInfo:(state)=>{
            state.info=null;
        }
    }
})
export const {setInfo,removeInfo}=tvSlice.actions;
export default tvSlice.reducer;