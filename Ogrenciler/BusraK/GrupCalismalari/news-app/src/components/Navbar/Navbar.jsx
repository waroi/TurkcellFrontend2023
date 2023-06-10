import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLink,
  Input,
  Image,
} from "./NavbarStyled";
import image from "../../assets/logo.png";
const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <Image src={image} border="0" />
      </Link>
      <Input type="text" placeholder="Search.." />
      <NavMenu>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/news">News</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/iletisim">Contact</NavLink>
        </NavItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
