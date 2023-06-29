import styled from "styled-components";

export const StaticOrderMainComponentMainContainer = styled.div`
  background-image: url("../../public/StaticOrderComponentMain.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 695px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: -1;
  width: 100%;
  position: relative;
  top: -72px;
  padding: 100px;
  @media screen and (max-width: 991px) {
    padding: 40px;

    background-image: url("../../public/StaticOrderComponentMainMobile.jpeg");
  }
  //   @media screen and (max-width: 768px) {
  //     padding: 50px;
  //   }
  //   @media screen and (max-width: 600px) {
  //     padding: 30px;
  //     padding-top: 60px;
  //   }
  @media screen and (max-width: 480px) {
    padding: 20px;
    padding-top: 60px;
  }
  @media screen and (max-width: 369px) {
    padding: 10px;
    padding-top: 60px;
  }
`;

export const StaticOrderComponentHeaderMain = styled.div`
  padding: 60px;
  @media screen and (max-width: 992px) {
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

export const StaticOrderComponentH1Main = styled.h1`
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

export const StaticOrderComponentH2Main = styled.h2`
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

export const StaticOrderComponentPMain = styled.p`
  color: #242b33;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 18px;
`;

export const StaticOrderComponentButtonDarkMain = styled.button`
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

export const StaticOrderComponentButtonLightMain = styled.button`
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
