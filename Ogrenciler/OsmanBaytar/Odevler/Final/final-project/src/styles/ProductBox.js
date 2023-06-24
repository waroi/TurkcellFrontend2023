import styled from "styled-components";

export const ProductMainBox = styled.div`
  max-width: 280px;
  display: inline-flex;
  padding: 8px 8px 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 12px;
  background: #fdfdfd;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
  margin: 10px 20px;
`;

export const ProductImage = styled.img`
  width: 264px;
  height: 264px;
  flex-shrink: 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  padding: 8px 8px 20px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const ProductTitle = styled.div`
  color: #00171f;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
`;

export const ProductCategory = styled.div`
  color: #667479;
  font-size: 12px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 18px;
`;

export const ProductPrice = styled.div`
  color: #00171f;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 20px;
`;

export const ProductCount = styled.div`
  display: inline-block;
  color: #667479;
  font-size: 12px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 18px;
`;

export const ProductRate = styled.div`
  display: inline-block;
  float: right;
`;
