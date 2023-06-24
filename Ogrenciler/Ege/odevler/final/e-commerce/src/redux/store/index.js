import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import searchReducer from "../slices/searchSlice";
import productsReducer from "../slices/productsSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    products: productsReducer,
  },
});

export default store;
