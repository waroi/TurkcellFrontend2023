import { createSlice } from "@reduxjs/toolkit";
import { basketRequest } from "../../utils/Request";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    deleteBasket: (state, action) => {
      basketRequest.delete(action.payload);
      console.log(action.payload);
    },
  },
});

export const { deleteBasket } = basketSlice.actions;

export default basketSlice.reducer;
