import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setUserCart: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    updateCart: (state, action) => {
      const { userId, updatedCart } = action.payload;
      state[userId] = updatedCart;
    },
    updateCartItems: (state, action) => {
      const updatedItems = action.payload;
      return updatedItems;
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity = quantity;
      }
    },
    clearCart: (state, action) => {
      const { userId } = action.payload;
      state[userId] = [];
    },
  },
});

export const {
  setUserCart,
  addToCart,
  updateCart,
  updateCartItems,
  updateCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
