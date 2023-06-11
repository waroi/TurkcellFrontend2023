import React, { useEffect, useState } from "react";
import { getNews } from "../../service/api";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then((data) => {
      if (data.articles.length === 0) {
        return;
      } else {
        setNews(data);
      }
    });
  }, []);
  console.log(news.articles);
  return (
    <div className="row">
      {news?.articles.length > 0 ? (
        news?.articles.map((item, index) => (
          <div className="col-3" key={index}>
            <img src="https://picsum.photos/id/180/500/400" alt="" />
            <span>{item.subject}</span>
            <span>{item.source}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.url} target="_blank">
              For more
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default News;
