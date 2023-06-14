import { createSlice } from "@reduxjs/toolkit";
import { getCards } from "../../Services/requests";

const initialState = {
  characters: []
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
    }
  },
});

export const { getList, setList } = characterSlice.actions;

export default characterSlice.reducer;
