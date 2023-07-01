import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { getData } from '../redux/slices/processData';
import AllProducts from "../components/AllProducts/AllProducts";
import { fetchAllProduct } from "../request/productRequest";
const Homepage = () => {

  const dispatch = useDispatch();

  // const loggedUser = useSelector((state) => state.getProcessName.mainDataArray);
  // const loggedUser = useSelector((state) => state.setLoggedUser);
  // const userIsAdmin = useSelector((state) => state?.setLoggedUser?.isAdminLog)
  // console.log("isAdmin",userIsAdmin)
  // console.log("giriş yapan kullancıı",loggedUser)
  useEffect(() => {
    fetchAllProduct().then(data => dispatch(getData(data)))
  }, [])

  return (
    <>
      {/* <Slider /> */}
      <AllProducts />
    </>

  )
}

export default Homepage