import { useRoutes } from "react-router-dom";
import News from "../components/News";
import SelectedNews from "../views/SelectedNews";
import PageNotFound from "../views/PageNotFound";
import Aside from "../components/Aside/Aside";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <News /> },

    { path: "/news", element: <News /> },
    { path: "/news/:id", element: <SelectedNews /> },
    { path: "/news/:id", element: <Aside /> },
    { path: "*", element: <PageNotFound /> }
  ]);

  return routes;
};

export default Router;
