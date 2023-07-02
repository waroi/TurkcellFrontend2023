import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: {},
    cartItemsCount: 0,
  },
  reducers: {
    updateCart(state, action) {
      const { userId, items } = action.payload;
      state.carts[userId] = items;
      const uniqueItemCount = new Set(items.map((item) => item.id)).size;
      state.cartItemsCount = uniqueItemCount;
    },

    addToCart: (state, action) => {
      const { userId, item } = action.payload;
      const cart = state.carts[userId] || [];
      const existingItemIndex = cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += item.quantity;
      } else {
        cart.push(item);
      }
      state.carts[userId] = cart;
    },

    setCartItemsCount: (state, action) => {
      state.cartItemsCount = action.payload;
    },

    incrementCartItem: (state, action) => {
      const { userId, itemId } = action.payload;
      const cart = state.carts[userId] || [];
      const existingItem = cart.find((cartItem) => cartItem.id === itemId);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decrementCartItem: (state, action) => {
      const { userId, itemId } = action.payload;
      const cart = state.carts[userId] || [];
      const existingItem = cart.find((cartItem) => cartItem.id === itemId);
      if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity === 0) {
          state.carts[userId] = cart.filter(
            (cartItem) => cartItem.id !== itemId
          );
        }
      }
    },
    removeItemsFromCart: (state, action) => {
      const { userId, itemIds } = action.payload;
      const cart = state.carts[userId] || [];
      state.carts[userId] = cart.filter((item) => !itemIds.includes(item.id));
    },
  },
});

export const {
  addToCart,
  incrementCartItem,
  decrementCartItem,
  updateCart,
  removeItemsFromCart,
  setCartItemsCount,
} = cartSlice.actions;
export default cartSlice.reducer;
