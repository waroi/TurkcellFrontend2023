import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketCount: null,
};

export const basketCountSlice = createSlice({
  name: "basketCount",
  initialState,
  reducers: {
    setBasketCount: (state, action) => {
        state.basketCount =  action.payload;
    },
  },
});




export const { setBasketCount } = basketCountSlice.actions;

export default basketCountSlice.reducer;