import styled from "styled-components";

export const ActivePage = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: none;

  font-weight: 600;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  text-decoration: none;
  &:focus {
    background-color: var(--neutral-color-00, rgba(0, 52, 89, 1));
  }
  &:active {
    background-color: var(--neutral-color-00, rgba(0, 52, 89, 1));
  }
`;

export const Ul = styled.ul`
  li {
    list-style: none;
    display: inline-block;
    margin: 0 10px;
    border-radius: 5px;
    border: none;

    &:focus {
      background-color: var(--neutral-color-00, rgba(0, 52, 89, 1));
    }
    &:active {
      background-color: var(--neutral-color-00, rgba(0, 52, 89, 1));
    }
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-bottom: 1px solid var(--neutral-color-01, rgba(0, 52, 89, 0.1));

  h3 {
    color: var(--neutral-color-100, #00171f);
    font-size: 1rem;
    font-family: "svngilroy-bold", sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
  }

  label {
    display: flex;
    gap: 0.5rem;
  }
`;

export const ProductTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h1 {
      color: var(--primary-color-dark-blue, #003459);
      font-family: "svngilroy-bold", sans-serif;
      font-size: 1.5rem;

      font-weight: 700;
      line-height: 2.25rem;
    }
    p {
      margin-top: 0.5rem;
      color: var(--neutral-color-60, #667479);
      font-size: 0.875rem;
      font-family: "svngilroy-bold", sans-serif;
      font-weight: 500;
      line-height: 1.25rem;
      text-align: left;
    }
  }

  select {
    display: inline-flex;
    padding: 0.375rem 0.625rem 0.25rem 1.25rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1.25rem;
    border: 1px solid var(--neutral-color-20, #ccd1d2);
    justify-content: center;
  }

  @media (max-width: 992px) {
    flex-direction: column-reverse;

    .filter-sorter {
      display: flex;
      justify-content: space-between;
      gap: 5rem;
    }
  }
`;

export const MobileFilter = styled.div`
  display: none !important;

  @media (max-width: 992px) {
    display: block !important;
    display: flex !important;
    flex-direction: row !important;

    .category-select {
      width: 8rem;
    }
  }
`;

export const ProductLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  align-items: start;
  h1 {
    color: var(--primary-color-dark-blue, #003459);
    font-family: "svngilroy-bold", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.25rem;
  }

  div {
    h3 {
      color: var(--neutral-color-100, #00171f);

      font-size: 1rem;

      font-style: normal;
      font-weight: 700;
      line-height: 1.5rem;
    }
  }
  .label {
    width: 10px;
    input {
      width: 4rem;
      border: none;
      border-bottom: 1px solid var(--neutral-color-20, #ccd1d2);
    }
  }
  @media (max-width: 992px) {
    background-color: #003459;
    display: none;
  }
`;

export const MainDiv = styled.div`
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;
