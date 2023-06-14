import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);
  return routes;
};

export default Router;
