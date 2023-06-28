import styled from "styled-components";

export const FlexCardDiv = styled.div`
  padding: 2rem 0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const CardDiv = styled.div`
  width: 248px;
  display: inline-flex;
  padding: 8px 8px 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  background: #fdfdfd;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
`;

export const CardİmgDiv = styled.div`
  width: 264px;
  height: 264px;
  flex-shrink: 0;
  background: url(${(props) => props.image}), lightgray 50% / contain no-repeat;
`;

export const CardTextDiv = styled.div`
  display: flex;
  padding: 8px 8px 20px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  color: #00171f;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
`;

export const CardCategory = styled.div`
  height: 48px;
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const CardPrice = styled.div`
  display: flex;
  width: 248px;
  flex-direction: column;
  justify-content: flex-end;
  color: #00171f;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 20px;
`;
