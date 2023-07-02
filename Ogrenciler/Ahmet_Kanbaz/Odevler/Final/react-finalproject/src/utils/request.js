import axios from 'axios'
import { loadingAllProducts, getAllProducts, errorAllProducts } from '../redux/slices/productsSlice/productsSlice'
import { loadingDetailProduct, getDetailProduct, errorDetailProduct } from '../redux/slices/productDetailSlice/productDetailSlice';
import { setAllUsers, setErrorUsers } from '../redux/slices/usersSlice/userSlice';

const apiUrl = 'http://localhost:3000';

export const fetchAllProducts = () => async (dispatch) => {
  dispatch(loadingAllProducts())
  try {
    const response = await axios.get(`${apiUrl}/products`)
    dispatch(getAllProducts(response.data))
  }
  catch (error) {
    dispatch(errorAllProducts(error.message))
  }
}

export const fetchDetailProduct = (id) => async (dispatch) => {
  dispatch(loadingDetailProduct())
  try {
    const response = await axios.get(`${apiUrl}/products/${id}`)
    dispatch(getDetailProduct(response.data))
  }
  catch (error) {
    dispatch(errorDetailProduct(error.message))
  }
}

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/users`)
    dispatch(setAllUsers(response.data))
  }
  catch (error) {
    dispatch(setErrorUsers(error.message))
  }
}

export const fetchLoginUser = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/users/${id}`);
    return response.data
  }
  catch (error) {
    return error.message
  }
}

export const getProductsStock = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/products/${id}`)
    return response.data.rating.count
  }
  catch (error) {
    return error.message
  }
}