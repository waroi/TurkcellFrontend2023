import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice.js";
import productReducer from "../slices/productSlice.js";
import cartReducer from "../slices/cartSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
