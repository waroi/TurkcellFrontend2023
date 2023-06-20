import {configureStore} from '@reduxjs/toolkit'
import productsSlice from '../slices/productsSlice/productsSlice'

const store = configureStore({
  reducer: {
    products: productsSlice,
  }
})

export default store