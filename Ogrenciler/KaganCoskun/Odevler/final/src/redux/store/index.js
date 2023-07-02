import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "../slices/userInfoSlice";
import searchReducer from "../slices/searchSlice";
import basketCountReducer from "../slices/basketCountSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    search: searchReducer,
    basketCount: basketCountReducer,
    
  },
});

export default store;