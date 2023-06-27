import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/usersSlice";
import loginReducer from "../slices/loginSlice";
import basketReducer from "../slices/basketSlice";
import basketAddReducer from "../slices/basketAddSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    login: loginReducer,
    basket: basketReducer,
    basketAdd: basketAddReducer,
  },
});

export default store;
