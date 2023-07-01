import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productList.js";
import userReducer from "../slices/userList.js";

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});

export default store;
