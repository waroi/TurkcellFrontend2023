import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pokemons: [],
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		addPokemon: (state, action) => {
			state.pokemons = [...state.pokemons, action.payload];
		},
		deletePokemon: (state, action) => {
			state.pokemons = state.pokemons.filter((pokemon) => pokemon.id !== action.payload);
		},
	},
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
