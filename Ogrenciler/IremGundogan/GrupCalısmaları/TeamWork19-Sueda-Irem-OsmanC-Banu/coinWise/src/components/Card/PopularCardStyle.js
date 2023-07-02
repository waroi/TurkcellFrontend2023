import styled from "styled-components";
export const CoinImage = styled.img`
  position: absolute;
  left: -70px;
  top: 20px;
`;
export const Card = styled.div`
  background-color: #252525;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-15px);

    & ${CoinImage} {
      @keyframes rotateAnimation {
        0% {
          transform: rotateY(0deg);
        }
        100% {
          transform: rotateY(360deg);
        }
      }

      animation: rotateAnimation 0.5s linear 1;
    }
  }
`;
