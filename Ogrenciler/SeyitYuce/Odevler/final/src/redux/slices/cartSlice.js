import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setUserCart: (state, action) => {
      const { userId, cart } = action.payload;
      state[userId] = cart;
    },
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    updateCart: (state, action) => {
      const { userId, updatedCart } = action.payload;
      state[userId] = updatedCart;
    },
    clearCart: (state, action) => {
      const { userId } = action.payload;
      state[userId] = [];
    },
  },
});

export const { setUserCart, addToCart, updateCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
