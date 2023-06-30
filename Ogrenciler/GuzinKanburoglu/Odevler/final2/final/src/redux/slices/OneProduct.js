import { createSlice } from "@reduxjs/toolkit";

const productOneSlice = createSlice({
    name: 'productOne',
    initialState: {
      selectedProductId: null,
    },
    reducers: {
      setSelectedProduct: (state, action) => {
        state.selectedProductId = action.payload;
      },
    },
  });
  
  export const { setSelectedProduct } = productOneSlice.actions;
  export default productOneSlice.reducer;