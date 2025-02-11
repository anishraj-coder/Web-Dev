import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  info: null,
};
export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    seTvInfo: (state, action) => {
      state.info = action.payload;
    },
    removeTvInfo: (state) => {
      state.info = null;
    },
  },
});
export const { setTvInfo, removeTvInfo } = tvSlice.actions;
export default tvSlice.reducer;
