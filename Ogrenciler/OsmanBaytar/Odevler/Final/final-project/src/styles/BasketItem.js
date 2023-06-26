import styled from "styled-components";

export const BasketItemContainer = styled.div`
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const BasketItemImage = styled.img`
  max-width: 180px;
  width: 100%;
  height: auto;
  margin-left: 25%;
  padding: 20px 0;
  @media (max-width: 400px) {
    margin-left: 0;
  }
`;

export const BasketItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const BasketItemP = styled.p`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const BasketItemButtonRemove = styled.button`
  display: block;
  width: 150px;
  padding: 10px 0;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff6f61;
  color: #fff;
`;

export const BasketItemButtonComplete = styled.button`
  display: block;
  width: 150px;
  padding: 10px 0;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #003459;
`;

export const BasketItemInput = styled.input`
  display: inline-block;
  width: 120px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

export const BasketItemSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;
