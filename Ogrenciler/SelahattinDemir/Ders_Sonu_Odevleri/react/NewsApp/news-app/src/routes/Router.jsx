import { useRoutes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Sports from "../pages/Sports/Sports";
import Entertainment from "../pages/Financial/Financial";
import Technology from "../pages/Magazine/Magazine";
import Politics from "../pages/Polities/Polities";
import Navbar from "../components/Navbar/Navbar";
import { getNews, getNewsByCategory } from "../utilities/Api";

const Router = () => {
  const [news, setNews] = useState({});
  const [country, setCountry] = useState("tr");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/sport") {
      getNewsByCategory("sports", setNews);
    }
    if (location.pathname === "/entertainment") {
      getNewsByCategory("entertainment", setNews);
    }
    if (location.pathname === "/technology") {
      getNewsByCategory("technology", setNews);
    }
    if (location.pathname === "/politics") {
      getNewsByCategory("politics", setNews);
    }
    if (location.pathname === "/") {
      getNews(country, setNews);
    }
  }, [location, country]);

  const routes = [
    {
      path: "/",
      element: <Home news={news} />,
    },
    {
      path: "/detail/:index",
      element: <Detail news={news} />,
    },
    {
      path: "/sport",
      element: <Sports news={news} />,
    },
    {
      path: "/entertainment",
      element: <Entertainment news={news} />,
    },
    {
      path: "/technology",
      element: <Technology news={news} />,
    },
    {
      path: "/politics",
      element: <Politics news={news} />,
    },
  ];

  return (
    <>
      <Navbar
        country={country}
        setCountry={setCountry}
        news={news}
        setNews={setNews}
      />
      {useRoutes(routes)}
    </>
  );
};

export default Router;
