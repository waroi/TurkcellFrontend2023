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
      console.log("okey");
      console.log(action.payload);
    },
    editBasket: (state, action) => {
      basketRequest.put(action.payload.id, action.payload);
    },
  },
});

export const { deleteBasket, editBasket } = basketSlice.actions;

export default basketSlice.reducer;
