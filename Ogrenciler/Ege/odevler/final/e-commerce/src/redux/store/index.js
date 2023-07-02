import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import searchReducer from "../slices/searchSlice";
import cartLengthReducer from "../slices/cartLengthSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    cartLength: cartLengthReducer,
  },
});

export default store;
