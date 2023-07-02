import { useRoutes, Navigate } from "react-router-dom";
import HomePage from "../views/HomePage/HomePage";
import LoginPage from "../views/LoginPage/LoginPage";
import SignUpPage from "../views/SignUpPage/SignUpPage";
import ProductsPage from "../views/ProductsPage/ProductsPage";
import ProductDetailPage from "../views/ProductDetailPage/ProductDetailPage";
import CartPage from "../views/CartsPage/CartsPage";
const Router = () => {
  const routes = useRoutes([
    {
      path: "/Home/:username",
      element: <HomePage />,
    },
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },

    {
      path: "/home/:username/products",
      element: <ProductsPage />,
    },
    {
      path: "/home/:username/products/:id",
      element: <ProductDetailPage />,
    },
    {
      path: "/home/:username/cart",
      element: <CartPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
};

export default Router;
