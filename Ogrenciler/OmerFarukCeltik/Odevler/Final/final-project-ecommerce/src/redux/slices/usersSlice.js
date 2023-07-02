import { createSlice } from "@reduxjs/toolkit";
import { addNewUserWithSignUp,userIsLoggedInStatus } from "../helpers";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    loggedInUsers: [],
    currentlyLoggedIn: null,
    localStorageLog: null,
  
  },
  reducers: {
    localStorageDataSet: (state,action) => {
      state.localStorageLog = action.payload
     },
    currentlyLoggedInSet: (state,action) => {
      state.currentlyLoggedIn = {
        "email": state.localStorageLog.email,
        "id": state.localStorageLog.id,
        "isAdmin": state.localStorageLog.isAdmin,
        "isLoggedIn": true,
        "username":state.localStorageLog.username,
        
        
      }
     },
    getUsers: (state, action) => {
      state.items = action.payload;
      const currentUser = state.items.filter((item) => item.isLoggedIn == true);
      state.loggedInUsers = currentUser;
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

export const { getUsers,registerUser,loginUser,logOutUser,localStorageDataSet,currentlyLoggedInSet} = usersSlice.actions;

export default usersSlice.reducer;
