import { useRoutes } from "react-router-dom";
import HomeView from "../components/Home/HomeView";
import Products from "../components/Products/Products";
import Error from "../components/Error/Error";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Contact from "../components/Contact/Contact";
import { Navigate } from "react-router-dom";

const Router = () => {
  let isAuth = JSON.parse(localStorage.getItem("isAuth"));

  if (!isAuth) {
    isAuth = { isOnline: false };
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    {
      path: "/products",
      element: isAuth.isOnline ? <Products /> : <Navigate to="/login" />,
    },
    {
      path: "/:id",
      element: isAuth.isOnline ? <ProductDetail /> : <Navigate to="/login" />,
    },

    { path: "/error", element: <Error /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "/contact", element: <Contact /> },
  ]);
  return routes;
};

export default Router;
