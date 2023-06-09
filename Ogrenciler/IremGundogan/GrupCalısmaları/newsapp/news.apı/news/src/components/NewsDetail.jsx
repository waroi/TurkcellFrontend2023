// components/NewsDetail.js

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


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
      `https://gnews.io/api/v4/search?token=fd4d7712a43ca57a7366dd3efd7e929d&q=${id}`
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

      {/* <CarouselContainer>
      <div id="breakingNewsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {breakingNews.map((item) => (
            <div key={item.id} className={`carousel-item ${item.id === id ? 'active' : ''}`}>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#breakingNewsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#breakingNewsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </CarouselContainer> */}
      
    </Container>
  );
}

export default NewsDetail;
