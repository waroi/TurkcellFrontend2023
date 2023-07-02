import { createSlice } from "@reduxjs/toolkit";
import request from "../../utils/request";
import { getProducts } from "./productSlice";

const initialState = {
  basket: [],
  loading: false,
  error: null,
};

export const fetchBasket = (userId) => async (dispatch) => {
  dispatch(fetchBasketStart());

  try {
    const response = await request.getRequest(`http://localhost:3000/baskets?userId=${userId}`);
    dispatch(fetchBasketSuccess(response));
    dispatch(getProducts());
  } catch (error) {
    dispatch(fetchBasketFailure(error.message));
  }
};

export const addItemToBasket = (item, userId) => async (dispatch) => {
  try {
    await request.postRequest("http://localhost:3000/baskets", item);
    dispatch(fetchBasket(userId));
  } catch (error) {
    dispatch(fetchBasketFailure(error.message));
  }
};

export const removeItemFromBasket = (id, userId) => async (dispatch) => {
  try {
    await request.deleteRequest(`http://localhost:3000/baskets/${id}`);
    dispatch(fetchBasket(userId));
  } catch (error) {
    dispatch(fetchBasketFailure(error.message));
  }
};

export const updateItemInBasket = (item, userId) => async (dispatch) => {
  try {
    await request.putRequest(`http://localhost:3000/baskets/${item.id}`, item);
    dispatch(fetchBasket(userId));
  } catch (error) {
    dispatch(fetchBasketFailure(error.message));
  }
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    fetchBasketStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBasketSuccess: (state, action) => {
      state.loading = false;
      state.basket = action.payload;
    },
    fetchBasketFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setBasket: (state, action) => {
      state.basket = action.payload;
    }

  },
});

export const { fetchBasketStart, fetchBasketSuccess, fetchBasketFailure, setBasket } = basketSlice.actions;
export default basketSlice.reducer;
