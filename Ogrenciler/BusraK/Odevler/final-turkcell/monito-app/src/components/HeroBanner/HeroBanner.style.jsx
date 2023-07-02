import styled from "styled-components";

export const HeroBannerContainer = styled.div`
  display: flex;
  font-family: "svngilroy-bold", sans-serif;
  flex-wrap: wrap;
  border-radius: 0 0 40px 40px;
  background: var(
    --linear,
    linear-gradient(134deg, #fceed5 6.17%, #fceed5 75.14%, #ffe7ba 100%)
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 43.4375rem;
  overflow: hidden;
  top: -6.16rem !important;
  position: relative;
  z-index: 90;
`;

export const HeroBannerLeft = styled.div`
  width: 50%;
  height: 68%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
  text-align: left;

  .buttons {
    gap: 2rem !important;
    @media (max-width: 992px) {
      gap: 0.1rem !important;
    }
  }

  @media (max-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 90%;
    padding: 4%;
    position: relative;
    top: -3.5rem;
  }

  overflow: hidden;
`;

export const H1 = styled.h1`
  color: #002a48;
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 4.25rem;
  text-transform: capitalize;
  padding-top: 110px;
  z-index: 2;
  @media (max-width: 992px) {
    font-size: 2.25rem;
    display: flex;
    white-space: nowrap;
    line-height: 3.75rem;
  }
`;

export const H2 = styled.h2`
  color: var(--primary-color-dark-blue-80, #002a48);
  font-size: 2.875rem;
  font-weight: 700;
  line-height: 3.75rem;
  text-transform: capitalize;

  @media (max-width: 992px) {
    font-size: 1.55rem;
    line-height: 2.375rem;
  }
`;

export const Paragraph = styled.p`
  color: var(--neutral-color-80, #242b33);
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;

  @media (max-width: 992px) {
    font-size: 0.75rem;
    width: 23rem !important;
    width: 100%;
    line-height: 1.125rem;
  }
`;

export const HeroBannerRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
  text-align: left;

  @media (max-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    position: relative;
    bottom: -1.6rem;
  }
`;

export const GoodHumored = styled.img`
  position: absolute;
  z-index: 3;
  left: 42%;
  top: 85px;
  max-width: 80%;

  @media (max-width: 992px) {
    left: 8%;
    top: -120px;
    width: 100%;
    height: 20rem;
  }
`;

export const Rectangle9 = styled.img`
  position: absolute;
  z-index: 1;
  min-width: 49.6875rem;
  height: 9.6875rem;
  top: -3%;
  left: -6%;

  @media (max-width: 992px) {
    max-width: 23.45rem;
    left: 0%;
    top: -1%;
  }
`;

export const Rectangle2 = styled.img`
  position: absolute;
  z-index: 2;
  left: 72%;
  top: 69%;
  transform: translate(-50%, -50%);
  max-width: 47%;

  @media (max-width: 992px) {
    top: 10%;
    left: 75%;
    height: 50%;
    max-width: 100%;
  }
`;

export const Rectangle1 = styled.img`
  position: absolute;
  z-index: 2;
  left: 68%;
  top: 77%;
  transform: translate(-50%, -50.5%);
  right: 0;
  max-width: 50%;

  @media (max-width: 992px) {
    top: 14%;
    left: 64%;
    max-width: 100%;
  }
`;

export const Rectangle5 = styled.img`
  position: absolute;
  z-index: 20;
  left: 57.3%;
  top: 22%;
  transform: translate(-50%, -50.5%);
  right: 0;
  max-width: 50%;

  @media (max-width: 992px) {
    top: -49%;
    left: 79%;
    max-width: 100%;
  }
`;

export const Rectangle6 = styled.img`
  position: absolute;
  z-index: 19;
  left: 56.3%;
  top: 28.5%;
  transform: translate(-50%, -50.5%);
  right: 0;
  max-width: 50%;

  @media (max-width: 992px) {
    top: -44%;
    left: 78%;
    max-width: 90%;
  }
`;

export const Rectangle7 = styled.img`
  position: absolute;
  z-index: 20;
  left: 56%;
  top: 29.5%;
  transform: translate(-50%, -50.5%);
  right: 0;
  max-width: 50%;

  @media (max-width: 992px) {
    top: -43.4%;
    left: 77%;
    max-width: 90%;
  }
`;
