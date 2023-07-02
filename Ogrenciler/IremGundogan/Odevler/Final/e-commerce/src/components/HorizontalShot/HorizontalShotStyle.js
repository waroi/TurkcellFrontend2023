import styled from "styled-components";

const HorizontalShot = styled.div`
  h1,
  h2,
  p {
    color: #003459;
  }
  padding: 60px 0;
  .horizontalShot {
    border-radius: 20px;
    background: url("../../../assets/horizontal-shot.png") center center / cover,
      rgb(0, 52, 89);
    padding: 60px 80px 60px 55%;
    text-align: right;
    align-items: flex-end;
    .banner-buttons {
      display: flex;
      gap: 20px;
      justify-content: end;
    }
  }
  @media (max-width: 992px) {
    height: 640px;
    .horizontalShot {
      background: none;
      padding: 0;
      background-repeat: no-repeat;
      position: relative;
    }
    .wrapper {
      position: relative;
      z-index: 2;
      text-align: center;
    }
    .horizontal {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0 auto;
      z-index: 1;
      height: 640px;
    }
    .banner-buttons {
      justify-content: center !important;
    }
    h1 {
      font-weight: 800;
      font-size: 32px;
      padding-top: 20px;
    }
    h2 {
      font-size: 20px;
      margin: 15px 0;
    }
    p {
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;

export default HorizontalShot;
