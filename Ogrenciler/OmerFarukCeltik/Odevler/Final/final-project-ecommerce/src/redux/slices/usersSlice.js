import { createSlice } from "@reduxjs/toolkit";
import { addNewUserWithSignUp,userIsLoggedInStatus } from "../helpers";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    currentlyLoggedIn: null,
  },
  reducers: {
    getUsers: (state, action) => {
      state.items = action.payload;
      const currentUser = state.items.find((item) => item.isLoggedIn == true);
      state.currentlyLoggedIn = currentUser != undefined ? currentUser : null;
    },
    registerUser: (state,action) => {
      addNewUserWithSignUp(action.payload);
    },
    loginUser: (state,action) => {
     const currentUser = state.items.find((item) => item.username == action.payload.username);
     currentUser.isLoggedIn = true;
     userIsLoggedInStatus(currentUser);
     state.currentlyLoggedIn = currentUser != undefined ? currentUser : null;
    },
    logOutUser: (state,action) => {
      const currentUser = state.items.find((item) => item.username == action.payload.username);
      currentUser.isLoggedIn = false;
      userIsLoggedInStatus(currentUser);
    }
  },
});

export const { getUsers,registerUser,loginUser,logOutUser} = usersSlice.actions;

export default usersSlice.reducer;
