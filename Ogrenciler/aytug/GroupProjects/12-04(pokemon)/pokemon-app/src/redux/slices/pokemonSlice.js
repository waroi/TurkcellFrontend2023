import { createSlice } from "@reduxjs/toolkit";
import { getAllPokemons } from "../../services/api";

const initialState = {
	pokemons: [],
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		listPokemons: (state) => {
			state.pokemons = getAllPokemons();
		},
	},
});

export const { listPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
