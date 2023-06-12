import { useRoutes } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView.jsx";
import DetailView from '../views/DetailView/DetailView.jsx'

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },

    {
      path: "/coins/:name", element: <DetailView />
    
    }
  ]);

  return routes;
};

export default Router;
