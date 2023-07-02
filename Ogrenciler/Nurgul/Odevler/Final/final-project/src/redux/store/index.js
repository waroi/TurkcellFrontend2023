import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/user";
import searchReducer from "../slice/search";
import cartReducer from "../slice/cart";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    search: searchReducer,
  },
});
export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
export default store;
