import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView.jsx";
import UserView from "../views/UserView.jsx";
import userRouter from "./userRouter.jsx";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView/>
    },
    
  ]);
  return routes
};

export default Router;
