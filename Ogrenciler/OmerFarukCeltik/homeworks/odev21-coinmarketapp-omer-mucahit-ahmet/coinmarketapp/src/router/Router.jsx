import { useRoutes, Navigate } from "react-router-dom";
import FAQpage from "../components/FAQpage";
import AboutUs from "../components/AboutUs";
import Home from "../components/views/Home/Home";
import Coins from "../components/CoinsTable/Coins";
import CoinDetail from "../components/CoinDetail";
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
    { path: `/aboutus`, element: <AboutUs /> },
    { path: `/faq`, element: <FAQpage /> },
    { path: `*`, element: <NotFound /> },
  ]);
  return routes;
};

export default Router;
