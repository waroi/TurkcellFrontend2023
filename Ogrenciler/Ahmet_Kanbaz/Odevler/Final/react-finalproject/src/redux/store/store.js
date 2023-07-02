import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../slices/productsSlice/productsSlice'
import productDetailReducer from '../slices/productDetailSlice/productDetailSlice'
import userReducer from '../slices/usersSlice/userSlice'
import filterReducer from '../slices/filterSlice/filterSlice'
import cartReducer from '../slices/cartSlice/cartSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    detailProduct: productDetailReducer,
    user: userReducer,
    filter: filterReducer,
    cart: cartReducer
  }
})

export default store