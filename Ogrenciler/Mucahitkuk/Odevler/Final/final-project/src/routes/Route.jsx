import { useRoutes } from "react-router-dom";
import Signup from "../views/Signup/Signup";
import Login from "../views/Login";
import Home from "../views/Home";
import Productdetail from "../views/Productdetail";
import NotFound from "../views/NotFound";
import Productpage from "../views/Productpage";
import Cart from "../views/Cart";

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
      path: "/:id",
      element: <Productdetail />,
    },
    {
      path: "/Cart",
      element: <Cart />
    }
  ]);
  return routes;
};

export default Route;
