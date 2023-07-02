import styled from "styled-components";

const FooterStyle = styled.div`
  margin-top: auto;
  border-radius: 33px 33px 0px 0px;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  .footerWrapper {
    padding-top: 66px;
    width: 1180px;
    margin: 0 auto;

    .register {
      background-color: #003459;
      border: 1px;
      border-radius: 16px;
      align-items: flex-start;
      padding: 26px;
      h2 {
        font-weight: 700;
        line-height: 30px;
        color: #fff;
      }
      .emailArea {
        background-color: #fff;
        border-radius: 11.566px;
        gap: 10px;
        padding: 10px;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        input {
          border-radius: 7px;
          border: 1px solid #99a2a5;
          padding: 12px 24px;
          width: 70%;

          &::placeholder {
            font-weight: 500;
            font-size: 12px;
            color: #99a2a5;
          }
        }
        .button {
          border-radius: 6.609px;
        }
      }
    }
    .footerNavbar {
      margin-top: 33.05px;
      border-bottom: 0.826px solid var(--neutral-color-20, #ccd1d2);
      display: flex;
      justify-content: space-between;
      .footerLinks {
        justify-content: start;
      }
      .footerInner {
        a {
          color: #003459;
        }
      }
      .SocialIcons {
        width: 30px;
        margin-bottom: 20px;
      }
    }
    .footerReserved {
      color: #667479;

      img {
        width: 114px;
        height: 26px;
      }
      .footerTerm {
        justify-content: end;
      }
      .second {
        display: flex;
        justify-content: center;
      }
      .third {
        font-weight: 600;
      }
    }
  }
  @media (max-width: 992px) {
    .footerWrapper {
      width: 100%;
      padding: 20px;
    }
    
    .socials {
      justify-content: center !important;
    }

    .register {
      flex-direction: column;
    }

    .button {
      width: 100%;
    }

    .emailArea {
      flex-direction: column;
      width: 100%;
    }

    .footerNavbar {
      flex-direction: column;
      gap: 30px;
    }

    .footerReserved {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    input,
    button {
      width: 100% !important;
    }
    .first {
      order: 3;
      margin-top: 10px;
      font-size: 12px;
    }
    .second {
      order: 1;
    }
    .third {
      order: 2;
      margin-top: 20px;
      justify-content: center !important;
    }
  }
`;

export default FooterStyle;
