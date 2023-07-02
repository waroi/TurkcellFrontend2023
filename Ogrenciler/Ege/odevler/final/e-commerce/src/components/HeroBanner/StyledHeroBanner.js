import styled from "styled-components";
const StyledHeroBanner = styled.div`
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: relative;
  top: -100px;
  border-radius: 0px 0px 40px 40px;

  .container {
    position: relative;
    top: 100px;
    @media (max-width: 992px) {
      top: 200px;
    }
    z-index: 10;
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

  .title {
    line-height: 60px;
    color: #002a48;
    font-weight: 800;
    text-transform: capitalize;
    font-size: 60px;
  }

  .subTitle {
    line-height: 60px;
    color: #002a48;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 46px;
  }

  .bannerImg {
    width: 900px;
    height: 700px;
    flex-shrink: 0;
    overflow-x: hidden;
    position: relative;
    z-index: 12;
  }

  .rectangleOne {
    width: 635px;
    height: 635px;
    transform: rotate(9.35deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #003459;
    position: absolute;
    top: 268px;
    left: 699px;
  }
  .rectangleTwo {
    width: 635px;
    height: 635px;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #f7dba7;
    position: absolute;
    top: 290px;
    left: 694px;
  }
  .rectangleThree {
    width: 67.1px;
    height: 67.1px;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 20px;
    background: #f7dba7;
    position: absolute;
    top: 124px;
    left: 333px;
  }
  .rectangleFour {
    width: 14.63px;
    height: 14.63px;
    transform: rotate(20.79deg);
    flex-shrink: 0;
    border-radius: 4px;
    background: #f7dba7;
    position: absolute;
    top: 148px;
    left: 757px;
  }
  .rectangleFive {
    width: 27.5px;
    height: 27.5px;
    transform: rotate(-22.85deg);
    flex-shrink: 0;
    border-radius: 9px;
    background: #f7dba7;
    position: absolute;
    top: 200px;
    left: 728px;
  }
  .rectangleSix {
    width: 21.47px;
    height: 21.47px;
    transform: rotate(-43deg);
    flex-shrink: 0;
    border-radius: 6px;
    background: #002a48;
    position: absolute;
    top: 200px;
    left: 728px;
  }
  .rectangleSeven {
    width: 635px;
    height: 635px;
    transform: rotate(56.47deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #f7dba7;
    position: absolute;
    opacity: 0.4;
    top: 700px;
    left: 42px;
  }
  .rectangleEight {
    width: 635px;
    height: 635px;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #f7dba7;
    position: absolute;
    top: -577px;
    left: -240px;
  }

  @media (max-width: 992px) {
    height: 900px;
    top: -175px;
    .title {
      font-size: 46px;
    }
    .subTitle {
      font-size: 28px;
    }
    .bannerImg {
      width: 600px;
      height: 470px;
    }
    .rectangleOne {
      top: 650px;
      left: 0;
    }
    .rectangleTwo {
      top: 600px;
      left: 50px;
    }
    .rectangleThree {
      display: none;
    }
    .rectangleFour {
      top: 200px;
      left: 250px;
    }
    .rectangleFive {
      top: 250px;
      left: 250px;
    }
    .rectangleSix {
      top: 250px;
      left: 250px;
    }
    .rectangleSeven {
    }
  }

  @media (min-width: 1400px) {
    .rectangleOne {
      left: 953px;
    }

    .rectangleTwo {
      left: 1000px;
    }
  }
`;

export default StyledHeroBanner;
