import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import blogReducer from "../slices/blogSlice";
import userReducer from "../slices/userSlice";
import basketReducer from "../slices/basketSlice";

const store = configureStore({
	reducer: {
		product: productReducer,
		blog: blogReducer,
		user: userReducer,
		basket: basketReducer,
	},
});

export default store;
