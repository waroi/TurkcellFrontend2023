import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      const index = state.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        state[index] = updatedProduct;
      }
    },
  },
});

export const { setProducts, updateProduct } = productSlice.actions;
export default productSlice.reducer;
