import styled from "styled-components";

export const WhatsNewWrapper = styled.div`
  .title {
    gap: 1rem;
    @media screen and (max-width: 992px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const WhatsNewContainer = styled.div`
  width: 90rem;
  height: 61.625rem;
  flex-shrink: 0;
  font-family: "svngilroy-bold", sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 0 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const H1 = styled.h1`
  color: var(--primary-color-dark-blue, #003459);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  text-transform: capitalize;
`;

export const H2 = styled.h2`
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;
