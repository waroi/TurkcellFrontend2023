import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productsSlice";
import loginReducer from "../slice/loginSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    login: loginReducer,
  },
});

export default store;
