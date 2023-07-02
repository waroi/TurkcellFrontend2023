import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-radius: 40px 40px 0px 0px;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  .footerBody {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    flex-shrink: 0;
    .footerForm {
      background: #003459;
      padding: 2rem;
      border-radius: 1rem;
      h4 {
        color: #fdfdfd;
        line-height: 2.25rem;
      }
      .formWrapper {
        border-radius: 14px;
        padding: 0.75rem;
        gap: 0.75rem;
        input {
          border-radius: 8px;
          border: 1px solid #99a2a5;
          padding: 0.875rem 1.75rem;
        }
        button {
          color: #fdfdfd;
          background-color: #003459;
          display: flex;
          padding: 0.875rem 1.75rem;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
      }
    }
    .footerMenu {
      padding: 0rem 0rem 2.5rem 0rem;
      border-bottom: 1px solid #ccd1d2;
      span, a {
        color: #00171f;
        font-weight: 500;
        line-height: 1.5rem;
      }
      .footerMenuItems {
        &:nth-child(1) {
          gap: 1.5rem;
        }
        &:nth-child(2) {
          gap: 2rem;
        }
      }
    }
    .footerBottom {
      gap: 1rem;
      span {
        color: #667479;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
      }
    }
  }
`;
