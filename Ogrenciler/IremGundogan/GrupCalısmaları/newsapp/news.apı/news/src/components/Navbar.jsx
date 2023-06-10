//Navbar.jsx

import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Logo = styled.img`
  width: 70px;
  margin-left: 20px;
  border-radius: 50%;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: white;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: #ddd;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`;

function Navbar() {
  return (
    <Navigation>
      <Logo src={logo}></Logo>
      <NavItem>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">World</NavLink>
        <NavLink to="/">Politics</NavLink>
        <NavLink to="/">Bussiness</NavLink>
        <NavLink to="/">Opinion</NavLink>
        <NavLink to="/">Economy</NavLink>
        <NavLink to="/">Tech</NavLink>
        <NavLink to="/">Science</NavLink>
        <NavLink to="/">Health</NavLink>
        <NavLink to="/">Sports</NavLink>
      </NavItem>
    </Navigation>
  );
}

export default Navbar;
