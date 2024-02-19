import { configureStore } from "@reduxjs/toolkit";
import { movieSlice }from "./movieSlice";
import  { likeSlice } from "./likeSlice";

export const store = configureStore({
    reducer: {
        movie: movieSlice.reducer,
        like: likeSlice.reducer,
    },
});
