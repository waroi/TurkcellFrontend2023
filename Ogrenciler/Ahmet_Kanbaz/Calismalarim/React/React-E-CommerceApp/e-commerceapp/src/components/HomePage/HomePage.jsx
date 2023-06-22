import Carousel from "../Carousel/Carousel"
import FilterItems from "../FilterItems/FilterItems"
import AllProducts from "../Products/AllProducts/AllProducts"
import { useEffect } from "react"
import {getAllProducts4API} from '../../services/api'
import { useSelector} from 'react-redux'

const HomePage = () => {
  const products = useSelector(state => state.products)

  useEffect(() => {
    getAllProducts4API()
  }, [])
  return (
    <div>
      {
        console.log(products)
      }
      <Carousel />
      <FilterItems />
      <AllProducts />
    </div>
  )
}

export default HomePage
