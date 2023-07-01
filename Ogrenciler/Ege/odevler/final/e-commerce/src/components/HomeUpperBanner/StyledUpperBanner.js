import styled from "styled-components";

const StyledUpperBanner = styled.div`
  border-radius: 20px;
  background: #003459;
  position: relative;
  overflow: hidden;
  display: flex;

  .bannerImg {
    height: 100%;
    @media (max-width: 520px) {
      width: 300px;
    }
  }

  h2 {
    color: #002a48;
    font-weight: 800;
    line-height: 68px;
    text-transform: capitalize;
    font-size: 60px;
    @media (max-width: 768px) {
      font-size: 46px;
    }
  }

  h3 {
    color: #002a48;
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
    text-transform: capitalize;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .rectangleOne {
    width: 787.54px;
    height: 787.54px;
    transform: rotate(28.25deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #002a48;
    position: absolute;
    top: 160px;
    left: -220px;
  }

  .rectangleTwo {
    width: 782.29px;
    height: 635px;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #fceed5;
    position: absolute;
    top: -235px;
    left: 640px;
    @media (max-width: 992px) {
      top: -265px;
      left: -330px;
      transform: rotate(11.23deg);
    }
  }
`;

export default StyledUpperBanner;
