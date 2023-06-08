import { useLocation } from "react-router-dom"
import styled from 'styled-components'
const DetailNew = () => {
  const location = useLocation()
  const news = location.state;
  console.log(news)

  const DeatilPageContainer = styled.div`
    display: flex;
    width: 1280px;
    margin: 0 auto;
    padding: 5rem 20px;
  `;

  const DetailPageImageDiv = styled.div`
    width: 40%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0 7px 7px 0;
    }
  `;

  const DetailPageInfo = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      max-width: 60%;
    }
    span {
      font-size: 1.2rem;
      color: #ccc;
      margin-left: 1rem;
    }
    p {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
    a {
      color: #ccc;
      text-decoration: none;
      border-radius: 7px;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease-in-out;
      background-color: #6e6e6e;
      &:hover {
        color: #000;
      }
    }
  `;

  const DetailPageInfoTop = styled.div`
    display: flex;
    align-items: center;
  `;

  const DetailPageButton = styled.div`
    display: flex;
    justify-content: end;
  `;

  return (
    <DeatilPageContainer>
      <DetailPageImageDiv>
        <img src={news.image} alt={news.name} />
      </DetailPageImageDiv>
      <DetailPageInfo>
        <DetailPageInfoTop>
          <h1>{news.name}</h1>
          <span>{news.date}</span>
        </DetailPageInfoTop>
        <p>{news.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sint laborum sunt porro cumque fugit dolore, voluptatibus, ullam vel dicta praesentium nam sequi aliquid, aliquam exercitationem ipsam. Labore, vero mollitia? Consequuntur natus reprehenderit minima, repudiandae consectetur cupiditate dicta, adipisci est voluptatem nulla fuga obcaecati expedita. Eius cupiditate culpa obcaecati. Itaque!</p>
        <DetailPageButton>
          <a href={news.url} target="_blank" rel="noreferrer">{news.source}</a>
        </DetailPageButton>
      </DetailPageInfo>
    </DeatilPageContainer>
  )
}

export default DetailNew
