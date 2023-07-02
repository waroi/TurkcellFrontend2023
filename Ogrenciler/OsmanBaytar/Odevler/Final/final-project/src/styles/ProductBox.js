import styled from "styled-components";

export const ProductMainBox = styled.div`
  max-width: 280px;
  display: inline-block;
  padding: 8px 8px 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 12px;
  background: #fdfdfd;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
  margin: 10px 20px;
  @media (max-width: 576px) {
    max-width: 160px;
    margin: 10px 15px;
    min-height: 375px;
  }
  @media (max-width: 404px) {
    margin: 10px 12px;
  }
  @media (max-width: 392px) {
    margin: 10px 10px;
  }
  @media (max-width: 383px) {
    margin: 10px 8px;
  }
  @media (max-width: 376px) {
    margin: 10px 6px;
  }
  @media (max-width: 367px) {
    max-width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 264px;
  height: 264px;
  flex-shrink: 0;
  cursor: pointer;
  @media (max-width: 576px) {
    max-width: 130px;
    max-height: 130px;
  }
  @media (max-width: 367px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  padding: 8px 8px 20px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

export const ProductTitle = styled.div`
  color: #00171f;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
  @media (max-width: 576px) {
    min-height: 72px;
  }
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
  @media (max-width: 576px) {
    float: none;
  }
`;
