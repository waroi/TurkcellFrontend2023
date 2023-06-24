import React from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import SignUpView from "../views/SignUpView";
import ProductsView from "../views/ProductsView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/SignUp", element: <SignUpView /> },
    { path: "/Products", element: <ProductsView /> },
  ]);
  return routes;
};

export default Router;
