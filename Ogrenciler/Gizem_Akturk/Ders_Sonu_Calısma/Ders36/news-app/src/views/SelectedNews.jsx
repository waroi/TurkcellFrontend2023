import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { formatDate } from "../utils/DateUtils";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const CardImage = styled.div`
  position: relative;

  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  img {
    padding: 10px;
    width: 80%;
    height: 400px;
    object-fit: cover;
    margin: 10px;
  }

  .card-title {
    position: absolute;
    bottom: -52px;
    left: 20px;

    width: 78%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-weight: bold;
  }
`;

const CardContent = styled.div`
  padding: 10px;
  position: relative;
  font-size: 18px;
  top: 50px;
  width: 70%;
  left: 16px;
  line-height: 1.5;
  color:black;
`;

const CardAction = styled.div`
  padding: 20px;
  position: relative;
  top: 20px;
`;

const Container = styled.div`
  min-width: 1900px; 
  @media screen and (max-width: 1900px) { min-width: 90%};
`;

const SelectedNews = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const decodedId = id.replace(/%20/g, " ");
      const response = await fetch(

        `https://newsapi.org/v2/everything?q=${decodedId}&apiKey=c987da6e68ca4ff681632866b4c52895`
      );
      const data = await response.json();

      if (data.articles.length > 0) {
        setArticle(data.articles[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      {article ? (
        <Card>
          <CardImage>
            <img src={article.urlToImage} alt={article.title} />

            <span className="card-title">{article.title}</span>
          </CardImage>

          <CardContent>
            <p>{article.description}</p>
            <p>{article.content}</p>
            <p>{article.author}</p>
            <p> {formatDate(article.publishedAt)}</p>
            <p>{article.source.name}</p>
          </CardContent>
          <CardAction>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </CardAction>
        </Card>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

export default SelectedNews;
