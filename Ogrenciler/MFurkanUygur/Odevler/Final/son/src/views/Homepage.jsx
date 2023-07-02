import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { getData } from '../redux/slices/processData';
import AllProducts from "../components/AllProducts/AllProducts";
import { fetchAllProduct } from "../request/productRequest";
const Homepage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllProduct().then(data => dispatch(getData(data)))
  }, [])

  return (
    <>
      <AllProducts />
    </>

  )
}

export default Homepage