import styled from "styled-components";

export const CartDiv = styled.div`
  padding-top: 8rem;
  width: 100%;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CartHeadline = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  color: #00171f;
  font-size: 24px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;

export const CartListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #003459;
  min-height: 400px;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const CartBuyButton = styled.button`
  display: flex;
  height: 35px;
  width: 118px;
  padding: 14px 14px 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 57px;
  background: #003459;
  color: white;
  border: 1px solid transparent;
`;
