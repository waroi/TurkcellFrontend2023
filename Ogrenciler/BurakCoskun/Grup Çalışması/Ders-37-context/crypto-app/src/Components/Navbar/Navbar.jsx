import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useCustomContext } from "../../context/Context";

const NavbarComponent = () => {
  const { theme, setTheme } = useCustomContext();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={`${theme === "dark" ? "dark" : "light"}`}
      variant={`${theme === "dark" ? "dark" : "light"}`}
    >
      <Container>
        <Navbar.Brand href="/">Coin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/list">List of Coins</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <button className="border-0 bg-transparent">
              {theme === "dark" ? (
                <i
                  className="fa-solid fa-moon"
                  style={{ color: "white" }}
                  onClick={() => setTheme("light")}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-sun"
                  onClick={() => setTheme("dark")}
                ></i>
              )}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
