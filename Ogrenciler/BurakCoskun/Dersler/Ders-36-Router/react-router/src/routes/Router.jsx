import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import userRouter from "./userRouter";
import ParametreView from "../views/ParametreView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
  ]);
  return routes;
};

export default Router;
