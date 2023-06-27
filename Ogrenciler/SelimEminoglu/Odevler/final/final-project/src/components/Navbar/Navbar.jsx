import { NavbarDiv, NavList, NavbarA } from "./styleNavbar";
import { Container } from "../../assets/css/style";
import NavbarSearch from "./NavbarSearch";
import Button from "../Button/Button";
import Register from "../Register/Register";

function Navbar() {
  return (
    <NavbarDiv>
      <Container>
        <NavList>
          <img src=".\src\assets\icons\navbar_icon.svg" alt="logo" />
          <NavbarA href="#">Home</NavbarA>
          <NavbarA href="#">Category</NavbarA>
          <NavbarA href="#">About</NavbarA>
          <NavbarA href="#">Contact</NavbarA>
          <NavbarSearch />
          <Button title="Giriş Yap" />
          <Register />
        </NavList>
      </Container>
    </NavbarDiv>
  );
}

export default Navbar;
