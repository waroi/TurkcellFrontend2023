import styled from "styled-components";

const StyledFooter = styled.footer`
  border-radius: 40px 40px 0px 0px;
  background: #fceed5;
  margin-top: auto;
  .container {
    padding-top: 72px;

    .subscribe {
      display: flex;
      padding: 16px;
      align-items: flex-start;
      border-radius: 16px;
      background: #003459;

      h4 {
        color: #fdfdfd;
        font-weight: 700;
        line-height: 36px;
      }

      .inputArea {
        display: flex;
        border-radius: 14px;
        background: #fff;
        padding: 12px;
        align-items: center;
        gap: 12px;
        width: 100%;
        justify-content: space-between;

        input {
          padding: 14px 28px;
          border-radius: 8px;
          border: 2px solid #99a2a5;
          width: 100%;
          &::placeholder {
            font-size: 14px;
          }
        }

        .squaredPrimary {
          border-radius: 8px;
          width: 30%;
          @media (max-width: 992px) {
            width: 100%;
          }
        }
        @media (max-width: 992px) {
          flex-direction: column;
        }
      }

      @media (max-width: 992px) {
        flex-direction: column;
      }
    }

    .footerMiddle {
      margin-top: 32px;
      border-bottom: 1px solid #ccd1d2;
      @media (max-width: 992px) {
        gap: 32px;
      }
      .footerNav {
        a {
          color: #003459;
          text-decoration: none;
        }
      }

      .fa-brands {
        font-size: 24px;
        cursor: pointer;
      }
    }

    .company {
      color: #667479;
      a {
        color: #003459;
        text-decoration: none;
        font-size: 32px;
        font-weight: 900;
      }

      @media (max-width: 992px) {
        :nth-child(1) {
          order: 3;
          padding-top: 10px;
        }
        :nth-child(2) {
          order: 1;
        }
        :nth-child(3) {
          order: 2;
          padding-top: 32px;
        }
      }
    }
  }
`;

export default StyledFooter;
