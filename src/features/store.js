import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice"
console.log('theOneInStore');
export const store=configureStore({
    
    reducer:{movies: movieReducer}
})