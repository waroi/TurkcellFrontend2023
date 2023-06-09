import React from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import BlogInfo from "../views/BlogInfo";

const Router = ({ data }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView data={data} />,
    },
    {
      path: "/BlogInfo/:id",
      element: <BlogInfo data={data} />,
    },
  ]);
  return routes;
};

export default Router;
