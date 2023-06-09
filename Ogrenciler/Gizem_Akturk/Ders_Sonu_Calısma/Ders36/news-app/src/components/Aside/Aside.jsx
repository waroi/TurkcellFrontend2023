import React from "react";

import { AsideContainer, AsideItem } from "./AsideStyled";
import { useState, useEffect } from "react";
import NewsItem from "../Newscast/NewsItem";
import fetchData from "../../API/FetchData";
const Aside = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetchLatestNews();
  }, []);

  const fetchLatestNews = async () => {
    const news = await fetchData();
    setLatestNews(news.articles.slice(0, 3));
  };

  return (
    <AsideContainer>
      <h2 style = {{color:"black"}}>En Son Haberler</h2>
      {latestNews.map((news, index) => (
        <AsideItem>
          <NewsItem key={index} {...news} id={news.title} />
        </AsideItem>
      ))}
    </AsideContainer>
  );
};

export default Aside;
