import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./reduces/movieSlice";
import tvSlice  from "./reduces/tvSlice";
import peopleSlice from "./reduces/peopleSlice";

export const store= configureStore({
    reducer:{movie: movieSlice,tv: tvSlice,people: peopleSlice}
})
export default store;