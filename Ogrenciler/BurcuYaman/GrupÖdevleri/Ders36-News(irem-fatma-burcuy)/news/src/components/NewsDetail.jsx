import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function NewsDetail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9cdb0842c86c4d079dbeffdf7233b632')
      .then(response => response.json())
      .then(data => setDetail(data.articles[id]));
  }, [id]);

  console.log(detail);
  return (
    <div>
      <h1>{detail.title}</h1>
      <p>{detail.content}</p>
    </div>
  );
}

export default NewsDetail;