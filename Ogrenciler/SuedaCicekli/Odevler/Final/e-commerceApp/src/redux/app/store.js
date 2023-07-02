import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";
import searchReducer from "../features/searchSlice";
import basketReducer from "../features/basketSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    basket: basketReducer,
  },
});
