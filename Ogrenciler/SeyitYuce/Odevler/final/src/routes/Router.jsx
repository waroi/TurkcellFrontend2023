import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../Views/HomeView";
import BtnView from "../Components/Buttons/BtnView";
import CategoryView from "../Views/CategoryView";
import Login from "../Views/Login";
import SignUp from "../Views/SingUp";

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
      path: "/category",
      element: <CategoryView />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return routes;
};

export default Router;
