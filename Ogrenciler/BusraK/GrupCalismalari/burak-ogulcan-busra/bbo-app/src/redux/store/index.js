import { configureStore } from "@reduxjs/toolkit";
import jokeSliceReducer from "../slices/jokeSlice";

const store = configureStore({
  reducer: {
    joke: jokeSliceReducer,
  },
});

export default store;
