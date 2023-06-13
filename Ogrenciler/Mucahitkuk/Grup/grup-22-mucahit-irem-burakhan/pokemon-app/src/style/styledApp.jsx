import styled from "styled-components";
import backgroundImage from "../assets/bg1.png";
import televisionImage from "../assets/tv1.png";

export const BgWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const TvWrapper = styled.div`
  background-image: url(${televisionImage});
  width: 583px;
  height: 550px;
  position: absolute;
  top: 57.3%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    min-width: 400px;
    min-height: 380px;
    background-size: contain;
  }

  @media (max-width: 480px) {
    min-width: 300px;
    min-height: 285px;
    background-size: contain;
  }

  /* Add styles for the black background */
  &::after {
    content: "  ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 400px;
    margin: 2rem;
    background-color: gray;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    z-index: 20;
  }
`;

export const InnerContent = styled.div`
  /* Add styles for the inner content */
  color: black;
  font-size: 14px;
  z-index: 40;
  display: flex;
  padding-top: 4rem;
  flex-direction: column;
  height: 58%;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-y: scroll;
  top: 2.5rem;
`;

export const CustomButton = styled.button`
  border: 5px;
  width: 100px;
`;
