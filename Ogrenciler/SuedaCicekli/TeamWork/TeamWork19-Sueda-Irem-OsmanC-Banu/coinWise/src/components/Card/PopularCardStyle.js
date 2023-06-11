import styled from "styled-components";
export const CoinImage = styled.img`
  position: absolute;
  left: -70px;
  top: 20px;

  &:hover {
    animation: rotateAnimation 2s linear infinite;
    @keyframes rotateAnimation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(720deg);
      }
    }
  }
`;
export const Card = styled.div`
  background-color: #252525;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: rotateslide all 1s infinite;

  &:hover {
    @keyframes rotateslide {
      0% {
        transform: translateY(1px);
      }
      100% {
        transform: translateY(30px);
      }
    }
  }
`;
