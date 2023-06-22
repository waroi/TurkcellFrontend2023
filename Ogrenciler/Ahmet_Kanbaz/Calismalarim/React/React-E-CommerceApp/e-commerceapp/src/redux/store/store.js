import {configureStore} from '@reduxjs/toolkit'
import productsSlice from '../slices/productsSlice/productsSlice'
import detailProductSlice from '../slices/productDetailSlice/detailProductSlice'
import filterReducer from '../filter/filterReducer'

const store = configureStore({
  reducer: {
    products: productsSlice,
    detailProduct: detailProductSlice,
    filter: filterReducer
  }
})

export default store