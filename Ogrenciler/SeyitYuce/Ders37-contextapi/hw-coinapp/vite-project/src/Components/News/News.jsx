import React, { useEffect, useState } from "react";
import { getNews } from "../../service/api";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getNews().then((data) => {
      if (data?.articles.length == 0) {
        setLoading(true);
      } else {
        // setNews(data);
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(news.articles.length);
  return (
    <div className="row">
      {news?.articles.map((item, index) => (
        <div className="col-4 card" key={index}>
          <img src="https://picsum.photos/id/180/500/400" alt="" />
          <span>{item.subject}</span>
          <span>{item.source}</span>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <a href={item.url} target="_blank">
            For more
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;
