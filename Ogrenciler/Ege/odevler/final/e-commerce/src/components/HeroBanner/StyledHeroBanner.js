import styled from "styled-components";
const StyledHeroBanner = styled.div`
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  width: 100%;
  top: -100px;
  overflow: hidden;
  position: relative;
  border-radius: 0px 0px 40px 40px;

  .col-lg-6 {
    position: relative;
    z-index: 10;
  }
  img {
    width: 100%;
  }

  .rectangle1 {
    position: absolute;
    width: 635px;
    height: 635px;
    transform: rotate(9.35deg);
    border-radius: 99px;
    top: 150px;
    left: 950px;
    background-color: #003459;
  }
  .rectangle2 {
    position: absolute;
    width: 635px;
    height: 635px;
    transform: rotate(25.23deg);
    border-radius: 99px;
    top: 150px;
    left: 965px;
    background-color: #f7dba7;
  }
  .rectangle3 {
    position: absolute;
    width: 67px;
    height: 67px;
    transform: rotate(25.23deg);
    border-radius: 20px;
    top: 70px;
    left: 200px;
    background-color: #f7dba7;
  }
`;

export default StyledHeroBanner;
