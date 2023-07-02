import styled from "styled-components";

export const LogosContainer = styled.div`
  @media (max-width: 993px) {
    display: none;
  }
`;

export const LogosUpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const LogosUpperLeft = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const LogosText = styled.h4`
  color: #000;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 31px;
`;

export const LogosTitle = styled.h2`
  color: #003459;
  font-size: 24px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  text-transform: capitalize;
`;

export const LogosBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-top: 40px;
`;
