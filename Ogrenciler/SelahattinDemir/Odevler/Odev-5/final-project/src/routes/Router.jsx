import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersLogin } from "../redux/slice/loginSlice";
import RegisterView from "../views/RegisterView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import DetailView from "../views/DetailView";
import CategoryView from "../views/CategoryView";
import CartsView from "../views/CartsView";
import NotFound from "../views/NotFound";
import UnauthorizedAccess from "../utils/UnauthorizedAccess";

const Router = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.loggedIn);

  useEffect(() => {
    dispatch(fetchUsersLogin());
  }, [dispatch]);

  const routes = useRoutes([
    {
      path: "/register",
      element: <RegisterView />,
    },
    {
      path: "/login",
      element: <LoginView />,
    },
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/:id",
      element: isLoggedIn ? <DetailView /> : <UnauthorizedAccess />,
    },
    {
      path: "/category",
      element: isLoggedIn ? <CategoryView /> : <UnauthorizedAccess />,
    },
    {
      path: "/carts",
      element: isLoggedIn ? <CartsView /> : <UnauthorizedAccess />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default Router;
