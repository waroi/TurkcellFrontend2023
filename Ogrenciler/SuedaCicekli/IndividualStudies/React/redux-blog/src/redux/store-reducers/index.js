import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../slices-actions/blogSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;
