/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Financial = ({ news }) => {
  console.log(news);
  return (
    <div>
      {news.results &&
        news.results.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <img src={item.image_url} alt="" />
              <p>{item.description}</p>
              <p>{item.category}</p>
              <p>{item.pubDate}</p>
              <a href={item.link}>{item.link}</a> <br />
              <Link to={`/detail/${index}`}>Read More</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Financial;
