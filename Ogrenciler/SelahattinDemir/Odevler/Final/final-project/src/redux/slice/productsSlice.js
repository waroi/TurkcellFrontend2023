import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Request from "../../utils/Request";

const request = new Request("http://localhost:3004/products");

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await request.get();
    return response;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData) => {
    const response = await request.post(productData);
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (updatedProduct) => {
    const { id, ...productData } = updatedProduct;
    await request.put(`/${id}`, productData);
    return updatedProduct;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await request.delete(`/${id}`);
    return id;
  }
);

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const { id } = action.payload;
        const existingProduct = state.products.find(
          (product) => product.id === id
        );
        if (existingProduct) {
          existingProduct.name = action.payload.name;
          existingProduct.price = action.payload.price;
          existingProduct.description = action.payload.description;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const { id } = action.payload;
        const existingProduct = state.products.find(
          (product) => product.id === id
        );
        if (existingProduct) {
          state.products = state.products.filter(
            (product) => product.id !== id
          );
        }
      });
  },
});

export default productSlice.reducer;
