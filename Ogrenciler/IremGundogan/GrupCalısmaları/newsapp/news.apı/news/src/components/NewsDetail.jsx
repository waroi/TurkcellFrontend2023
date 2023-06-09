// components/NewsDetail.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
max-width: 800px;
  margin: 60px auto;
  padding: 20px;
  /* margin: 50px 100px; */
  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 40px;
  }

`;

const Content = styled.div`
  display: flex;
  justify-content: between;
  gap: 30px;
  img {
    width: 400px;
    object-fit: cover;

  }
  p {
    font-size: 20px;
    line-height: 1.5;
  }
`;


function NewsDetail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/search?token=330681caa1286fcd6b9ca43891773fd7&q=${id}`
    )
      .then((response) => response.json())
      .then((data) => setDetail(data.articles[0]));
  }, [id]);

  return (
    <Container>
      <h1>{detail.title}</h1>
<Content>
      <img src={detail.image} alt="" />
      <p>{detail.description}</p>
      </Content>
    </Container>
  );
}

export default NewsDetail;
