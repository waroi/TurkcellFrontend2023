import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/pokemon/:pokemonName", element: <Detail /> },
  ]);
  return routes;
};

export default Router;
