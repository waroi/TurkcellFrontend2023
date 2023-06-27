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
  },
});

export const { addLogin } = loginSlice.actions;

export default loginSlice.reducer;
