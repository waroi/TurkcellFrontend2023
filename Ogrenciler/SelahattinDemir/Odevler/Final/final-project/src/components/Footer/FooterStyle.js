import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 80px 130px 40px 130px;
  border-radius: 40px 40px 0px 0px;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );

  @media screen and (max-width: 768px) {
    padding: 0px;
    padding-top: 10px;
    margin-top: 20px;
  }
`;

export const FooterLink = styled(Link)`
  color: #00171f;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover {
    color: #003459;
  }
`;

export const SubscribeContainer = styled.div`
  padding: 32px;
  border-radius: 16px;
  background: #003459;

  @media screen and (max-width: 768px) {
    padding: 16px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export const SubscribeDescription = styled.p`
  max-width: 389px;
  color: #fdfdfd;
  font-size: 24px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  text-transform: capitalize;
`;

export const SubscribeArea = styled.div`
  border-radius: 14px;
  background: #fff;
  padding: 12px;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SubscribeInput = styled.input`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  padding: 14px 28px;
  border-radius: 8px;
  border: 1px solid #99a2a5;
  background: #fff;
  &::placeholder {
    color: #99a2a5;
    font-size: 14px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

export const SubscribeButton = styled.button`
  display: flex;
  padding: 14px 28px 10px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #003459;
  color: #fdfdfd;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  &:hover {
    background-color: #03131e;
  }

  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

export const FooterLinkContainer = styled.div`
  border-bottom: 1px solid #ccd1d2;
  padding-bottom: 20px;
`;

export const FooterInfoContainer = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLogo = styled.img`
  width: 115px;
  height: 40px;

  @media screen and (max-width: 768px) {
    order: 0;
    margin-bottom: 20px;
  }
`;

export const FooterText = styled(FooterLink)`
  font-size: 14px;
  line-height: 20px;
  color: #667479;

  @media screen and (max-width: 768px) {
    padding: 10px 0px;
    order: 1;
  }
`;
