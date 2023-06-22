import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../Views/HomeView";
import BtnView from "../Components/Buttons/BtnView";
import CategoryView from "../Views/CategoryView";

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
  ]);
  return routes;
};

export default Router;
