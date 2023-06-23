import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView/HomeView";
import ProductsView from "../views/ProductsView/ProductsView";
import SignUpView from "../views/SignUpView/SignUpView";
import LoginView from "../views/LoginView/LoginView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/signup", element: <SignupView /> },
    { path: "/login", element: <LoginView /> },
    { path: "/products", element: <ProductsView /> },
  ]);

  return routes;
};

export default Router;
