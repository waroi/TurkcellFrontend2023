import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice.js";
import userReducer from "../slices/usersSlice.js";
import cardReducer from "../slices/cardSlice.js";

const store = configureStore({
  reducer:{
    products: productReducer,
    users: userReducer,
    cards: cardReducer
  }
})
export default store;
