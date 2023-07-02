import styled from "styled-components";

export const Styled = styled.div`
  margin-top: 10px;
  @media (max-width: 992px) {
    display: none;
  }
  .title {
    font-size: 14px;
    .highlight {
      font-size: 26px;
      font-weight: 600;
      color: #003459;
    }
  }
`;
