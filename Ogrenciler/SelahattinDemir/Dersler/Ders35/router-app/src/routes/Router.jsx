import { useRoutes, Link } from "react-router-dom";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";
import ParametreViews from "../views/ParametreViews";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: (
        <div>
          <HomeView />
        </div>
      ),
    },
    {
      path: "/user",
      element: (
        <div>
          <UserView />
        </div>
      ),
    },
    {
      path: "/user/:id",
      element: (
        <div>
          <ParametreViews />
          <Link to="/">Ana Sayfa</Link>
          <Link to="/user">User</Link>
        </div>
      ),
    },
  ];

  return useRoutes(routes);
};

export default Router;
