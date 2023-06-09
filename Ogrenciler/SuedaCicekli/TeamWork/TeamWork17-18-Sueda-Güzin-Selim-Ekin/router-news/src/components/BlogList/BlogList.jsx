import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import "./style.css";

const BlogList = ({ newsArr }) => {
  return (
    <div>
      <Slider newsArr={newsArr} />
      <div className="text-center lastMinute">
        <h1 className="my-4">Son Dakika !</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea
          ipsum dignissimos deleniti animi maxime, illum quibusdam aliquam
          architecto porro!
        </p>
      </div>
      <ul className="blogList">
        {newsArr.map((news, index) => (
          <Link key={index} to={`/blogs/${news.key}`}>
            <li>
              <div className="card">
                <img src={news.image} alt="" />
                <div className="card-content">
                  <h2 className="mt-3">
                    {news.name.split(" ").slice(0, 4).join(" ")}...
                  </h2>
                  <p>{news.description.slice(0, 50)}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
