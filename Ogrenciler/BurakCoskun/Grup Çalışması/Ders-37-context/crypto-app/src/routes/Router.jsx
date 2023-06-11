import { useRoutes } from "react-router-dom";
import Home from "../Views/Home/Home";
import ListPage from "../Views/ListPage/ListPage";
import DetailPage from "../Views/DetailPage/DetailPage";

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
      element: <h1>404 Not Found</h1>,
    },
  ]);
  return routes;
};

export default Router;
