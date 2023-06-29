import styled from "styled-components";

export const StaticOrderComponentMainContainer2 = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const StaticOrderComponentContainer = styled.div`
  background-image: url("../../public/StaticOrderComponent1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin: 100px 10px;
  @media screen and (max-width: 992px) {
    background-image: url("../../public/StaticOrderComponent1Mobile.jpeg");
  }
`;

export const StaticOrderComponentCategoryContainer = styled.div`
  background-image: url("../../public/StaticOrderComponentProducts.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin: 100px 10px;
`;

export const StaticOrderComponentContainer2 = styled.div`
  background-image: url("../../public/StaticOrderComponent2.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin: 100px 10px;
`;

export const StaticOrderComponentHeader = styled.div`
  order: 2;
  padding: 60px;
  @media screen and (max-width: 992px) {
    order: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px;
    text-align: center;
  }
`;

export const StaticOrderComponent2Header = styled.div`
  padding: 60px;

  @media screen and (max-width: 768px) {
    padding: 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px;
    text-align: center;
  }
`;

export const StaticOrderComponentH1 = styled.h1`
  color: #003459;
  font-size: 52px;
  font-family: SVN-Gilroy;
  font-weight: 800;
  line-height: 68px;
  text-transform: capitalize;
  @media screen and (max-width: 600px) {
    font-size: 36px;
    line-height: 54px;
  }
`;

export const StaticOrderComponentH2 = styled.h2`
  color: #003459;
  font-size: 36px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 54px;
  text-transform: capitalize;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const StaticOrderComponentP = styled.p`
  color: #242b33;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 18px;
`;

export const StaticOrderComponentButtonDark = styled.button`
  display: flex;
  width: 163px;
  padding: 14px 28px 10px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 57px;
  background: #003459;
  border: none;
  color: #fff;
  order: ${(props) => props.order};
  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const StaticOrderComponentButtonLight = styled.button`
  display: inline-flex;
  padding: 14px 28px 10px 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 57px;
  border: 1.5px solid #003459;
  background: none;
  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const StaticOrderComponentSpan = styled.span`
  width: 42px;
  height: 38px;
  color: #003459;
`;
