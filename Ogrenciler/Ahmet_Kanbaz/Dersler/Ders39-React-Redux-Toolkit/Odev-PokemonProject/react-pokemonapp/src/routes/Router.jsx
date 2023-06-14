import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";
import NotFound from "../components/notFound/NotFound";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/pokemon/:pokemonName", element: <Detail /> },
    { path: "*", element: <NotFound /> },
    { path: "/pokemon", element: <Home /> },

  ]);
  return routes;
};

export default Router;
