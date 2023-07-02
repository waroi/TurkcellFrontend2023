import styled from "styled-components";

export const Container = styled.div`
  padding-top: 5vh;

  .info-text {
    img {
      width: 1.6875rem;
      height: 1.6875rem;
    }
    display: flex;
    padding: 0.5625rem 0.75rem;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 0.625rem;
    color: var(--primary-color-dark-blue-80, #002a48);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
    width: 35rem;
    background: var(
      --linear,
      linear-gradient(134deg, #fceed5 6.17%, #fceed5 75.14%, #ffe7ba 100%)
    );
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }

  .icons {
    display: flex;
    width: 35rem;
    padding: 0.5625rem 0.75rem;

    align-items: flex-start;

    @media (max-width: 992px) {
      margin-left: 0 !important;
      justify-content: center;
    }
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }

  .table-text {
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
`;

export const Div = styled.div``;

export const H1 = styled.h1`
  color: var(--primary-color-dark-blue, #003459);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
  text-transform: capitalize;
`;

export const P = styled.p`
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`;
