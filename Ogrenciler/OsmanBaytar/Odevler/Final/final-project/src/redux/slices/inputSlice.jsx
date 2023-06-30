import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: [],
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    addInput: (state, action) => {
      console.log("working");
      state.input = action.payload;
    },
    deleteInput: (state) => {
      state.input = [];
    },
  },
});

export const { deleteInput, addInput } = inputSlice.actions;

export default inputSlice.reducer;
