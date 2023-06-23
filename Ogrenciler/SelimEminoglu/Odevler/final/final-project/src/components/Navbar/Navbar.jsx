import { NavbarDiv, NavList, NavbarA } from "./styleNavbar";
import NavbarSearch from "./NavbarSearch";
import Button from "../Button/Button";

function Navbar() {
  return (
    <NavbarDiv>
      <NavList>
        <img src=".\src\assets\icons\navbar_icon.svg" alt="logo" />
        <NavbarA href="#">Anasayfa</NavbarA>
        <NavbarA href="#">Kategoriler</NavbarA>
        <NavbarA href="#">Hakkında</NavbarA>
        <NavbarA href="#">Kişiler</NavbarA>
        <NavbarSearch />
        <Button title="Giriş Yap" />
      </NavList>
    </NavbarDiv>
  );
}

export default Navbar;
