import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/usersSlice";
import loginReducer from "../slices/loginSlice";
import basketReducer from "../slices/basketSlice";
import basketAddReducer from "../slices/basketAddSlice";
import inputReducer from "../slices/inputSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    login: loginReducer,
    basket: basketReducer,
    basketAdd: basketAddReducer,
    input: inputReducer,
  },
});

export default store;
