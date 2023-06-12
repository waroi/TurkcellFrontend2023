import { useRoutes, Navigate } from "react-router-dom";
import Home from "../components/views/Home/Home";
import Coins from "../components/CoinsTable/Coins";
import CoinDetail from "../components/CoinDetail/CoinDetail";
import NotFound from "../components/views/404/NotFound";
const Router = () => {
  const routes = useRoutes([
    {
      path: `/`,
      element: <Home />,
    },
    {
      path: `/coinpage`,
      element: <Coins />,
    },
    { path: "/:id", element: <CoinDetail /> },
    { path: `*`, element: <NotFound /> },
  ]);
  return routes;
};

export default Router;
