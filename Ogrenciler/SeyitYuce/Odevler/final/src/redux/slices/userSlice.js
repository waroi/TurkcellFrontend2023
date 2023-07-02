import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userSlice = createSlice({
  name: "user",
  initialState: {
    cart: [],
  },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    clearUser: (state) => {
      Cookies.remove("user");
      return null;
    },
  },
});

export const { setUser, addToCart, clearUser } = userSlice.actions;
export default userSlice.reducer;
