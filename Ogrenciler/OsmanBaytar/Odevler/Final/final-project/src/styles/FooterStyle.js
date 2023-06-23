import styled from "styled-components";

export const FooterContainer = styled.div`
  border-radius: 40px 40px 0px 0px;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
`;

export const FooterWrapper = styled.div`
  padding-top: 72px;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  align-items: flex-start;
  border-radius: 16px;
  background: #003459;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const FooterH4 = styled.h4`
  color: #fdfdfd;
  font-wieght: 700;
  line-height: 36px;
`;

export const FooterInputArea = styled.div`
  display: flex;
  border-radius: 14px;
  background: #fff;
  padding: 12px;
  align-items: center;
  gap: 12px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const FooterInput = styled.input`
  padding: 14px 28px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #99a2a5;
  background: #fff;
  width: 100%;
  font-family: SVN-Gilroy;
  &placeholder {
    font-size: 14px;
  }
`;

export const FooterButton = styled.button`
  color: #fdfdfd;
  min-width: 170px;
  padding: 14px;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 24px;
  border-radius: 8px;
  background: #003459;
  width: 100%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const FooterMiddle = styled.div`
  margin-top: 32px;
  border-bottom: 1px solid #ccd1d2;
  @media (max-width: 992px) {
    gap: 32px;
  }
`;

export const FooterMiddleItem = styled.div`
  color: #00171f;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`;

export const FooterMiddleIcon = styled.i`
  width: 24px;
  height: 24px;
  font-size: 24px;
  cursor: pointer;
`;

export const FooterBottom = styled.div`
  :nth-child(1) {
    text-align: left;
  }
  :nth-child(2) {
    text-align: center;
  }
  :nth-child(3) {
    text-align: right;
  }
  @media (max-width: 992px) {
    :nth-child(1) {
      order: 3;
      text-align: center;
      padding-top: 16px;
    }
    :nth-child(2) {
      order: 1;
      text-align: center;
    }
    :nth-child(3) {
      order: 2;
      text-align: center;
      padding-top: 16px;
    }
  }
`;

export const FooterBottomItem = styled.div`
  color: #667479;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
`;
