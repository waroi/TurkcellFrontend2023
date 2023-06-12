import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlice";

const pokemonStore = configureStore({
	reducer: {
		pokemon: pokemonReducer,
	},
});

export default pokemonStore;
