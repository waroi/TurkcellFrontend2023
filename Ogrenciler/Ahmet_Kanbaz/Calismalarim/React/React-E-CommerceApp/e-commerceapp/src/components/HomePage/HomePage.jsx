import Carousel from "../Carousel/Carousel"
import FilterItems from "../FilterItems/FilterItems"
import AllProducts from "../Products/AllProducts/AllProducts"
import { useEffect } from "react"
import {getAllProducts4API} from '../../services/api'

const HomePage = () => {

  useEffect(() => {
    getAllProducts4API()
  }, [])
  return (
    <div>
      <Carousel />
      <FilterItems />
      <AllProducts />
    </div>
  )
}

export default HomePage
