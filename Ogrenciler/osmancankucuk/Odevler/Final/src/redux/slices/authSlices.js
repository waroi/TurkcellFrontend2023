import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: [],
};
export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userAuth = [...state.userAuth, action.payload];
    },
  },
});
export const { login } = authSlice.actions;

export default authSlice.reducer;
