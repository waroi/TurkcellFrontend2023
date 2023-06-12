import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import CoinDetail from "../views/CoinDetail/CoinDetail";
import NotFound from "../views/NotFound/NotFound";

const Router = () => {
  const router = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/coins", element: <Home /> },
    { path: "/coins/:id", element: <CoinDetail /> },
    { path: "*", element: <NotFound /> },
  ]);
  return router;
};

export default Router;
