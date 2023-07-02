import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCartLoading, fetchCartFailure, fetchCartSuccess } =
  cartSlice.actions;

export const fetchCart = () => {
  return async (dispatch) => {
    dispatch(fetchCartLoading());
    try {
      const response = await fetch("http://localhost:3001/carts");
      const data = await response.json();
      dispatch(fetchCartSuccess(data));
    } catch (error) {
      dispatch(fetchCartFailure(error.message));
    }
  };
};

export default cartSlice.reducer;
