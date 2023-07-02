import { createSlice } from '@reduxjs/toolkit'
import FetchTool from '../../utils/fetchTool'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    name: null,
    username: null,
    password: null,
    email: null,
    isAdmin: null,
    img: null,
    cart: [],
  },
  reducers: {
    login(state, { payload }) {
      state = { ...payload }
      return state
    },
    logout(state) {
      state.id = null
      state.name = null
      state.username = null
      state.password = null
      state.email = null
      state.isAdmin = null
      state.img = null
      state.cart = []
      return state
    },
    addOrChangeToCart(state, { payload }) {
      state.cart = [...state.cart, payload]
      FetchTool.addOrChangeToCart(state)
      return state
    },
    changeCart(state, { payload }) {
      state.cart = [...payload]
      FetchTool.addOrChangeToCart(state)
      return state
    },
    changeQuantity(state, { payload }) {
      const item = state.cart.find((item) => item.id == payload.id)
      item.quantity = payload.quantity
      FetchTool.addOrChangeToCart(state)
      return state
    },
    removeFromCart(state, { payload }) {
      state.cart = state.cart.filter((item) => item.id !== payload.id)
      FetchTool.addOrChangeToCart(state)
      return state
    },
    takeCart(state) {
      state.cart = [];
      return state
    }
  },
})

export const { login, logout, addOrChangeToCart, changeQuantity, takeCart, removeFromCart, changeCart } = userSlice.actions

export default userSlice.reducer