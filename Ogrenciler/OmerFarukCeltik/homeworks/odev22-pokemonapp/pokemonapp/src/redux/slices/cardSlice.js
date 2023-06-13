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
    getPokeDetail: (state, action) => {
      console.log(action.payload);
      state.pokeDetail = action.payload;
    },
  },
});

export const {getPokemons,getPokeDetail} = cardSlice.actions;

export default cardSlice.reducer;
