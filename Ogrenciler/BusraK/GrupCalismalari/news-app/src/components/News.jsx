import { useState, useEffect } from "react";
import NewsItem from "./Newscast/NewsItem";
import styled from "styled-components";
import Aside from "./Aside/Aside";
import fetchData from "../API/FetchData";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  bottom: 200px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const News = () => {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(9);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    const news = await fetchData();
    setItems(news.articles);
    setLoading(false);
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 9);
  };

  return (
    <MainContainer>
      <Container>
        {items.slice(0, visibleItems).map((article, index) => {
          return (
            <div>
              <NewsItem key={index} {...article} id={article.title} />
            </div>
          );
        })}
        {visibleItems < items.length && (
          <button onClick={handleLoadMore} disabled={loading}>
            {loading ? "Loading..." : "Show More"}
          </button>
        )}
      </Container>
      <Aside />
    </MainContainer>
  );
};

export default News;
