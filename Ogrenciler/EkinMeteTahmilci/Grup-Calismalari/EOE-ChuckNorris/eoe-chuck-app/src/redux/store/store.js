import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slices/categorySlice";
import randomJokeReducer from "../slices/randomJokeSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    randomJoke: randomJokeReducer,
  },
});

export default store;
