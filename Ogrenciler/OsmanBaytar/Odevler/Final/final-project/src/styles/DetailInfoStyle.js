import styled from "styled-components";

export const DetailInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`;

export const DetailInfoTitle = styled.h3`
  color: #00171f;
  font-size: 24px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 36px;
`;

export const DetailInfoPrice = styled.h4`
  color: #002a48;
  font-size: 20px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 32px;
`;

export const DetailInfoSubBox = styled.div`
  border-bottom: 1px solid #ebeeef;
  display: flex;
  padding: 8px 0px;
  align-items: flex-start;
  width: 100%;
`;

export const DetailInfoSubDiv = styled.div`
  display: flex;
  padding: 4px 11px 2px 11px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const DetailInfoSubTitle = styled.h5`
  color: #667479;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
`;
