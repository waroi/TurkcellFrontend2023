import { useRoutes } from "react-router-dom";
import RegisterView from "../views/RegisterView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import DetailView from "../views/DetailView";
import NotFound from "../views/NotFound";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <RegisterView />,
    },
    {
      path: "/login",
      element: <LoginView />,
    },
    {
      path: "/home",
      element: <HomeView />,
    },
    {
      path: "/coins/:id",
      element: <DetailView />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default Router;
