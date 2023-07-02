import styled from "styled-components";

export const BannerMiddleContainer = styled.section`
  border-radius: 20px;
  background: #003459;
  position: relative;
  overflow: hidden;
`;

export const Rectangle1 = styled.div`
  width: 782.292px;
  height: 635px;
  transform: rotate(25.23deg);
  border-radius: 99px;
  background: #fceed5;
  position: absolute;
  bottom: -80px;
  right: -100px;

  @media screen and (max-width: 768px) {
    transform: rotate(11.41deg);
    bottom: 220px;
    right: -65px;
  }
`;

export const Rectangle2 = styled(Rectangle1)`
  height: 787.54px;
  transform: rotate(28.251deg);
  background: #002a48;
  top: 150px;
  left: -200px;

  @media screen and (max-width: 768px) {
    top: 400px;
    left: -250px;
  }
`;

export const BannerText = styled.p`
  transform: translate(0%);
  max-width: 394px;
  color: #242b33;
  text-align: right;
  font-size: 12px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-left: 140px;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-left: 0px;
  }
`;
