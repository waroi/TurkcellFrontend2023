import { useRoutes } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView.jsx";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
  ]);

  return routes;
};

export default Router;
