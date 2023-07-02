import Icon from "../../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import {
  NavbarDiv,
  NavList,
  NavbarA,
  BasketDiv,
  CountDiv,
  DropDownDiv,
  DropDownDivOption,
  DropDownİmg,
  DropDownText,
  DropDownButton,
  DropDownUl,
  DropDownLi,
  İconİmg,
  HamburgerButton,
  HamburgerIcon,
  HamburgerMenu,
  HamburgerMenuItem,
} from "./styleNavbar";
import { Container } from "../../assets/css/style";
import NavbarSearch from "./NavbarSearch";
import Button from "../Button/Button";
import Register from "../Register/Register";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";
import { activeUserExit, setActiveUser } from "../../redux/slices/userList";

function Navbar() {
  const dispacth = useDispatch();
  const activeUser = useSelector((state) => state.user.activeUser);
  const isActiveUser = useSelector((state) => state.user.isActiveUser);

  const [background, setBackground] = useState("transparent");
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  const userExit = () => {
    dispacth(activeUserExit());
    dispacth(setActiveUser({}));
  };

  return (
    <NavbarDiv background={background}>
      <Container>
        <NavList>
          <HamburgerButton onClick={handleMenuToggle}>
            <HamburgerIcon src={Icon.HamburgerIcon} alt="hamburger" />
          </HamburgerButton>

          <img src={Icon.Main} alt="logo" />
          <Link className="navbarA" to={"/"}>
            Home
          </Link>
          <Link className="navbarA" to={isActiveUser ? "/products" : "/login"}>
            Category
          </Link>
          <NavbarA href="#">About</NavbarA>
          <NavbarA href="#">Contact</NavbarA>
          <NavbarSearch />
          {isActiveUser && (
            <BasketDiv>
              <Link to={"/carts"}>
                <CountDiv>0</CountDiv>
                <img src={Icon.Cart} alt="logo" />
              </Link>
            </BasketDiv>
          )}
          {!isActiveUser && <Button title="Giriş Yap" path={"/login"} />}
          {isActiveUser && (
            <DropDownDiv>
              <DropDownİmg
                src={
                  activeUser.image == ""
                    ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    : activeUser.image
                }
                alt="images"
              />
              <DropDownText>{activeUser.username}</DropDownText>
              <DropDownButton onClick={toogleMenu}>
                <İconİmg src={Icon.Drop} alt="icon" />
              </DropDownButton>
              {isOpen && (
                <DropDownDivOption>
                  <DropDownUl>
                    <DropDownLi onClick={userExit}>
                      <Link to={"/"}>Çıkış</Link>
                    </DropDownLi>
                  </DropDownUl>
                </DropDownDivOption>
              )}
            </DropDownDiv>
          )}
          {!isActiveUser && <Register />}

          {isMenuOpen && (
            <HamburgerMenu>
              <HamburgerMenuItem>
                <Link className="navbarA" to={"/"}>
                  Home
                </Link>
              </HamburgerMenuItem>
              <HamburgerMenuItem>
                <Link
                  className="navbarA"
                  to={isActiveUser ? "/products" : "/login"}
                >
                  Category
                </Link>
              </HamburgerMenuItem>
              <HamburgerMenuItem>
                <NavbarA href="#">About</NavbarA>
              </HamburgerMenuItem>
              <HamburgerMenuItem>
                <NavbarA href="#">Contact</NavbarA>
              </HamburgerMenuItem>
              <HamburgerMenuItem>
                {isActiveUser && (
                  <BasketDiv>
                    <Link to={"/carts"}>
                      <CountDiv>0</CountDiv>
                      <img src={Icon.Cart} alt="logo" />
                    </Link>
                  </BasketDiv>
                )}
                {!isActiveUser && <Button title="Giriş Yap" path={"/login"} />}
              </HamburgerMenuItem>
              <HamburgerMenuItem>
                {isActiveUser && (
                  <DropDownDiv>
                    <DropDownİmg
                      src={
                        activeUser.image == ""
                          ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          : activeUser.image
                      }
                      alt="images"
                    />
                    <DropDownText>{activeUser.username}</DropDownText>
                    <DropDownButton onClick={toogleMenu}>
                      <İconİmg src={Icon.Drop} alt="icon" />
                    </DropDownButton>
                    {isOpen && (
                      <DropDownDivOption>
                        <DropDownUl>
                          <DropDownLi onClick={userExit}>Çıkış</DropDownLi>
                        </DropDownUl>
                      </DropDownDivOption>
                    )}
                  </DropDownDiv>
                )}
              </HamburgerMenuItem>
              <HamburgerMenuItem>
                {!isActiveUser && <Register />}
              </HamburgerMenuItem>
            </HamburgerMenu>
          )}
        </NavList>
      </Container>
    </NavbarDiv>
  );
}

export default Navbar;
