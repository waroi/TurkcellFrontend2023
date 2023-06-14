import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .slider-image {
    width: 100%;
    height: auto;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    opacity: 0.8;
    &:hover {
      transform: scale(1.1);
      opacity: 1;
      background-color: #784347;
    }
  }
`;
