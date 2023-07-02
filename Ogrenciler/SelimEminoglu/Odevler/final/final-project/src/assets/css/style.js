import styled, { css } from "styled-components";

const customMediaQuery = (size, styles) => {
  return css`
    @media (max-width: ${size}px) {
      ${styles}
    }
  `;
};

export const Container = styled.div`
  margin: 0 auto;
  width: 1180px;
  /* ${customMediaQuery(1180, `width:100%;`)} */
`;
