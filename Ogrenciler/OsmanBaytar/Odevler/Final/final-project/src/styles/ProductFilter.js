import styled from "styled-components";

export const ProductFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ProductFilterBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebeeef;
`;

export const ProductFilterTitle = styled.div`
  color: #00171f;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
`;

export const ProductFilterCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #ccd1d2;
  background: #fff;
`;

export const ProductFilterLabel = styled.label`
  color: #00171f;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
`;

export const ProductFilterNumber = styled.div`
  display: inline-block;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ProductFilterInput = styled.input`
  display: inline-block;
  width: 115px;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-bottom: 1px solid #ccd1d2;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #242b33;
    font-size: 14px;
    font-family: SVN-Gilroy;
    font-weight: 500;
    line-height: 20px;
  }
`;
