import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  selectedCaracter: [],
  knownCharacters: []

};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.characters = action.payload;
    },
    setSelectedCaracter: (state, action) => {
      state.selectedCaracter = [...state.selectedCaracter,action.payload];
    },
    clearSelectedCaracter: (state) => {
      state.selectedCaracter = [];
    },
    setKnownCharacters: (state, action) => {
      state.knownCharacters = action.payload;
    }
  },
});

export const { getList,clearSelectedCaracter, setList,setSelectedCaracter,setKnownCharacters } = characterSlice.actions;

export default characterSlice.reducer;
