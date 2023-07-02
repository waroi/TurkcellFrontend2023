import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices/mainSlice";
import { useDispatch } from "react-redux";
import cartReducer from "../slices/cartSlice";
const store = configureStore({
  reducer: { root: rootReducer, cart: cartReducer },
});

export const updateUsername = (username) => {
  store.dispatch({ type: "SET_USERNAME", payload: username });
};

export default store;
