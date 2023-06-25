import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/usersSlice";
import productsReducer from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export default store;
