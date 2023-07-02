import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import productReducer from "../slices/productSlice";
import cartReducer from "../slices/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
