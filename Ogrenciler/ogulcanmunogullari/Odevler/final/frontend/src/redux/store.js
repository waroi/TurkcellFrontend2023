import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slicers/userSlice'
import adminReducer from './Slicers/adminSlice'


export const store = configureStore({
 reducer: {
  user: userReducer,
  admin: adminReducer,
 },
})