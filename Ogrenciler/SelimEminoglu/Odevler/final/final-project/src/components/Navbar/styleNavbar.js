import styled from "styled-components";

export const NavbarDiv = styled.div`
  display: flex;
  width: 1440px;
  padding: 28px 130px;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const NavbarA = styled.a`
  color: #003459;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
`;

export const NavbarInput = styled.input`
  display: flex;
  width: 280px;
  padding: 12px 20px 12px 16px;
  align-items: center;
  gap: 12px;
  border-radius: 46px;
  background: #fdfdfd;
  border-color: transparent;
  &::placeholder {
    padding-left: 1rem;
  }
`;

export const SearchDiv = styled.div`
  position: relative;
`;

export const SearchLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
