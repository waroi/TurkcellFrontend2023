import styled from "styled-components";

export const JustButtonMobileContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const JustButtonButton = styled.button`
  display: inline-flex;
  padding: 12px 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 57px;
  border: 1.5px solid #003459;
  color: #003459;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  @media (min-width: 993px) {
    display: none;
  }
`;
export const JustButtonI = styled.i`
  width: 20px;
  height: 20px;
  padding: 4px 0px 0px 0px;
`;
