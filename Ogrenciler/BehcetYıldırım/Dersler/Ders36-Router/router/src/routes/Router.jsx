import { useRoutes, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import userRouter from "./userRouter";
import ParametreView from "../views/ParametreView";
import NewView from "../views/NewView";
import SportView from "../views/SportView";
import EconomyView from "../views/EconomyView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
    {
      path: "/haberler/",
      element: <NewView />,
      children: [
        // nested route
        { index: true, element: <Navigate to="spor" /> }, // haberler url'ine geldiğinde default olarak spor url'ine yönlendir.
        { path: "ekonomi", element: <EconomyView /> }, // haberler/ekonomi url'ine geldiğinde ekonomi url'ine yönlendir.
        {
          path: "spor",
          element: <SportView />,
          children: [{ path: ":name", element: <SportView /> }],
        }, // haberler/spor url'ine geldiğinde spor url'ine yönlendir.
      ],
    },
  ]);
  return routes;
};

export default Router;
