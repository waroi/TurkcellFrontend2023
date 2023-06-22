import {configureStore} from '@reduxjs/toolkit'
import productsSlice from '../slices/productsSlice/productsSlice'
import detailProductSlice from '../slices/productDetailSlice/detailProductSlice'

const store = configureStore({
  reducer: {
    products: productsSlice,
    detailProduct: detailProductSlice
  }
})

export default store