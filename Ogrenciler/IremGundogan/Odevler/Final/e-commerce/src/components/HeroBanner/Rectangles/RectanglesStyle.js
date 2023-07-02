import styled from "styled-components";

const RectanglesStyle = styled.div`
  .rectangleFirst {
    width: 635px;
    height: 635px;
    transform: rotate(9.35deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #003459;
    position: absolute;
    top: 268px;
    margin-top: 55px;
    right: 356px;
  }
  .rectangleSecond {
    width: 635px;
    height: 635px;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #f7dba7;
    position: absolute;
    top: 290px;
    right: 300px;
  }
  .rectangleThird {
    width: 67.1px;
    height: 67.1px;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 20px;
    background: #f7dba7;
    position: absolute;
    top: 235px;
    left: 124px;
    z-index: 2;
  }
  .rectangleFourth {
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
  .rectangleFifth {
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
  .rectangleSixth {
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
  .rectangleEighth {
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
  .rectangleNineth {
    width: 635px;
    height: 635px;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: #f7dba7;
    position: absolute;
    top: -570px;
    left: -220px;
  }

  @media (max-width: 992px) {
    .rectangleFirst {
      top: 502px;
      left: 56px;
      border-radius: 40px;
    }
    .rectangleSecond {
      top: 561px;
      left: 29px;
      border-radius: 40px;
    }
    .rectangleThird {
      display: none;
    }
    .rectangleFourth {
      top: 200px;
      left: 250px;
    }
    .rectangleFifth {
      top: 209px;
      left: 292px;
    }
    .rectangleSixth {
      top: 215px;
      left: 292px;
    }
  }
`;
export default RectanglesStyle;
/*
  width: 635px;
    height: 335px;
    transform: rotate(9.35deg);
    flex-shrink: 0;
    border-radius: 40px;
    background: #003459;
    position: absolute;
    top: 491px;
    margin-top: 55px;
    left: 96px;

    width: 720px;
    height: 331px;
    transform: rotate(24.23deg);
    flex-shrink: 0;
    border-radius: 40px;
    background: #f7dba7;
    position: absolute;
    top: 561px;
    left: 115px;
   */
