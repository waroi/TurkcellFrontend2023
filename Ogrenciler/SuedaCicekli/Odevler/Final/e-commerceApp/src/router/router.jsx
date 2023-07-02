
import { useRoutes, Navigate } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import LoginPage from "../pages/login/loginPage";
import RegisterPage from "../pages/register/registerPage";
import NotFound from "../pages/notfound/notFound";
import ProductPage from "../pages/product/productPage";
import ProductDetailPage from "../pages/productDetail/productDetailPage";


const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/product", element: <ProductPage /> },
    {
      path: "/product/:id",
      element: <ProductDetailPage />,
    },
    { path: "/404", element: <NotFound /> },

  ]);
  return routes;
};

export default Router;