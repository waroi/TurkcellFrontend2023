
// components/NewsList.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import BreakingNews from "./BreakingNews";



const NewsGrid = styled.div`
margin:50px 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const NewsCard = styled.div`
 border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease; /* Transition efekti için transform özelliğini kullanıyoruz */

  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  input {
    width: 400px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
  }

`;

const Content = styled.div`
  display: flex;
  justify-content: between;
`;

const BreakNew = styled.div`
width: 300px;
  margin: 25px 100px;
`;

function NewsList() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/top-headlines?token=330681caa1286fcd6b9ca43891773fd7&lang=en"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
     <Search> <input type="text" onChange={handleSearch} placeholder="Search..." /></Search>
     <Content>
      <NewsGrid>
        {filteredNews.map((item) => (
          <NewsCard key={item.id}>
            <Img src={item.image} alt=""></Img>
            <h2>{item.title}</h2>
            <Link to={`/news/${item.id}`}>Read more...</Link>
          </NewsCard>
        ))}
      </NewsGrid>
    <BreakNew><BreakingNews news={news} /></BreakNew>
      </Content>
    </div>
  );
}

export default NewsList;