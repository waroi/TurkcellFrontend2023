import styled from "styled-components";

export const HeaderComponent = styled.div`
  display: grid;
  place-items: center;
  width: 90%;
  margin: 0 auto;
  h1 {
    font-size: 70px;
    color: #f19c77;
    @media screen and (max-width: 992px) {
      text-align: center;
    }
  }
  img {
    width: 100%;
    max-width: 500px;
    transition: 0.3s all;
    &:hover {
      transform: scale(1.125);
    }

    animation: walking 1s linear infinite;
    @keyframes walking {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(1deg);
      }
      75% {
        transform: rotate(-1deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;
