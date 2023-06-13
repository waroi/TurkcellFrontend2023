import { configureStore } from "@reduxjs/toolkit";
import pokemon from "../slices/pokeSlice/pokeSlice";

const store = configureStore({
  reducer: {
    pokemon,
    
  }
})

export default store;