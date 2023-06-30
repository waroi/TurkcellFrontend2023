import styled from "styled-components";

const StyledProductsBanner = styled.div`
  border-radius: 20px;
  background: #fcefd5;
  position: relative;
  overflow: hidden;
  display: flex;
  img {
    height: 100%;
    @media (max-width: 520px) {
      width: 300px;
    }
  }

  h2 {
    color: white;
    font-weight: 800;
    line-height: 68px;
    text-transform: capitalize;
    font-size: 60px;
    @media (max-width: 768px) {
      font-size: 46px;
      color: #002a48;
    }
  }

  h3 {
    color: white;

    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
    text-transform: capitalize;
    @media (max-width: 768px) {
      font-size: 28px;
      color: #002a48;
    }
  }

  p {
    color: white;
    @media (max-width: 768px) {
      font-size: 28px;
      color: #002a48;
    }
  }

  .rectangleOne {
    width: 816px;
    height: 800px;
    transform: rotate(160.22deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #002a48;
    position: absolute;
    top: -100px;
    left: 550px;

    @media (max-width: 992px) {
      top: 675px;
      transform: rotate(-175.16deg);
      left: -100px;
    }
  }
`;

export default StyledProductsBanner;
