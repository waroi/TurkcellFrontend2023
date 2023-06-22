import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: false,
  error: null
}

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loading4Fetch: (state) => {
      state.loading = true;
    },
    getAllProducts: (state, actions) => {
      state.loading = false;
      state.products = actions.payload;
      state.error = null;
    },
    error4Fetch: (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
      state.products = [];
    }
  }
});

export const {loading4Fetch, getAllProducts, error4Fetch} = productsSlice.actions;
export default productsSlice.reducer;