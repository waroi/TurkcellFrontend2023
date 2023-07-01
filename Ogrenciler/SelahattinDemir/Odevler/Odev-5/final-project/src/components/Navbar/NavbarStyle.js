import styled from "styled-components";

export const Nav = styled.nav`
  padding: 28px 130px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const Ul = styled.ul`
  gap: 48px;
`;

export const NavInput = styled.input`
  max-width: 280px;
  padding: 12px 25px;
  border-radius: 46px;
  border: none;
  &::placeholder {
    font-size: 14px;
    font-family: SVN-Gilroy;
    font-weight: 500;
    line-height: 20px;
    color: #99a2a5;
  }
`;

export const IconWrapper = styled.div`
  margin-right: -25px;
  z-index: 1;
`;

export const NavSpan = styled.span`
  color: #003459 !important;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
`;
