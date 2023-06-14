import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemon } from "../../utils/Request";

export const getPokemons = createAsyncThunk("pokemon/getPokemons", async () => {
  const response = await fetchPokemon();
  return response.data;
});

const initialState = {
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
    });
  },
});

export default pokemonSlice.reducer;
