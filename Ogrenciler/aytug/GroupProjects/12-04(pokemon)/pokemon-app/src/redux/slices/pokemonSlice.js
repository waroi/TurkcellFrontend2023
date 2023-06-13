import { createSlice } from "@reduxjs/toolkit";
import { getAllPokemons } from "../../services/api";

const initialState = {
	pokemons: [],
	isLoading: false,
	error: null,
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		listPokemonsStart: (state) => {
			state.isLoading = true;
			state.error = null;
		},
		listPokemonsSuccess: (state, action) => {
			state.isLoading = false;
			state.pokemons = action.payload;
		},
		listPokemonsFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { listPokemonsStart, listPokemonsSuccess, listPokemonsFailure } = pokemonSlice.actions;

export const listPokemons = () => async (dispatch) => {
	dispatch(listPokemonsStart());

	try {
		const response = await getAllPokemons();
		const pokemonData = response;
		dispatch(listPokemonsSuccess(pokemonData));
	} catch (error) {
		dispatch(listPokemonsFailure(error.message));
	}
};

export default pokemonSlice.reducer;
