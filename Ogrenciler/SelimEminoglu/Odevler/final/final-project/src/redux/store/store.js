import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productList.js";
import userReducer from "../slices/userList.js";
import cartReducer from "../slices/cartsList.js";

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
