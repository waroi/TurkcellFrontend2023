import styled from "styled-components";
export const FooterContainer = styled.div`
  display: flex;
  min-height: 27.5rem;
  font-family: "svngilroy-bold", sans-serif;
  padding: 5rem 8.125rem 2.5rem 8.125rem;
  flex-direction: column;
  gap: 2.5rem;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );

  .register-now {
    display: flex;
    padding: 2rem;
    text-align: start;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.25rem;
    border-radius: 16px;
    background: var(--primary-color-dark-blue, #003459);

    .inputContainer {
      display: flex;
      padding: 0.75rem;
      align-items: center;
      gap: 0.75rem;
      border-radius: 14px;
      background: #fff;

      input {
        display: flex;
        padding: 0.875rem 1.75rem;
        align-items: center;
        gap: 0.625rem;
        flex: 1 0 0;
        border-radius: 8px;
        border: 1px solid var(--neutral-color-40, #99a2a5);
        background: #fff;
      }

      button {
        color: var(--neutral-color-00, #fdfdfd);
        border: none;
        display: flex;
        max-width: 15.1875rem;
        padding: 1vw 1.458vw 1vw 1.458vw;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        flex-shrink: 0;
        border-radius: 8px;
        background: var(--primary-color-dark-blue, #003459);
      }
    }

    h1 {
      display: flex;
      max-width: 24.3125rem;
      flex-direction: column;
      color: var(--neutral-color-00, #fdfdfd);
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2.25rem;
      text-transform: capitalize;
    }
  }

  .footer-text {
    padding: 2.25rem 0 0 0;
    color: var(--neutral-color-60, #667479);

    img {
      justify-content: center;
      margin: auto;
    }

    p {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.25rem;
    }
  }

  .all-ul {
    color: var(--neutral-color-100, #00171f);
  }

  .site-ul {
    font-size: 1rem;
    font-family: "svngilroy-bold", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 992px) {
    padding: 2rem 1rem 0 1rem;

    .register-now {
      display: flex;
      padding: 0.5rem 1rem 0.5rem 1rem;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      color: var(--neutral-color-00, #fdfdfd);
      font-style: normal;
      font-weight: 700;
      line-height: 2rem;
      text-transform: capitalize;

      .inputContainer {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
        margin-bottom: 0.5rem;

        input {
          display: flex;
          width: 100%;
        }

        button {
          border: none;
          display: flex;
          max-width: 28.1875rem !important;
          padding: 0.875rem 5rem 0.625rem 4rem;
          width: 100%;
        }
      }
    }

    .all-ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .site-ul {
      display: flex;
      width: 100%;
      gap: 1.5rem !important;
      display: flex;
      justify-content: space-between;
      align-self: stretch;
      padding: 0.5rem 1rem 0.5rem 1rem;
    }

    .social-ul {
      display: flex;
      display: flex;
      justify-content: space-between;
      align-self: stretch;
      width: 100%;

      li {
        gap: 1.8rem !important;
      }
    }

    .footer-text {
      flex-direction: column-reverse;
      gap: 0.1rem !important;
      color: var(--neutral-color-60, #667479);
      font-family: "svngilroy-medium", sans-serif;
    }

    .footer-text img {
      order: 1;
      margin-bottom: 1rem;
      padding: 0.5rem 1rem 1.5rem 1rem;
      width: 10rem;
      justify-content: center;
      margin: auto;
    }

    .footer-text div {
      margin-left: auto;
      margin-right: auto;
      font-size: 0.75rem;
    }

    p:nth-child(3) {
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.125rem;
    }

    p:nth-child(1) {
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1rem;
    }
  }
`;
