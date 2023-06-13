import { configureStore } from "@reduxjs/toolkit";
import { jokeSlice } from "../slices/jokeSlice";

const store = configureStore({
  reducer: {
    jokes: jokeSlice,
  },
});

export default store;
