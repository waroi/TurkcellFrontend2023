import styled from "styled-components";

const HeroBannerStyled = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: relative;
  top: -120px;
  border-radius: 0px 0px 40px 40px;

  .container {
    z-index: 10;
  }
  .hero-content {
    .buttonText {
      font-size: 16px;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
  .hero-image {
    display: flex;
    align-items: center;
    margin-top: 163px;
    position: absolute;
    right: 200px;
    top: -220px;
  }
  .title {
    position: relative;
    line-height: 60px;
    z-index: 5;
    color: #002a48;
    font-weight: 800;
    text-transform: capitalize;
    font-size: 60px;
  }

  .subTitle {
    line-height: 60px;
    color: #002a48;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 46px;
  }
  .paragraph {
    width: 50%;
    color: #242b33;
    font-size: 16px;
    font-style: light;
    font-weight: 500;
    line-height: 24px;
  }
  img {
    flex-shrink: 0;
    overflow-x: hidden;
    position: relative;
    z-index: 12;
  }
  @media (max-width: 992px) {
    .hero-image {
      display: block;
      margin: 0;
      position: relative;
      right: 0;
      top: 0;
    }
    h1 {
      font-size: 40px !important;
    }
    h2 {
      font-size: 26px !important;
      padding: 0 !important;
    }
    .paragraph {
      font-size: 12px;
      width: auto;
    }
    .hero-content {
      margin-top: 12rem !important;
    }
  }
`;

export default HeroBannerStyled;
