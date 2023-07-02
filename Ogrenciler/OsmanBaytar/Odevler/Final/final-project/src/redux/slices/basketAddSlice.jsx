import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const basketAddSlice = createSlice({
  name: "basketAdd",
  initialState,
  reducers: {
    addBasketCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { addBasketCount } = basketAddSlice.actions;

export default basketAddSlice.reducer;
