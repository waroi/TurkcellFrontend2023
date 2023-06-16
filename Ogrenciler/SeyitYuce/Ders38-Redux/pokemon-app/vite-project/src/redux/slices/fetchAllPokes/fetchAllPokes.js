import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPokes: [],
  status: "idle",
  
};

export const fetchAllPokes = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading";
    },
    getPokemon: (state, action) => {
      state.allPokes = action.payload;
      state.status = "success";
    },
    error: (state) => {
      state.error = action.payload;
      state.status = "error";
    },
  },
});

export const { loading, getPokemon, error } = fetchAllPokes.actions;

export default fetchAllPokes.reducer;
