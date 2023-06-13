import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState:{
    pokes: [],
    pokeDetail: [],
  },
  reducers: {
    
    getPokemons: (state, action) => {
      state.pokes = action.payload;
    },
  },
});

export const {getPokemons} = cardSlice.actions;

export default cardSlice.reducer;
