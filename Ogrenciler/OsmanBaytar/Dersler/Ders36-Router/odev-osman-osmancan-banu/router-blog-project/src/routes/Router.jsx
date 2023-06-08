import React from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import BlogInfo from "../views/BlogInfo";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/BlogInfo/:id",
      element: <BlogInfo />,
    },
  ]);
  return routes;
};

export default Router;
