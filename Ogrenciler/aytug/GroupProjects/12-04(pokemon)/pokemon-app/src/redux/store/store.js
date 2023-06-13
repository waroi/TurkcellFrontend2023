import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlice";

const store = configureStore({
	reducer: {
		pokemonSlice: pokemonReducer,
	},
});

export default store;
