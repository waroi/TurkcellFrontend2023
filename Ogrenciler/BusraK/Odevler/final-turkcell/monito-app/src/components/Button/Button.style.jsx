import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;

  &.dark-blue {
    display: flex;
    min-width: 8.49vw;
    padding: 0.729vw 1.458vw 0.51vw 1.458vw;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 57px;
    background: var(--primary-color-dark-blue, #003459);
    color: var(--neutral-color-00, #fdfdfd);
    font-size: 1rem;
    font-family: "svngilroy-bold", sans-serif;
    font-weight: 500;
    line-height: 1.5rem;

    @media (max-width: 992px) {
      width: 10.1875rem;
      padding: 0.875rem 1.75rem 0.625rem 1.75rem;
    }
  }

  &.no-color-icon {
    display: inline-flex;
    padding: 0.729vw 1.458vw 0.51vw 1.458vw;
    justify-content: space-between;
    gap: 0.5rem;
    border-radius: 57px;
    border: 2px solid var(--primary-color-dark-blue, #003459);
    color: var(--primary-color-dark-blue, #003459);
    background-color: transparent;
    text-align: center;
    font-size: 1rem;
    font-family: "svngilroy-bold", sans-serif;
    font-weight: 500;
    line-height: 1.5rem;

    @media (max-width: 992px) {
      width: 10.1875rem;
      padding: 0.875rem 1.75rem 0.625rem 1.75rem;
    }
  }

  &.no-color-icon-white {
    display: inline-flex;
    padding: 0.729vw 1.458vw 0.51vw 1.458vw;
    justify-content: space-between;
    gap: 0.5rem;
    border-radius: 57px;
    border: 2px solid rgba(253, 253, 253, 1);
    color: rgba(253, 253, 253, 1);
    background-color: transparent;
    text-align: center;
    font-size: 1rem;
    font-family: "svngilroy-bold", sans-serif;
    font-weight: 500;
    line-height: 1.5rem;

    @media (max-width: 992px) {
      width: 10.1875rem;
      padding: 0.875rem 1.75rem 0.625rem 1.75rem;
    }
  }

  &.white {
    display: flex;
    width: 10.49vw;
    padding: 0.729vw 1.458vw 0.51vw 1.458vw;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 57px;
    background: var(--primary-color-dark-blue, #fdfdfd);
    color: var(--neutral-color-100, #00171f);
    font-size: 1rem;
    font-family: "svngilroy-bold", sans-serif;
    font-weight: 500;
    line-height: 1.5rem;

    @media (max-width: 992px) {
      width: 10.1875rem;
      padding: 0.875rem 1.75rem 0.625rem 1.75rem;
    }
  }
  &.buy-button {
    display: inline-flex;
    padding: 0.729vw 1.458vw 0.51vw 2.458vw;

    justify-content: space-between;
    gap: 0.5rem;
    border-radius: 57px;
    border: 2px solid rgba(0, 120, 205, 1);
    color: var(--neutral-color-00, #fdfdfd);
    background-color: rgba(0, 120, 205, 1);
    text-align: center;
    font-size: 1rem;
    font-family: "svngilroy-bold", sans-serif;
    font-weight: 500;
    line-height: 1.25rem;

    @media (max-width: 992px) {
      padding: 0.875rem 1.75rem 0.625rem 1.75rem;
    }
  }

  &.detail-button {
    display: inline-flex;
    padding: 0.729vw 1.458vw 0.51vw 1.458vw;
    justify-content: space-between;
    gap: 0.5rem;
    border-radius: 57px;
    color: var(--neutral-color-60, #667479);
    font-size: 0.875rem;
    background: var(--neutral-color-20, #ccd1d2);
    text-align: center;
    font-size: 1rem;
    font-family: "svngilroy-bold", sans-serif;
    font-weight: 500;
    line-height: 1.25rem;

    @media (max-width: 992px) {
      width: 10.1875rem;
      padding: 0.875rem 1.75rem 0.625rem 1.75rem;
    }
  }
`;
