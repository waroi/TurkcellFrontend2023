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
          <NavbarA href="#">Anasayfa</NavbarA>
          <NavbarA href="#">Kategoriler</NavbarA>
          <NavbarA href="#">Hakkında</NavbarA>
          <NavbarA href="#">Kişiler</NavbarA>
          <NavbarSearch />
          <Button title="Giriş Yap" />
          <Register />
        </NavList>
      </Container>
    </NavbarDiv>
  );
}

export default Navbar;
