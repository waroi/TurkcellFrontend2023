import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isAuthenticated: false,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.userInfo =  action.payload;
        state.isAuthenticated = true;
    },
    removeUser: (state) => {
        state.userInfo = {};
        state.isAuthenticated = false;
    },
  },
});




export const { setUser, removeUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;