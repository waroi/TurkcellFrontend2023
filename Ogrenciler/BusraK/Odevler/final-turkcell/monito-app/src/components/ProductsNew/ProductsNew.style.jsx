import styled from "styled-components";

export const ProductsNewWrapper = styled.div`
  max-width: 90rem;
  align-items: start;
  justify-content: flex-start !important;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 992px) {
    justify-content: space-between;
    width: 22rem;
  }

  .col {
    flex: 1 1 0%;

    @media (max-width: 992px) {
      width: calc(50% - 1rem);
      margin-bottom: 1rem;
    }
  }
`;

export const ProductsNewContainer = styled.div`
  display: flex;
  max-width: 27rem;
  padding: 0.5rem 0rem 0rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 35.625rem;
  gap: 0.5rem;
  border-radius: 12px;
  background: var(--neutral-color-00, #fdfdfd);
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 2rem;

    @media (max-width: 992px) {
      margin-bottom: 0;
      width: 80%;
      margin-left: 1.5rem;
    }
  }

  @media (max-width: 992px) {
    height: 100%;
    padding: 0.5rem;
    display: grid;
    grid-template-rows: 1fr auto;
    width: 9rem;
    margin-right: 1.5rem;
    padding-left: 1rem;
    gap: 0 !important;
  }
`;

export const Image = styled.img`
  width: 50%;
  margin-top: 1rem !important;
  height: 10rem !important;
  max-height: 30% !important;
  margin: 2rem auto;
  border-radius: 6px;

  @media (max-width: 992px) {
    height: auto;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  font-family: "svngilroy-bold", sans-serif;
  color: var(--neutral-color-100, #00171f);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  width: 15.5rem;

  @media (max-width: 992px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Category = styled.h2`
  display: flex;
  color: var(--neutral-color-60, #667479);
  font-size: 0.75rem;
  font-family: "svngilroy-light", sans-serif;
  font-family: "svngilroy-bold", sans-serif;
  line-height: 1.125rem;
  gap: 0.5rem;
  align-items: center;

  p {
    color: var(--neutral-color-60, #667479);
    padding-left: 0.2rem;
    margin-top: 0.8rem;
    font-size: 0.75rem;
    font-family: "svngilroy-bold", sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 1.125rem;
  }
`;

export const Price = styled.h3`
  text-align: start;
  color: var(--neutral-color-100, #00171f);
  font-size: 0.875rem;
  font-family: "svngilroy-bold", sans-serif;
  font-weight: 700;
  line-height: 1.25rem;
  display: flex;
  width: 15.5rem;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-right: 0.1rem;
  align-self: stretch;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 10rem;

    gap: 0.5rem;
    margin: 0 auto;
    margin-left: -2rem;

    button {
      width: 90%;
    }
  }
`;
