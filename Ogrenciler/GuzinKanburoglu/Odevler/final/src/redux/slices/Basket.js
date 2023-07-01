import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basketItems: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.basketItems = action.payload;
    },
    addToBasket: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.basketItems.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.basketItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromBasket: (state, action) => {
      state.basketItems = state.basketItems.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.basketItems.find(item => item.id === id);
      
      if (item) {
        item.quantity = quantity;
      }
    }
  },
});

export const { addToBasket, removeFromBasket, setBasket, updateQuantity } = basketSlice.actions;

export default basketSlice.reducer;
