import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/usersSlice";
import loginReducer from "../slices/loginSlice";
import basketReducer from "../slices/basketSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    login: loginReducer,
    basket: basketReducer,
  },
});

export default store;
