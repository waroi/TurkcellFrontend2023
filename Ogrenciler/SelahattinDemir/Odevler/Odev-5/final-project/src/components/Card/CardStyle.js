import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 8px 8px 0px 8px;
  margin-bottom: 14px;
  background: #fdfdfd;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
`;

export const CardImage = styled.div`
  width: 264px;
  height: 264px;
  text-align: center;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
  color: #00171f;
`;

export const Description = styled(Title)`
  font-size: 12px;
  line-height: 18px;
  color: #667479;
`;

export const ProductInfo = styled(Title)`
  font-size: 14px;
  line-height: 20px;
`;
