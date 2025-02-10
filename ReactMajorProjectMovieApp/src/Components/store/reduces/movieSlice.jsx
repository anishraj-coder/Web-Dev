import { createSlice } from "@reduxjs/toolkit"

export const initialState={
    info:null,
}
export const movieSlice =createSlice({
    name:"movie",
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
export const {setInfo,removeInfo}=movieSlice.actions;
export default movieSlice.reducer;