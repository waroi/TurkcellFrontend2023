import axios from 'axios'
import store from '../redux/store/store';
import {loading4Fetch, getAllProducts, error4Fetch} from '../redux/slices/productsSlice/productsSlice'
import { loadingDetailProduct, getDetailProduct, errorDetailProduct } from '../redux/slices/productDetailSlice/detailProductSlice';

const allProductsUrl = 'https://sephora.p.rapidapi.com/products/v2/list';
const headers = {
  'X-RapidAPI-Key': 'a00042e7e2msh577d9c138893f2dp1a3eaajsned4e60a07f10',
  'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
};

export const getAllProducts4API = async () => {
  store.dispatch(loading4Fetch())
  try {
    const response = await axios.get(allProductsUrl, {
      headers: headers,
    });
    store.dispatch(getAllProducts(response.data));
  } catch (error) {
    store.dispatch(error4Fetch(error));
  }
}

export const getDetailProduct4API = async (id) => {
  store.dispatch(loadingDetailProduct());
  try {
    const response = await axios.get(`https://sephora.p.rapidapi.com/products/v2/detail`, {
      params: {
        id: id
      },
      headers: headers
    });
    store.dispatch(getDetailProduct(response.data));
  }
  catch (error) {
    store.dispatch(errorDetailProduct);
  }
}

export const getProducts4Filter = async () => {
  try {
    const response = await axios.get(allProductsUrl, {
      headers: headers,
    })
    return response.data;
  }
  catch(error) {
    return error;
  }
}