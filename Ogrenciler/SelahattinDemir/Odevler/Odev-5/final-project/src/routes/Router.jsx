import { useRoutes } from "react-router-dom";
import RegisterView from "../views/RegisterView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import DetailView from "../views/DetailView";
import Category from "../views/CategoryView";
import NotFound from "../views/NotFound";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/register",
      element: <RegisterView />,
    },
    {
      path: "/login",
      element: <LoginView />,
    },
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/:id",
      element: <DetailView />,
    },
    {
      path: "/category",
      element: <Category />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default Router;
