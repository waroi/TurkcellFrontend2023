import styled from "styled-components";

const HorizontalShot = styled.div`
  padding: 60px 0;
  .GroupDogShot {
    color: #fff;
    border-radius: 20px;
    background: url("../../../assets/GroupDog.png") center center / cover,
      rgb(252, 239, 214);
    padding: 60px 80px 60px 55%;
    text-align: right;
    align-items: flex-end;
    h1 {
      font-weight: 800;
      font-size: 52px;
      display: inline-flex;
      align-items: center;
      gap: 15px;
    }
    h2 {
      font-size: 36px;
    }
    .banner-buttons {
      display: flex;
      gap: 20px;
      justify-content: end;
      .button1 {
        color: #fff;
        border: 2px solid #fff;
      }
      .button2 {
        background-color: #fff !important;
        color: #003459;
      }
    }
  }
  @media (max-width: 992px) {
    .GroupDogShot {
      background: rgb(252, 239, 214);
      padding: 0px 10px 20px 23px;
      font-size: 12px;
      height: 441px;
      text-align: left;
      color: #003459;
      position: relative;
      z-index: 1;
      overflow: hidden;
      h1 {
        font-weight: 800;
        font-size: 32px;
        display: inline-flex;
        align-items: center;
        gap: 15px;
        margin: 20px 0 5px;
      }
      h2 {
        font-size: 20px;
        margin: 15px 0;
      }
      .dogs {
        position: absolute;
        height: 230px;
        bottom: 0;
        margin: 0 auto;
        display: flex;
        left: 0;
        justify-content: center;
      }
      .rectangle {
        position: absolute;
        top: 320px;
        left: -130px;
        width: 816.401px;
        height: 799.52px;
        transform: rotate(-175.16deg);
        flex-shrink: 0;
        border-radius: 99px;
        background-color: #002a48;
        z-index: -1;
      }
      .banner-buttons {
        width: 100%;
        display: flex;
        gap: 20px;
        justify-content: center;
        .button1 {
          font-size: 12px;
          color: #003459;
          background-color: transparent;
          border: 2px solid #003459;
        }
        .button2 {
          font-size: 12px;
          background-color: #003459 !important;
          color: #fff;
        }
      }
    }
  }
`;

export default HorizontalShot;
