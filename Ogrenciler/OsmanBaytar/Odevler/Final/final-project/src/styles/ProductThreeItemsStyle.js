import styled from "styled-components";

export const ProductThreeItemsH2 = styled.h2`
  color: #003459;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 36px;
  display: inline-block;
  @media screen and (min-width: 993px) {
    display: none;
  }
`;

export const ProductThreeItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductThreeItemsHeaderFilter = styled.div`
  @media screen and (max-width: 992px) {
    cursor: pointer;
    order: 2;
  }
`;

export const ProductThreeItemsH3 = styled.h3`
  color: #003459;
  font-size: 24px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 36px;
  display: inline-block;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ProductThreeItemsMobileH3 = styled.h3`
  color: #003459;
  font-size: 24px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 36px;
  display: inline-block;
  @media screen and (min-width: 993px) {
    display: none;
  }
`;

export const ProductThreeItemsSpan = styled.span`
  color: #667479;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
  margin-left: 10px;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ProductThreeItemsMobileSpan = styled.span`
  color: #667479;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
  margin-left: 10px;
  @media screen and (min-width: 993px) {
    display: none;
  }
`;

export const ProductThreeItemsSort = styled.select`
  display: inline-flex;
  padding: 6px 10px 4px 20px;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  border: 1px solid #ccd1d2;
  flaot: right;
  color: #667479;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
  @media screen and (max-width: 992px) {
    order: 1;
  }
`;
