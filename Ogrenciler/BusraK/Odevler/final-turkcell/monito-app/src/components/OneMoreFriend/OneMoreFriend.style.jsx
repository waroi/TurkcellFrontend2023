import styled from "styled-components";

export const OneMoreFriendContainer = styled.div`
  border-radius: 20px;
  background: #003459;
  max-width: 90.75rem;
  min-height: 24.625rem;
  font-family: "svngilroy-bold", sans-serif;
  margin: 5rem auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    min-height: 40rem;
    width: 22.875rem !important;
  }
`;

export const OneMoreLeft = styled.div`
  width: 50%;
  height: 100%;
  float: left;

  img {
    margin-top: 3rem;
    left: 7.5rem;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    z-index: 20;
  }

  @media (max-width: 992px) {
    img {
      bottom: 0;
      left: -3rem;
      min-width: 32.75rem;
      height: 21.8125rem;
    }
  }
`;

export const OneMoreRight = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  background: #003459;
  color: #fff;
  padding: 1rem 1rem 0 1rem;

  .buttons {
    margin-left: 11rem;

    @media (max-width: 992px) {
      margin-left: 1rem;
      gap: 1rem !important;
    }
  }

  .OneText {
    position: relative;
    z-index: 20;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    left: 38rem;
    align-items: left;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;

    @media (max-width: 992px) {
      left: -6rem;
      padding: 0 3rem 6rem 3rem;
      min-width: 30rem;
    }
  }

  h1 {
    color: var(--primary-color-dark-blue, #003459);
    font-size: 3.25rem;
    font-weight: 800;
    line-height: 4.25rem;
    text-transform: capitalize;

    @media (max-width: 992px) {
      color: var(--primary-color-dark-blue-80, #002a48);
      text-align: center;
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 800;
      line-height: 3.375rem;
      text-transform: capitalize;
    }
  }

  h2 {
    color: var(--primary-color-dark-blue, #003459);
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 3.375rem;
    text-transform: capitalize;

    @media (max-width: 992px) {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2.25rem;
    }
  }

  h3 {
    color: var(--neutral-color-80, #242b33);
    text-align: right;
    font-size: 0.75rem;
    margin-left: 13rem;
    font-weight: 500;
    line-height: 1.125rem;
    display: flex;
    width: 24.625rem;
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 992px) {
      color: var(--neutral-color-80, #242b33);
      text-align: center;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.125rem;
      margin-left: 1rem;
      width: 90%;
    }
  }
`;

export const Rectangle9 = styled.div`
  width: 48.89325rem;
  height: 39.6875rem;
  transform: rotate(25.23deg);
  border-radius: 99px;
  background: #fceed5;
  position: absolute;
  top: -15rem;
  right: -10%;

  @media (max-width: 992px) {
    position: absolute;
    top: -21rem;
    left: -21rem;
    transform: rotate(9.41deg);
  }
`;

export const Rectangle1 = styled.div`
  width: 62.22125rem;
  height: 54.22125rem;
  transform: rotate(21.251deg);
  border-radius: 99px;
  background: var(--primary-color-dark-blue-80, #002a48);
  position: absolute;
  top: 12rem;
  left: -12rem;

  @media (max-width: 992px) {
    top: 36rem;
    left: -15rem;
    transform: rotate(28.251deg);
  }
`;
