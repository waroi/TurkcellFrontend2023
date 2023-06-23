import React from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import SignUpView from "../views/SignUpView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/SignUp", element: <SignUpView /> },
  ]);
  return routes;
};

export default Router;
