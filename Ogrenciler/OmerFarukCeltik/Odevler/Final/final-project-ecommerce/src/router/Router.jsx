import {  useRoutes } from "react-router-dom";
import Login from "../pages/login/Login";
import Singup from "../pages/signup/Singup";
import HomePage from "../pages/HomePage/HomePage";
import Products from "../pages/Products/Products";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import { useSelector } from "react-redux";
import UserBasket from "../pages/UserBasket/UserBasket";
import NotFound from "../pages/NotFound/NotFound";
const Router = () => {

  const data = useSelector((state) => state.users).currentlyLoggedIn;
  const routes = useRoutes([
    {
      path: `/`,
      element:<HomePage/> ,
    },
    {
      path: `/products`,
      element:data?.isLoggedIn ? <Products/> : <Login/>,
    },
    {
      path: `/signup`,
      element: data?.isLoggedIn ? <HomePage/> :<Singup/> ,
    },
    {
      path: `/login`,
      element: data?.isLoggedIn ? <HomePage/> :<Login/> ,
    },
    {
      path: `/card`,
      element:data?.isLoggedIn ? <UserBasket/> : <Login/> ,
    },
    {
      path: `/addproduct`,
      element:data?.isAdmin ? <AddProduct/> : <Login/> ,
    },
    {
      path: `/about`,
      element: <NotFound/> ,
    },
    {
      path: `/contact`,
      element: <NotFound/> ,
    },
    { path: "/products/:id", element:data?.isLoggedIn ? <ProductDetail/> :<Login/> },
    { path: `*`, element: <NotFound/> },
  ]);
  return routes;
};

export default Router;
