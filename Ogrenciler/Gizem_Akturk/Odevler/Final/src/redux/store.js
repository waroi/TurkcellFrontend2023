import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';
import { fetchProductsReducer, getProductReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null;

const cartFromStorage = localStorage.getItem('cart') ?
  JSON.parse(localStorage.getItem('cart')) : [];

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  fetchProducts: fetchProductsReducer,
  fetchProduct: getProductReducer,
  cart: cartReducer,
});

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  cart: { cart: cartFromStorage },
};

const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
});

export default store;
