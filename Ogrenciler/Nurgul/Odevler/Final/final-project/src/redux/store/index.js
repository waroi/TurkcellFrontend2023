import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/user";
import searchReducer from "../slice/search";
const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});

export default store;
