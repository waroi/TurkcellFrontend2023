import styled from "styled-components";
import { Link } from "react-router-dom";

export const TrendCoins = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const TrendCoinImage = styled.img`
  width: 40px;
  border-radius: 50%;
`;

export const TrendCoinsItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  font-size: 18px;
`;
