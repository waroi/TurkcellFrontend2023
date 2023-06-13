import styled from 'styled-components'

export const DeatilPageContainer = styled.div`
    display: flex;
    width: 1280px;
    margin: 0 auto;
    padding: 7rem 20px;
  `;

  export const DetailPageImageDiv = styled.div`
    width: 40%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0 7px 7px 0;
    }
  `;

  export const DetailPageInfo = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    span {
      font-size: 1.2rem;
      margin-left: 1rem;
      opacity: .7;
      font-style: italic;
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

  export const DetailPageButton = styled.div`
    display: flex;
    justify-content: space-around;
  `;