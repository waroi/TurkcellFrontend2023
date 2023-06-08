// components/NewsList.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewsList() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/top-headlines?token=fd4d7712a43ca57a7366dd3efd7e929d&lang=en"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const filteredNews = Array.isArray(news)
    ? news.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search..." />
      {filteredNews.map((item) => (
        <div key={item.id} className="news-card">
          <h2>{item.title}</h2>
          <Link to={`/news/${item.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
