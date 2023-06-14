import { useRoutes } from "react-router-dom";
import Home from "../Views/Home/Home";
import ListPage from "../Views/ListPage/ListPage";
import DetailPage from "../Views/DetailPage/DetailPage";
import NotFound from "../Views/NotFound/NotFound";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/list",
      element: <ListPage />,
    },
    {
      path: "/detail/:id",
      element: <DetailPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

export default Router;
