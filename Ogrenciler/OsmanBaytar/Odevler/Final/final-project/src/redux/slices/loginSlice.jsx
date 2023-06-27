import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addLogin: (state, action) => {
      state.login = action.payload;
    },
    deleteLogin: (state) => {
      state.login = [];
    },
  },
});

export const { deleteLogin, addLogin } = loginSlice.actions;

export default loginSlice.reducer;
