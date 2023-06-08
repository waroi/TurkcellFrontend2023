import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DetailNews = ({latestNews}) => {
  const {id} = useParams();
  console.log(latestNews);
  const data = latestNews.articles.find((item) => item.publishedAt == id);
  console.log(data);
  console.log(id);
  const url = data.url
  return (
    <div>
      <h1>{data.author}</h1>
      <h6>{data.title}</h6>
      <p>{data.publishedAt}</p>
      <p>url: <a href={data.url} >Go To Website</a></p>
      <iframe src={url}></iframe>
    </div>
  )
}

export default DetailNews