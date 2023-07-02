import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import AllProducts from "../views/AllProducts/AllProducts";
import DetailProductPage from "../views/DetailProductPage/DetailProductPage";
import Cart from "../views/Cart/Cart";
import { useSelector } from "react-redux";
import NotFound from "../components/NotFound/NotFound";
const Router = () => {
  const loginUser = useSelector((state) => state.user.user);
  const isLoginUser = Object.keys(loginUser).length === 0 ? false : true;
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Home /> },
        isLoginUser
          ? { path: "/products", element: <AllProducts /> }
          : { path: "/products", element: <Home /> },
        isLoginUser
          ? { path: "/detailproduct/:id", element: <DetailProductPage /> }
          : { path: "/detailproduct/:id", element: <Home /> },
        isLoginUser
          ? { path: "/detailproduct", element: <AllProducts /> }
          : { path: "/detailproduct", element: <Home /> },
        isLoginUser
          ? { path: "/cart/:id", element: <Cart /> }
          : { path: "/cart/:id", element: <Home /> },
        isLoginUser
          ? { path: "/cart", element: <AllProducts /> }
          : { path: "/cart", element: <Home /> },
        isLoginUser
          ? { path: "/auth", element: <Home /> }
          : { path: "/auth", element: <Home /> },
        !isLoginUser
          ? { path: "/auth/login", element: <Login /> }
          : { path: "/auth/login", element: <Home /> },
        !isLoginUser
          ? { path: "/auth/register", element: <Register /> }
          : { path: "/auth/register", element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return routes;
};
export default Router;
