import {configureStore} from '@reduxjs/toolkit'
import productsSlice from '../slices/productsSlice/fetchProducts'

const store = configureStore({
  reducer: {
    productsSlice,
  }
})

export default store