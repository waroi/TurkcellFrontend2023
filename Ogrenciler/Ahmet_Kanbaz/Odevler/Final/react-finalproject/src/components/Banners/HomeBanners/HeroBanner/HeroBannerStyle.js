import styled from "styled-components";

export const HeroBannerDiv = styled.div`
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  z-index: 10;
  overflow: hidden;

  .layout3 {
    width: 4.19394rem;
    height: 4.19394rem;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #f7dba7;
    left: 7%;
    top: 30%;
    z-index: -1;
  }
  .layout4 {
    width: 39.6875rem;
    height: 39.6875rem;
    transform: rotate(56.47deg);
    flex-shrink: 0;
    border-radius: 6.1875rem;
    opacity: 0.4000000059604645;
    background: #f7dba7;
    top: 37.25rem;
    left: 2.69rem;
  }
`;

export const Layout1 = styled.div`
  width: 535px;
  height: 535px;
  transform: rotate(25.23deg);
  border-radius: 99px;
  background: #f7dba7;
  top: 260px;
  right: 200px;
  z-index: -1;
  @media screen and (max-width: 768px) {
    width: 528.983px;
    height: 528.983px;
    border-radius: 48px;
    top: 420px;
    right: -150px;
  }
`;

export const Layout2 = styled(Layout1)`
  transform: rotate(9.355deg);
  background: #003459;
  top: 300px;
  right: 260px;
  z-index: -2;
  @media screen and (max-width: 768px) {
    top: 450px;
    right: -150px;
  }
`;

export const Layout5 = styled.div`
  width: 0.91413rem;
  height: 0.91413rem;
  transform: rotate(20.792deg);
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: #f7dba7;
  left: 47rem;
  top: 9.25rem;
  z-index: -20;
  @media screen and (max-width: 768px) {
    width: 0.91413rem;
    height: 0.91413rem;
    top: 11.25rem;
    left: 20.81rem;
  }
`;

export const Layout6 = styled.div`
  width: 1.71863rem;
  height: 1.71863rem;
  transform: rotate(-22.85deg);
  flex-shrink: 0;
  border-radius: 0.5625rem;
  background: #f7dba7;
  left: 45rem;
  top: 12.25rem;
  z-index: -30;
  @media screen and (max-width: 768px) {
    width: 0.9955rem;
    height: 0.9955rem;
    top: 12.66rem;
    left: 19.07rem;
  }
`;

export const Layout7 = styled.div`
  width: 1.34194rem;
  height: 1.34194rem;
  transform: rotate(-43.005deg);
  flex-shrink: 0;
  border-radius: 0.375rem;
  background: #002a48;
  top: 12.86rem;
  left: 44.94rem;
  z-index: -10;
  @media screen and (max-width: 768px) {
    width: 0.77731rem;
    height: 0.77731rem;
    top: 13.06rem;
    left: 18.87rem;
  }
`;

export const Layout8 = styled.div`
  width: 39.6875rem;
  height: 39.6875rem;
  transform: rotate(25.23deg);
  flex-shrink: 0;
  border-radius: 6.1875rem;
  background: #f7dba7;
  left: -15.54rem;
  top: -38.56rem;
  z-index: -1;
  @media screen and (max-width: 768px) {
    top: -38.56rem;
    left: -17.54rem;
    transform: rotate(19.424deg);
    border-radius: 3.8125rem;
  }
`;
