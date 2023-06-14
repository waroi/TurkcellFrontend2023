import styled from "styled-components";

export const SliderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 3rem;

  .slider-image {
    width: 100%;
    height: auto;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.23);
    border-radius: 16px;
    backdrop-filter: blur(8.2px);
    -webkit-backdrop-filter: blur(8.2px);
    transition: all 0.3s ease-in-out;
    opacity: 0.8;
    &:hover {
      transform: scale(1.1);
      opacity: 1;
      backdrop-filter: blur(16px);
    }
  }
`;
