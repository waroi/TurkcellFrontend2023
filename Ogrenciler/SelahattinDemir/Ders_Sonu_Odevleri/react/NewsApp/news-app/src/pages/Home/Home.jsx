/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ news }) => {
  // const[country, setCountry] = useState("tr");
  // const[language, setLanguage] = useState("tr");
  

  return (
    <main>
      <div className="news container">
        {news.results &&
          news.results.map((item, index) => {
            return (
              <div key={index} className="wrapper">
                <div className="card-top">
                  <img src={item.image_url} alt="" className="banner-image" />
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.pubDate}</p>
                    <p>{item.category}</p>
                    <a href={item.link}>{item.source_id}</a>
                  </div>
                </div>
                <p>{item.description}</p>
                <Link to={`/detail/${index}`}>Read More</Link>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default Home;
