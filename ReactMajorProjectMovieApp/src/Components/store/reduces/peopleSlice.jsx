import { createSlice } from "@reduxjs/toolkit";

export const initialState={
    info:null,
}
export const tvSlice =createSlice({
    name:"tv",
    initialState,
    reducers:{
        setPeopleInfo:(state,action)=>{
            state.info=action.payload;
        },
        removePeopleInfo:(state)=>{
            state.info=null;
        }
    }
})
export const {setPeopleInfo,removePeopleInfo}=tvSlice.actions;
export default tvSlice.reducer;