import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  error: null,
  isLogin: false,
  role: "",
  id: "",
  userImage: "",
};
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    loginFailure: (state, action) => {
      state.user = [];
      state.isAuth = false;
      state.error = action.payload;
    },
    signupSuccess: (state, action) => {
      state.user.push(action.payload);
    },
    signupFailure: (state, action) => {
      state.user = [];
      state.error = action.payload;
    },
    addNewUser: (state, action) => {
      state.user.push(action.payload);
    },
    logout: (state) => {
      state.user = [];
      state.isLogin = false;
    },
    setLoginStatus: (state, action) => {
      state.isLogin = action.payload;
    },
    setUsername: (state, action) => {
      state.user = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
  addNewUser,
  logout,
  setLoginStatus,
  setUsername,
  setId,
} = mainSlice.actions;

export default mainSlice.reducer;
