import React from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import SignUpView from "../views/SignUpView";
import ProductsView from "../views/ProductsView";
import DetailView from "../views/DetailView";
import LogInView from "../views/LogInView";
import BasketView from "../views/BasketView";
import SignUpSuccessfulView from "../views/SignUpSuccessfulView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "*", element: <HomeView /> },
    { path: "/SignUp", element: <SignUpView /> },
    { path: "/SignUpSuccessful", element: <SignUpSuccessfulView /> },
    { path: "/Products", element: <ProductsView /> },
    { path: "/Products/:id", element: <DetailView /> },
    { path: "/LogIn", element: <LogInView /> },
    { path: "/Basket", element: <BasketView /> },
  ]);
  return routes;
};

export default Router;
