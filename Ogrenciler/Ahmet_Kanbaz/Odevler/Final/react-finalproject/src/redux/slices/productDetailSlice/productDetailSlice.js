import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailProduct: {},
  loading: false,
  error: null
}

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    loadingDetailProduct: (state) => {
      state.loading = true
    },
    getDetailProduct: (state, action) => {
      state.loading = false;
      state.detailProduct = action.payload;
    },
    errorDetailProduct: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.detailProduct = {}
    }
  }
})

export const {loadingDetailProduct, getDetailProduct, errorDetailProduct} = productDetailSlice.actions;

export default productDetailSlice.reducer;