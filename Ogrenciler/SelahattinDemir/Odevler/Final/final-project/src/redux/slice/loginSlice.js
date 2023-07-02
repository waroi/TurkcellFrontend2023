import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Request from "../../utils/Request";

const request = new Request("http://localhost:3004/users");

export const fetchUsersLogin = createAsyncThunk(
  "users/fetchUsersLogin",
  async () => {
    const response = await request.get();
    return response;
  }
);

const initialState = {
  users: [],
  loggedIn: localStorage.getItem("user") ? true : false,
  error: null,
};

const loginSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.users = Object.values(action.payload);
      state.loggedIn = true;
      state.error = null;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.users = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersLogin.fulfilled, (state) => {
      state.loggedIn = localStorage.getItem("user") ? true : false;
      state.error = null;
    });
    builder.addCase(fetchUsersLogin.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
