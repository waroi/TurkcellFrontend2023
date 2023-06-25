import styled from "styled-components";

export const BasicTitleH4 = styled.h4`
  color: #000;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 24px;
`;

export const BasicTitleH2 = styled.h2`
  color: #003459;
  font-size: 24px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 36px;
  text-transform: capitalize;
`;

export const BasicTitleButton = styled.button`
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
  float: right;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const BasicTitleI = styled.i`
  width: 20px;
  height: 20px;
  padding: 4px 0px 0px 0px;
`;
