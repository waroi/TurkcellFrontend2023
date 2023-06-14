import { useRoutes } from "react-router-dom";
import Home from "../views/Home";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);
  return routes;
};

export default Router;
