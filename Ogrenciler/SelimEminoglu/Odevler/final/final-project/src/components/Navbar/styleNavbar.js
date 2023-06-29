import styled from "styled-components";

export const NavbarDiv = styled.div`
  display: flex;
  padding: 28px 130px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 4;
  background: ${(props) => props.background};
  transition: all 1.5s;
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
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
  width: 265px;
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

export const BasketDiv = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
`;

export const CountDiv = styled.div`
  position: absolute;
  border: 1px solid red;
  border-radius: 50%;
  background-color: red;
  color: #fdfdfd;
  width: 13px;
  height: 24px;
  top: -10px;
  right: 0;
`;
