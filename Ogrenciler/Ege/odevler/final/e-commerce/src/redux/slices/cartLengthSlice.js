import { createSlice } from "@reduxjs/toolkit";

const cartLengthSlice = createSlice({
  name: "cartLength",
  initialState: 0,
  reducers: {
    setCartLength: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCartLength } = cartLengthSlice.actions;

export default cartLengthSlice.reducer;
