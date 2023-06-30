import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.products = action.payload;
    }
  },
});

export const { setList } = productSlice.actions;

export default productSlice.reducer;