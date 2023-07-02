import styled from "styled-components";

const StyledLowerBanner = styled.div`
  border-radius: 20px;
  background: #ffb775;
  position: relative;
  overflow: hidden;
  display: flex;

  .bannerImg {
    height: 100%;
  }

  h2 {
    color: #002a48;
    font-weight: 800;
    line-height: 68px;
    text-transform: capitalize;
    font-size: 60px;
    @media (max-width: 992px) {
      font-size: 46px;
    }
  }

  h3 {
    color: #002a48;
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
    text-transform: capitalize;
    @media (max-width: 992px) {
      font-size: 28px;
    }
  }

  .rectangleOne {
    width: 790px;
    height: 734px;
    transform: rotate(-126.77deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #fceed5;
    position: absolute;
    top: -225px;
    left: -250px;
  }

  .rectangleTwo {
    width: 870px;
    height: 840px;
    transform: rotate(60.25deg);
    flex-shrink: 0;
    opacity: 0.3;
    border-radius: 99px;
    background: linear-gradient(
      134deg,
      #fceed5 6.17%,
      #fceed5 75.14%,
      #ffe7ba 100%
    );
    position: absolute;
    top: 180px;
    left: 690px;
  }
`;

export default StyledLowerBanner;
