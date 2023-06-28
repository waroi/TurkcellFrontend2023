import styled from "styled-components";

const StyledUpperBanner = styled.div`
  border-radius: 20px;
  background: #003459;
  position: relative;
  overflow: hidden;
  display: flex;

  img {
    height: 100%;
    @media (max-width: 520px) {
      width: 300px;
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
  }
`;

export default StyledUpperBanner;
