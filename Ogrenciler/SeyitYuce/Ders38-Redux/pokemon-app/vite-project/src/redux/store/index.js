import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "../slices/fetchAllPokes/fetchAllPokes";

const store = configureStore({
  reducer: {
    pokemon: pokeReducer,
  },
});

export default store;
