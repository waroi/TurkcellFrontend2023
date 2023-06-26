import styled from "styled-components";

export const MidAdsDiv = styled.div`
  width: 1180px;
  height: 378px;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${(props) => props.backgroundcolor};
  position: relative;
  overflow: hidden;
  margin: 3rem 0;
`;

export const AdsPicDiv = styled.div`
  width: 513px;
  height: 342px;
  flex-shrink: 0;
  background: ${(props) => `url(${props.image}),
    transparent 50% / cover no-repeat;
  `};
  position: relative;
  z-index: 1;
  top: 36px;
  left: 20px;
`;

export const AdsPicDivRight = styled.div`
  width: 538.527px;
  height: 378.794px;
  flex-shrink: 0;
  background: ${(props) =>
    `url(${props.image}), transparent 50% / cover no-repeat`};
  position: relative;
  z-index: 1;
  top: 0px;
`;

export const Rectangle10 = styled.div`
  width: 787.54px;
  height: 787.54px;
  transform: rotate(28.251deg);
  flex-shrink: 0;
  border-radius: 99px;
  background: #002a48;
  position: absolute;
  top: 167.7px;
  left: -181px;
`;

export const Rectangle11 = styled.div`
  width: 782.292px;
  height: 635px;
  transform: rotate(25.23deg);
  flex-shrink: 0;
  border-radius: 99px;
  background: #fceed5;
  position: absolute;
  top: -268px;
  left: 527px;
`;

export const Rectangle12 = styled(Rectangle11)`
  transform: rotate(-25.23deg);
  top: -214px;
  left: -210px;
`;

export const Rectangle13 = styled(Rectangle10)`
  opacity: 0.30000001192092896;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  transform: rotate(-28.251deg);
  top: 179px;
  left: 530px;
`;

export const FlexAds = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
`;

export const FlexButtonsRight = styled(FlexButtons)`
  justify-content: start;
`;

export const TextAds = styled.div`
  margin-top: 2rem;
  margin-right: 6.4rem;
  display: flex;

  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const TextAdsRight = styled(TextAds)`
  margin-right: 0;
  margin-left: 6.4rem;
`;

export const AdsH2 = styled.h2`
  color: #003459;
  font-size: 52px;
  font-family: SVN-Gilroy;
  font-weight: 800;
  line-height: 68px;
  text-transform: capitalize;
  margin: 0;
  text-align: right;
`;

export const AdsH2Right = styled(AdsH2)`
  text-align: left;
`;

export const AdsH3 = styled.h3`
  color: #003459;
  font-size: 36px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 54px;
  text-transform: capitalize;
  margin: 0;
  text-align: right;
`;

export const AdsH3Right = styled(AdsH3)`
  text-align: left;
`;

export const AdsH4 = styled.h4`
  color: #242b33;
  text-align: right;
  font-size: 12px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  flex-direction: column;
`;

export const AdsH4Right = styled(AdsH4)`
  text-align: left;
`;
