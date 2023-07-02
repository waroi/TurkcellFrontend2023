import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadingAllProducts: (state) => {
      state.loading = true;
    },
    getAllProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    setUpdateProduct: (state, action) => {
      state.loading = false;
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      }
      );
    },
    errorAllProducts: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = []
    },
    updateStockInCart: (state, action) => {
      const {productId, newStock} = action.payload;
      state.products = state.products.map((product) => {
        if (product.id === productId) {
          return {...product, stock: newStock};
        }
        return product;
      });
    }
  },
});

export const {loadingAllProducts, setUpdateProduct, getAllProducts, errorAllProducts} = productsSlice.actions;

export default productsSlice.reducer;
