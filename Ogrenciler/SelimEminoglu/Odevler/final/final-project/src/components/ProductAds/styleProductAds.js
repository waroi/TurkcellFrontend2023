import styled from "styled-components";

export const FlexPath = styled.div`
  padding-top: 9rem;
  display: flex;
  justify-content: start;
  gap: 5px;
`;

export const ProductH2 = styled.h2`
  margin: 0;
  color: #667479;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const Productİmg = styled.img`
  width: 24px;
  height: 24px;
`;

export const ProductAdsDiv = styled.div`
  margin-bottom: 3rem;
  overflow: hidden;
  position: relative;
  width: 1180px;
  height: 378px;
  flex-shrink: 0;
  border-radius: 20px;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
`;

export const Rectangle1 = styled.div`
  width: 816.401px;
  height: 799.52px;
  transform: rotate(160.219deg);
  flex-shrink: 0;
  border-radius: 99px;
  background: #002a48;
  position: absolute;
  left: 513px;
`;

export const ProductFlexDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductAdsİmgDiv = styled.div`
  position: relative;
  top: 100px;
  left: 45px;
  z-index: 1;
  width: 650px;
  height: 301px;
  flex-shrink: 0;
  background: url("./src/assets/images/ads_product.png"),
    transparent 50% / cover no-repeat;
`;

export const TextAds = styled.div`
  margin-top: 4rem;
  margin-right: 4.4rem;
  display: flex;

  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const ProductAdsH2 = styled.h2`
  color: #fdfdfd;
  font-size: 52px;
  font-family: SVN-Gilroy;
  font-weight: 800;
  line-height: 68px;
  text-transform: capitalize;
  margin: 0;
  text-align: right;
`;

export const ProductAdsH3 = styled.h3`
  color: #fdfdfd;
  font-size: 36px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 54px;
  text-transform: capitalize;
  margin: 0;
  text-align: right;
`;

export const ProductAdsH4 = styled.h4`
  color: #ccd1d2;
  text-align: right;
  font-size: 12px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  flex-direction: column;
`;

export const FlexButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
`;
