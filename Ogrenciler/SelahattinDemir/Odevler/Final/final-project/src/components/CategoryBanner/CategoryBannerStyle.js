import styled from "styled-components";

export const CategoryBannerContainer = styled.section`
  border-radius: 20px;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  position: relative;
  overflow: hidden;
`;

export const Rectangle1 = styled.div`
  width: 816.401px;
  height: 799.52px;
  transform: rotate(-25.219deg);
  border-radius: 99px;
  background: #002a48;
  position: absolute;
  top: -100px;
  right: -180px;

  @media screen and (max-width: 768px) {
    transform: rotate(-175.16deg);
    top: 330px;
    right: -210px;
  }
`;

export const Rectangle2 = styled.div`
  width: 12.437px;
  height: 12.437px;
  transform: rotate(-30.589deg);
  border-radius: 4px;
  background: #002a48;
  position: absolute;
  top: 100px;
  left: 275px;
`;

export const BannerTitle = styled.h1`
  transform: translate(0%);
  color: #fdfdfd;
  font-size: 52px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 800;
  line-height: 68px;
  text-transform: capitalize;
  margin-left: 150px;

  @media screen and (max-width: 768px) {
    color: #002a48;
    font-size: 42px;
    line-height: 60px;
    margin-left: 10px;
    margin-top: 20px;
  }
`;

export const BannerSecondTitle = styled(BannerTitle)`
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  margin-left: 190px;

  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 38px;
    margin-left: 10px;
    margin-top: 0px;
  }
`;

export const BannerText = styled.p`
  transform: translate(0%);
  max-width: 394px;
  color: #ccd1d2;
  text-align: right;
  font-size: 12px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-left: 140px;

  @media screen and (max-width: 768px) {
    text-align: left;
    margin-left: 15px;
    color: #242b33;
  }
`;

export const ButtonView = styled.button`
  transform: translate(0%);
  display: inline-flex;
  background: transparent;
  padding: 14px 28px 10px 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 57px;
  border: 1.5px solid #fdfdfd;
  color: #fdfdfd;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    border: 1.5px solid #003459;
    color: #003459;
  }
`;

export const ButtonExplore = styled(ButtonView)`
  background: #fdfdfd;
  border: none;
  color: #00171f;

  @media screen and (max-width: 768px) {
    background: #003459;
    color: #fdfdfd;
  }
`;
