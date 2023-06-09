import { Navigate, useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import UserRouter from "./UserRouter";
import ParametreView from "../views/ParametreView";
import NewView from "../views/NewView";
import EconomyNewView from "../views/EconomyNewView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    UserRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
    {
      path: "/haberler/",
      element: <NewView />,
      children: [
        { index: true, element: <Navigate to="ekonomi" /> },
        {
          path: "/ekonomi",
          element: <EconomyNewView />,
          children: [{ path: ":name", element: <EconomyNewView /> }],
        },
        // { path: "/spor", element: <sportNewView /> }
        // burada index ile default değer atamış oluyoruz
        // navigate yönlendirme sağlamış oluyor
      ],
    },
  ]);
  return routes;
};

export default Router;
