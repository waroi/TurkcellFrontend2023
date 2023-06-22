import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailProduct: [],
  loading: false,
  error: null
}

const detailProductSlice = createSlice({
  name: 'detailProduct',
  initialState,
  reducers: {
    loadingDetailProduct: (state) => {
      state.loading = true;
    },

    getDetailProduct: (state, actions) => {
      state.loading = false;
      state.detailProduct = actions.payload;
      state.error = null;
    },
    errorDetailProduct: (state, actions) => {
      state.loading = false;
      state.detailProduct = [];
      state.error = actions.payload;
    }
  }
});

export const {loadingDetailProduct, getDetailProduct, errorDetailProduct} = detailProductSlice.actions;
export default detailProductSlice.reducer;