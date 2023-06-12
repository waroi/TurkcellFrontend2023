import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView.jsx";
import ParameterView from "../views/ParameterView.jsx";
import NewView from "../views/NewView.jsx";
import SportNewView from "../views/SportNewView.jsx";
import EconomyNewView from "../views/EconomyNewView.jsx";

const Router = ({ name }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/parametre/:id",
      element: <ParameterView />,
    },
    {
      path: "/haberler",
      element: <NewView />,
      children: [
        {
          index: true,
          element: <Navigate to="spor" />,
        },
        {
          path: "spor",
          element: <SportNewView />,
          children: [
            {
              path: ":name",
              element: <SportNewView />,
            },
          ],
        },
        {
          path: "ekonomi",
          element: <EconomyNewView />,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
