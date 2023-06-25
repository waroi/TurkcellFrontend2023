import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productList.js";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
