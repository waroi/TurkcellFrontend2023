import {
  NavbarDiv,
  NavList,
  NavbarA,
  BasketDiv,
  CountDiv,
} from "./styleNavbar";
import { Container } from "../../assets/css/style";
import NavbarSearch from "./NavbarSearch";
import Button from "../Button/Button";
import Register from "../Register/Register";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [background, setBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBackground("white");
      } else {
        setBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [background]);

  return (
    <NavbarDiv background={background}>
      <Container>
        <NavList>
          <img src=".\src\assets\icons\navbar_icon.svg" alt="logo" />
          <NavbarA href="#">Home</NavbarA>
          <NavbarA href="#">Category</NavbarA>
          <NavbarA href="#">About</NavbarA>
          <NavbarA href="#">Contact</NavbarA>
          <NavbarSearch />
          <Button title="Giriş Yap" path={"/login"} />
          <Register />
          {/* <BasketDiv>
            <Link to={"/carts"}>
              <CountDiv>0</CountDiv>
              <img src="./src/assets/icons/shopping-cart.png" alt="logo" />
            </Link>
          </BasketDiv> */}
        </NavList>
      </Container>
    </NavbarDiv>
  );
}

export default Navbar;
