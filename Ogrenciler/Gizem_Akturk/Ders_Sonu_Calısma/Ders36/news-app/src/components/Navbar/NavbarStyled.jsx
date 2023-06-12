import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #f1f1f1;
  padding: 10px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  width: 300px;
  font-size: 16px;
  background-color: #f1f1f1;
  color: #333;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;
export const NavMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-right: 10px;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: #333;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;

 
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
