import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import productReducer from "../slices/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export default store;
