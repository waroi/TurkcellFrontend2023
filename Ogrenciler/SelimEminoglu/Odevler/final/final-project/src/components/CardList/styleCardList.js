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
  width: 230px;
  height: 264px;
  flex-shrink: 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

export const CardTextDiv = styled.div`
  display: flex;
  padding: 8px 0px 20px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const CardTitle = styled.div`
  height: 95px;
  width: 230px;
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

export const CardButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  padding-left: 2.2rem;
`;

export const CardGiftDiv = styled.div`
  display: flex;
  padding: 6px 10px 4px 10px;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  border-radius: 8px;
  background: #fceed5;
`;

export const CardPointDiv = styled.div`
  display: flex;
  padding: 10px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CardPoint = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 10px;
  background: #003459;
`;

export const CardGiftText = styled.div`
  color: #002a48;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;
