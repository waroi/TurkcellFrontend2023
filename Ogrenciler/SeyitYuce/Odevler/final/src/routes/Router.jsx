import { useRoutes } from "react-router-dom";
import HomeView from "../Views/HomeView";
import BtnView from "../Components/Buttons/BtnView";
import AllProductsView from "../Views/AllProductsView";
import Login from "../Views/Login";
import SignUp from "../Views/SingUp";
import ProductDetails from "../Views/ProductDetailsView";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/buttons",
      element: <BtnView />,
    },
    {
      path: "/products",
      element: <AllProductsView />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "products/:category/:id",
      element: <ProductDetails />,
    },
  ]);
  return routes;
};

export default Router;
