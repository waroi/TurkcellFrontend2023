import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/detail/:name",
      element: <Detail />,
    },
  ]);
  return routes;
};

export default Router;
