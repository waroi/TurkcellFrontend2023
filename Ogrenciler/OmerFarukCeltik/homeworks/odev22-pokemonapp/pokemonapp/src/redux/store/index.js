import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../slices/cardSlice";

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;
