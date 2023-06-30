import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const FilterHeadline = styled.div`
  color: #003459;
  font-size: 24px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;

export const FilterValueDiv = styled.div`
  display: flex;
  width: 280px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-bottom: 1px solid #ebeeef;
`;

export const FilterHeadlineValue = styled.div`
  color: #00171f;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const FilterValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #ccd1d2;
  background: #fff;
`;

export const LabelText = styled.label`
  color: #00171f;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  justify-content: center;
`;

export const SortDiv = styled.div`
  display: inline-flex;
  padding: 6px 10px 4px 20px;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  border: 1px solid #ccd1d2;
`;

export const ListSortDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
