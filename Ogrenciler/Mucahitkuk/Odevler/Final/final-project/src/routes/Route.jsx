import { useRoutes } from "react-router-dom";
import Signup from "../views/Signup/Signup";
import Login from "../views/Login";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Productpage from "../views/Productpage";
import Cart from "../views/Cart";
import ProductDetailPage from "../views/ProductDetailPage";

const Route = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/Signup",
      element: <Signup />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Product",
      element: <Productpage />,
    },
    { path: "/404", element: <NotFound /> },
    {
      path: "/productsdetail/:productId",
      element: <ProductDetailPage />
    },
    {
      path: "/Cart",
      element: <Cart />
    }
  ]);
  return routes;
};

export default Route;
