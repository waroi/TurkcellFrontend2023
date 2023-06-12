import { useRoutes } from "react-router-dom";
import Home from "../Components/Home/Home";
import CoinDetail from "../Components/detailPage/CoinDetail";
import News from "../Components/News/News";
import About from "../Components/About/About";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/detail/:id", element: <CoinDetail /> },
    { path: "/news", element: <News /> },
    { path: "/about", element: <About /> },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);
  return routes;
};

export default Router;
