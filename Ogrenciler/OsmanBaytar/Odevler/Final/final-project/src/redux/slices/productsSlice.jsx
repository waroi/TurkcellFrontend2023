import { createSlice } from "@reduxjs/toolkit";
import { productRequest } from "../../utils/Request";
import { useState, useEffect } from "react";

// const [realProducts, setRealProducts] = useState([]);

// useEffect(() => {
//   productRequest
//     .get()
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => console.log(err));
// }, []);

// const initialState = {
//   products: [],
// };

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export default productsSlice.reducer;
