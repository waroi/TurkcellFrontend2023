import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/usersSlice";
import productsReducer from "../slices/productsSlice";
import loginReducer from "../slices/loginSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    login: loginReducer,
  },
});

export default store;
