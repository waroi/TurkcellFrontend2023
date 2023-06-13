import { configureStore } from "@reduxjs/toolkit";
import fetchLimit from "../slices/fetchLimit/fetchLimit";
import fetchSinglePokemon from "../slices/fetchSinglePokemon/fetchSinglePokemon";

const store = configureStore({
  reducer: {
    fetchLimit,
    fetchSinglePokemon
  }
})

export default store;