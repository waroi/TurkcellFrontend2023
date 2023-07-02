import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  error: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload.id)
    },
    clearCart: (state) => {
      state.cart = []
    },
    setCart: (state, action) => {
      state.cart = action.payload
    },
    setCartError: (state, action) => {
      state.error = action.payload
    },
    setUpdateProductQuantityInCart: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload
        }
        return item
      })
    }
  }
})

export const { addToCart, removeFromCart, clearCart, setCart, setCartError, setUpdateProductQuantityInCart} = cartSlice.actions

export default cartSlice.reducer