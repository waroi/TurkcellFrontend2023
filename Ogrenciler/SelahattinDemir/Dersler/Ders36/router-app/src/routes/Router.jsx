import { useRoutes, Link, Navigate } from "react-router-dom";
import HomeViews from "../views/HomeViews";
import ParametreViews from "../views/ParametreViews";
import NewViews from "../views/NewViews";
import userRouter from "./userRouter";
import Sport from "../views/SportViews";
import Magazin from "../views/MagazineViews";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: (
        <div>
          <HomeViews />
        </div>
      ),
    },
    userRouter,
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
      path: "/news",
      element: <NewViews />,
      children: [
        { index: true, element: <Navigate to="spor" /> },
        {
          path: "", // "/news/spor" olarak değiştirildi
          element: <Sport />,
          children: [{ path: ":name", element: <Sport /> }],
        },
        {
          path: "magazin", // "/news/magazin" olarak değiştirildi
          element: <Magazin />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Router;
