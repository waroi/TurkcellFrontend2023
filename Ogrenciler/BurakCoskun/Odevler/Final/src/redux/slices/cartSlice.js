import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      const { userId, productId } = action.payload;
      if (state.cart.length > 0) {
        const existingItem = state.cart[0].products.find(
          (item) => item.productId === productId
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cart[0].products.push({ productId: productId, quantity: 1 });
        }
      } else {
        state.cart.push({
          userId: userId,
          products: [{ productId: productId, quantity: 1 }],
        });
      }
    },
    updateCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.map((item) => {
        return {
          ...item,
          products: item.products.filter(
            (product) => product.productId !== itemId
          ),
        };
      });
      if (state.cart[0].products.length === 0) {
        state.cart = [];
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCart, addToCart, updateCartItem, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
