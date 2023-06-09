/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Entertainment = ({ news }) => {
  console.log(news);
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
              "https://media.discordapp.net/attachments/1089995629633228900/1116683001972150282/film-movie-filmmaker-movie-director-wallpaper-preview.png?width=726&height=409";
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

export default Entertainment;
