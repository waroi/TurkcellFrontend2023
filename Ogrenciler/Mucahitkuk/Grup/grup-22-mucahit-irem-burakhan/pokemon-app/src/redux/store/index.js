import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slice/pokemonSlice"

const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});

export default store;