import React, { useEffect, useState } from "react";
import { getNews } from "../../service/api";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getNews().then((data) => {
      if (data?.articles.length == 0) {
        setLoading(false);
      } else {
        setNews(data)
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return <p className="news-height">Yatırım Tavsiyesi Değildir...</p>;
  }
  console.log(news.articles.length);
  return (
    <div className="container ">
      <div className="row my-5 ">
      {news?.articles.map((item, index) => (
        <div className="col-3 my-3" key={index}>
          <div className="card">
          <img src="https://picsum.photos/id/180/500/400" alt="" />
          <div className="d-flex justify-content-between my-2">
              <span>{item.subject}</span>
              <span>{item.source}</span>
          </div>
          <h2 className="newstitles">{item.title}</h2>
          <p>{item.description}</p>
          <a href={item.url} target="_blank">
            For more
              <i className="bi bi-box-arrow-up-right"></i>
          </a>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default News;
