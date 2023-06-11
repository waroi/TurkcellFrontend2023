import { useRoutes, Navigate } from "react-router-dom";

import HomeView from "../views/HomeView/HomeView.jsx";
import DetailView from '../views/DetailView/DetailView.jsx'

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },

    {
      path: "/coins/:id", element: <DetailView />
      // children: [
      //   { index: true, element: <Navigate to="/coins" /> },
      //   {
      //     path: "/coins/:rank",
      //     element: <DetailView />,
      //   }
      // ]
    }
  ]);

  return routes;
};

export default Router;
