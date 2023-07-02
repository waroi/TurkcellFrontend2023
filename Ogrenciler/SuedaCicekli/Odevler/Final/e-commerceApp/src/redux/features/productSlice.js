import { createSlice } from "@reduxjs/toolkit";
import request from "../../utils/request";

const initialState = {
  products: [],
  productSearch: "",
  selectedCategory: "All",
  loading: true,
};

export const getProducts = () => async (dispatch) => {
  try {
    const response = await request.getRequest("http://localhost:3000/products");
    dispatch(setProductsList(response));
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    await request.putRequest(
      `http://localhost:3000/products/${product.id}`,
      product
    );
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsList: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
  },
});

export const { setProductsList } = productsSlice.actions;
export default productsSlice.reducer;
