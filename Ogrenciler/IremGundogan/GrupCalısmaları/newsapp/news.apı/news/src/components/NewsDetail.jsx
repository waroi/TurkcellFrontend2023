// components/NewsDetail.js

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function NewsDetail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/search?token=fd4d7712a43ca57a7366dd3efd7e929d&q=${id}`
    )
      .then((response) => response.json())
      .then((data) => setDetail(data.articles[0]));
  }, [id]);

  return (
    <div>
      <h1>{detail.title}</h1>
      <p>{detail.description}</p>
    </div>
  );
}

export default NewsDetail;
