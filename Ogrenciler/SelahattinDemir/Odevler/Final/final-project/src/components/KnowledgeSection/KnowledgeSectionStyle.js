import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 8px 8px 0px 8px;
  margin-bottom: 14px;
  background: #fdfdfd;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  display: inline-flex;
  gap: 8px;
`;

export const CardImageContainer = styled.div`
  border-radius: 10px;
  background: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  flex-shrink: 0;
`;

export const CardButton = styled.button`
  padding: 2px 10px;
  border-radius: 28px;
  background: #00a7e7;
  color: #fdfdfd;
  font-size: 10px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 16px;
`;

export const Title = styled.h4`
  margin-top: 8px;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
  color: #00171f;
`;

export const Description = styled.p`
  overflow: hidden;
  color: #242b33;
  font-size: 14px;
  font-family: SVN-Gilroy;
  line-height: 20px;
`;
