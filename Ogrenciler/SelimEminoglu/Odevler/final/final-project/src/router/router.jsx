import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";
import CartsPage from "../pages/CartsPage";
import Products from "../pages/Products";
import ProductsDetail from "../pages/ProductsDetail";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/carts", element: <CartsPage /> },
    { path: "/products", element: <Products /> },
    { path: "/products/:id", element: <ProductsDetail /> },
  ]);
  return routes;
};

export default Router;
