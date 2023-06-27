import { createSlice } from "@reduxjs/toolkit";
import { basketRequest } from "../../utils/Request";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      basketRequest.post(action.payload);
    },
    deleteBasket: (state, action) => {
      //   basketRequest.delete(action.payload);
      console.log("okey");
      console.log(action.payload);
    },
  },
});

export const { addBasket, deleteBasket } = basketSlice.actions;

export default basketSlice.reducer;
