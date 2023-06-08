import { useRoutes } from "react-router-dom";
import Homeview from "../views/Homeview";
import Userview from "../views/Userview";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Homeview /> },
    { path: "/user", element: <Userview /> },
  ]);
  return routes;
};

export default Router;
