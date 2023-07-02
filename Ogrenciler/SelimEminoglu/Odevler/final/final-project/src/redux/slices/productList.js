import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductLoading, fetchProductFailure, fetchProductSuccess } =
  productSlice.actions;

export const fetchProduct = () => {
  return async (dispatch) => {
    dispatch(fetchProductLoading());
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      dispatch(fetchProductSuccess(data));
    } catch (error) {
      dispatch(fetchProductFailure(error.message));
    }
  };
};

export default productSlice.reducer;
