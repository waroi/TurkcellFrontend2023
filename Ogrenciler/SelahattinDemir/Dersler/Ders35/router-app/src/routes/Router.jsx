import { useRoutes, Link, Navigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";
import ParametreViews from "../views/ParametreViews";
import Haberler from "../views/NewsView";
import Spor from "../views/SporView";
import Magazin from "../views/MagazinView";

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
    {
      path: "/haberler",
      element: <Haberler />,
      children: [
        { index: true, element: <Navigate to="sport" /> },
        {
          path: "/sport",
          element: <Spor />,
        },
        {
          path: "/magazin",
          element: <Magazin />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Router;
