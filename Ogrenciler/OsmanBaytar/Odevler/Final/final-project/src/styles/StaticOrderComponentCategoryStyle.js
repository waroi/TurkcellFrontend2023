import styled from "styled-components";

export const StaticOrderComponentCategoryContainer = styled.div`
  background-image: url("../../public/StaticOrderComponentProducts.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin: 100px 10px;
  @media screen and (max-width: 992px) {
    background-image: url("../../public/StaticOrderComponentProductsMobile.jpeg");
    margin: 40px 10px;
  }
`;

export const StaticOrderComponentCategoryHeader = styled.div`
  order: 2;
  padding: 60px;
  @media screen and (max-width: 992px) {
    order: 0;
    padding-bottom: 0px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
    padding-bottom: 0px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
    padding-bottom: 0px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px;
    padding-bottom: 0px;
    padding-top: 30px;
  }
`;

export const StaticOrderComponentCategoryH1 = styled.h1`
  color: #fdfdfd;
  font-size: 52px;
  font-family: SVN-Gilroy;
  font-weight: 800;
  line-height: 68px;
  text-transform: capitalize;
  @media screen and (max-width: 992px) {
    color: #002a48;
  }
  @media screen and (max-width: 600px) {
    font-size: 36px;
    line-height: 54px;
  }
`;

export const StaticOrderComponentCategoryH2 = styled.h2`
  color: #fdfdfd;
  font-size: 36px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 54px;
  text-transform: capitalize;
  @media screen and (max-width: 992px) {
    color: #002a48;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const StaticOrderComponentCategoryP = styled.p`
  color: #ccd1d2;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 18px;
  @media screen and (max-width: 992px) {
    color: #242b33;
  }
`;

export const StaticOrderComponentCategoryButtonDark = styled.button`
  display: flex;
  width: 163px;
  padding: 14px 28px 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 57px;
  background: #fdfdfd;
  border: none;
  color: #00171f;
  order: ${(props) => props.order};
  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 992px) {
    background: #002a48;
    color: #fdfdfd;
  }
`;

export const StaticOrderComponentCategoryButtonLight = styled.button`
  display: inline-flex;
  padding: 14px 28px 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 57px;
  border: 1.5px solid #fdfdfd;
  background: none;
  color: #fdfdfd;
  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 992px) {
    color: #002a48;
    border: 1.5px solid #002a48;
  }
`;

export const StaticOrderComponentCategorySpan = styled.span`
  width: 42px;
  height: 38px;
  color: #003459;
`;
