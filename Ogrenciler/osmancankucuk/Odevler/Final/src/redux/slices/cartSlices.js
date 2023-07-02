import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.rating.count <= existingItem.quantity) {
          return "stock-limit";
        } else {
          existingItem.quantity += 1;
        }
      } else {
        if (action.payload.rating.count > 0) {
          state.cart.push({ ...action.payload, quantity: 1 });
        } else {
          return "no-stock";
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.quantity > 0) {
        existingItem.quantity -= 1;
      }
      if (existingItem.quantity === 0) {
        state.cart = state.cart.filter((item) => item.id !== existingItem.id);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, getCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
