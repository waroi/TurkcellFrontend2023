/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ news }) => {
  const { index } = useParams();
  const selectedItem = news.results[parseInt(index)];

  const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin-top: 2rem;
    &:hover {
      box-shadow: 0 0 15px 6px rgba(43, 163, 179, 0.2);
      transform: scale(1);
    }
  `;

  const Category = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    color: #b0b0b6;
    position: absolute;
    top: 480px;
    right: 250px;
    z-index: 1;
  `;

  const Cardİmg = styled.img`
    height: 400px;
  `;

  const CardTopRight = styled.div`
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `;

  const defaultImage =
    "https://images-ext-1.discordapp.net/external/u5UvuYYVAbmjCXWLZ4Xj2IBxt0Qa71XVe9tIWpMftp4/https/i2.milimaj.com/i/milliyet/75/869x477/6474626086b24746f855f699.jpg?width=726&height=399";
  const imageUrl = selectedItem.image_url || defaultImage;

  return (
    <div className="container">
      <Category>{selectedItem.category}</Category>
      <Wrapper className="wrapper">
        <div className="card-top">
          <Cardİmg src={imageUrl} alt="" className="banner-image" />
          <CardTopRight className="card-top-right">
            <h1>{selectedItem.title}</h1>
            <p>{selectedItem.pubDate}</p>
            <a className="item-link" href={selectedItem.link}>
              {selectedItem.source_id}
            </a>
          </CardTopRight>
        </div>
        <p>{selectedItem.content}</p>
      </Wrapper>
    </div>
  );
};

export default Detail;
