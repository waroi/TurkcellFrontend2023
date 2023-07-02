import { createSlice } from '@reduxjs/toolkit'


export const adminSlice = createSlice({
 name: 'admin',
 initialState: {
  adminMode: false,
 },
 reducers: {
  mode(state) {
   state.adminMode = !state.adminMode
  },
 },
})

export const { mode } = adminSlice.actions

export default adminSlice.reducer