import { createSlice } from "@reduxjs/toolkit";
import { getAllPokemons } from "../../services/api";

const initialState = {
	pokemons: [],
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		listPokemonsSuccess: (state, action) => {
			state.pokemons = action.payload;
		},
	},
});

export const { listPokemonsSuccess } = pokemonSlice.actions;

export const listPokemons = () => async (dispatch) => {
	const response = await getAllPokemons();
	dispatch(listPokemonsSuccess(response));
};

export default pokemonSlice.reducer;
