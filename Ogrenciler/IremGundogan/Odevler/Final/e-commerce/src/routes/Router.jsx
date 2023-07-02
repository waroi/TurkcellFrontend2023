/* eslint-disable react-hooks/rules-of-hooks */
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView/HomeView";
import ProductsView from "../views/ProductsView/ProductsView";
import SignUpView from "../views/SignUpView/SignUpView";
import LoginView from "../views/LoginView/LoginView";
import { useSelector } from "react-redux";
import ProductDetailView from "../views/ProductDetailView/ProductDetailView";
import CartView from "../views/CartView/CartView";

const Router = () => {
  const currentUser = useSelector((state) => state.user.user);
  const routes = useRoutes(
    [
      { path: "/", element: <HomeView /> },
      {
        path: "/products",
        element: currentUser ? <ProductsView /> : <LoginView />,
      },
      {
        path: "/products/:id",
        element: currentUser ? <ProductDetailView /> : <LoginView />,
      },
      { path: "/cart", element: currentUser ? <CartView /> : <LoginView /> },
      { path: "/signup", element: !currentUser ? <SignUpView /> : null },
      { path: "/login", element: !currentUser ? <LoginView /> : null },
    ].filter(Boolean)
  );

  return routes;
};

export default Router;
