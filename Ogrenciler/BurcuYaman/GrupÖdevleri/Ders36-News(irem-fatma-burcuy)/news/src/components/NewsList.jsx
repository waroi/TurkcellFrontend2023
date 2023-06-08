import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NewsList() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9cdb0842c86c4d079dbeffdf7233b632%27')
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, []);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search..." />
      {filteredNews.map((item, index) => (
        <div key={index} className="news-card">
          <h2>{item.title}</h2>
          <Link to={'/news/${index}'}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}

export default NewsList;