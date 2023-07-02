// Redux Toolkit'un configureStore kullanılarak bir store oluşturma
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";

const store = configureStore({
  reducer: rootReducer,
});

export default store;