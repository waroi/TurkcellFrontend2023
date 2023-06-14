import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slices/categorySlice";
import randomJokeReducer from "../slices/randomJokeSlice";
import searchJokeReducer from "../slices/searchSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    randomJoke: randomJokeReducer,
    searchJoke: searchJokeReducer,
  },
});

export default store;
