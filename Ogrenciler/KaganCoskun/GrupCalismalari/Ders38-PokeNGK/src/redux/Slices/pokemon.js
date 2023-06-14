import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  selectedCaracter: ["ab","ca"],
  knownCharacters: []

};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.characters = action.payload;
    },
    getList: (state) => {
      return state;
    },
    setselectedCaracter: (state, action) => {
      state.selectedCaracter = action.payload;
    },
    setKnownCharacters: (state, action) => {
      state.knownCharacters = action.payload;
    }
  },
});

export const { getList, setList } = characterSlice.actions;

export default characterSlice.reducer;
