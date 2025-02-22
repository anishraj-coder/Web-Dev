import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  info: {
    detail: null,
    externalIds: null,
    recommendations: { results: [] },
    similar: { results: [] },
    videos: null,
    watchProviders: null,
    credits: null,
  },
  loading: false,
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieInfo: (state, action) => {
      state.info = {
        ...action.payload,
        recommendations: action.payload.recommendations || { results: [] },
        similar: action.payload.similar || { results: [] },
      };
    },
    removeMovieInfo: (state) => {
      state.info = initialState.info;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMovieInfo, removeMovieInfo, setLoading, setError } = movieSlice.actions;
export default movieSlice.reducer;