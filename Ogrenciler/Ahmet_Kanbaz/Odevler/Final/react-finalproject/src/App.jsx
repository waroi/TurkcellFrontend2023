import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchAllUsers } from "./utils/request";
import { setFilteredProducts } from "./redux/slices/filterSlice/filterSlice";
import { setCart } from "./redux/slices/cartSlice/cartSlice";
import { setUser } from "./redux/slices/usersSlice/userSlice";
import {fetchLoginUser} from './utils/request'

function App() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const allUsers = useSelector((state) => state.user.allUsers);
  
  const getSingleUserFromLocaleStorage = async (id) => {
    const response = await fetchLoginUser(id);
    dispatch(setCart(response.cart));
    localStorage.setItem("isLogin", JSON.stringify(response));
  }

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchAllProducts());
    }
    dispatch(setFilteredProducts(allProducts));
    if (allUsers.length === 0) {
      dispatch(fetchAllUsers());
    }
    const user = localStorage.getItem("isLogin");
    if (user) {
      const parsedUser = JSON.parse(user);
      dispatch(setUser(parsedUser));
      getSingleUserFromLocaleStorage(parsedUser.id)
    }

  }, [allProducts]);
  
  return (
    <>
      <GlobalStyle />
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
