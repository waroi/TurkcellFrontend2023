import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataReducer from "../slices/dataSlices";
import authReducer from "../slices/authSlices";
import cartReducer from "../slices/cartSlices";

const store = configureStore({
  reducer: {
    data: dataReducer,
    user: authReducer,
    cart: cartReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
