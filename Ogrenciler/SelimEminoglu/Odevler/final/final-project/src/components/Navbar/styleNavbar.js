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

export const DropDownDiv = styled.div`
  position: relative;
  display: flex;
  width: 200px;
  padding: 10px 12px 8px 20px;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  border: 1px solid #ccd1d2;
`;

export const DropDownDivOption = styled.div`
  position: absolute;
  top: 35px;
  left: 116px;
  display: flex;
  width: 84px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const DropDownİmg = styled.img`
  width: 2rem;
  height: 2rem;
  border: 1px solid #ccd1d2;
  border-radius: 50%;
`;

export const DropDownText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 0 0;
  color: #667479;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const DropDownButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  width: 2rem;
`;

export const DropDownUl = styled.ul`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid #ccd1d2;
  background: #fff;
  box-shadow: 0px 4px 24px -2px rgba(0, 0, 0, 0.1);
`;

export const DropDownLi = styled.li`
  display: flex;
  padding: 10px 12px 8px 20px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 20px;
`;

export const İconİmg = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;
