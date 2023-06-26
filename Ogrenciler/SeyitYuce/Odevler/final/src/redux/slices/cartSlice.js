import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    setCarts: (state, action) => {
      return action.payload;
    },
    updateCart: (state, action) => {
      return action.payload;
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const { setCarts, updateCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
