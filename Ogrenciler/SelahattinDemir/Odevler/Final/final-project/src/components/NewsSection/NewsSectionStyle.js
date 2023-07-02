import styled from "styled-components";

export const TopTitle = styled.h5`
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 24px;
  color: #000;
`;

export const BottomTitle = styled.h2`
  color: #003459;
  font-size: 24px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 36px;
  text-transform: capitalize;
`;

export const Button = styled.button`
  display: inline-flex;
  background: #fff;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 57px;
  border: 1.5px solid #003459;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
  color: #003459;
`;

export const Span = styled(BottomTitle).attrs(() => ({
  as: "span",
}))`
  margin-left: 5px;
`;
