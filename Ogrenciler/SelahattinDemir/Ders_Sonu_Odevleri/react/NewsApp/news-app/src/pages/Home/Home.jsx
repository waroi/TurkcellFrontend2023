/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ news }) => {
  return (
    <main>
      <div className="news container">
        {news.results &&
          news.results.map((item, index) => {
            const titleClass =
              item.title.split(" ").length > 6 ? "truncate" : "";

            const descriptionClass =
              item.description && item.description.split(" ").length > 12
                ? "truncate"
                : "";

            const pubDate = new Date(item.pubDate).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            });

            const defaultImage =
              "https://media.discordapp.net/attachments/1089995629633228900/1116681581734666350/pexels-photo-1809342.png";
            const imageUrl = item.image_url || defaultImage;

            return (
              <div key={index} className="wrapper">
                <div className="card-top">
                  <img src={imageUrl} alt="" className="banner-image" />
                  <div className="card-top-right">
                    <h1 className={titleClass}>{item.title}</h1>
                    <p>{pubDate}</p>
                    <p>{item.category}</p>
                    <a className="item-link" href={item.link}>
                      {item.source_id}
                    </a>
                  </div>
                </div>
                <p className={descriptionClass}>{item.description}</p>
                <Link className="read-more" to={`/detail/${index}`}>
                  Read More
                </Link>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default Home;
