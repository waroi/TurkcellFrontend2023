import styled from "styled-components";

export const NewsListDiv = styled.div`
  padding: 2rem 0;
  display: flex;
`;

export const NewsCardDiv = styled.div`
  display: inline-flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
`;

export const NewsİmgDiv = styled.div`
  width: 364px;
  height: 240px;
  flex-shrink: 0;
  background: url("./src/assets/images/image 3.png"),
    lightgray 50% / cover no-repeat;
`;

export const NewsİmgDivSecond = styled(NewsİmgDiv)`
  background: url("./src/assets/images/news_second.png"),
    lightgray 50% / cover no-repeat;
`;

export const NewsİmgDivThird = styled(NewsİmgDiv)`
  background: url("./src/assets/images/news_third.png"),
    lightgray 50% / cover no-repeat;
`;

export const NewsTextDiv = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const NewsTagDiv = styled.div`
  display: flex;
  padding: 2px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 28px;
  background: #00a7e7;
`;

export const NewsH3 = styled.h3`
  color: #fdfdfd;
  font-size: 10px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 16px;
`;

export const NewsHeadline = styled.div`
  display: flex;
  width: 348px;
  flex-direction: column;
  color: #00171f;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
`;

export const NewsBody = styled.div`
  display: flex;
  width: 348px;
  height: 60px;
  flex-direction: column;
  overflow: hidden;
  color: #242b33;
  text-overflow: ellipsis;
  white-space: inherit;
  font-size: 14px;
  font-family: SVN-Gilroy;
  line-height: 20px;
`;

export const NewsBodySecond = styled.div`
  display: flex;
  width: 348px;
  flex-direction: column;
  flex: 1 0 0;
  overflow: hidden;
  color: #242b33;
  text-overflow: ellipsis;
  white-space: inherit;
  font-size: 14px;
  font-family: SVN-Gilroy;
  line-height: 20px;
`;
