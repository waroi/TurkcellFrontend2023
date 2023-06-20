import axios from 'axios'
import store from '../redux/store/store';
import {loading4Fetch, getAllProducts, error4Fetch} from '../redux/slices/productsSlice/productsSlice'
import dotenv from 'dotenv'
dotenv.config()

const options = {
  method: 'GET',
  url: 'https://sephora.p.rapidapi.com/products/v2/detail',
  headers: {
    'X-RapidAPI-Key': 'a00042e7e2msh577d9c138893f2dp1a3eaajsned4e60a07f10',
    'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
  }
};

export const getAllProducts4API = async () => {
  store.dispatch(loading4Fetch())
  try {
    const response = await axios.request(options);
    store.dispatch(getAllProducts(response.data));
  } catch (error) {
    store.dispatch(error4Fetch(error));
  }

  console.log(process.env.REACT_APP_RAPIDAPI_KEY)
}