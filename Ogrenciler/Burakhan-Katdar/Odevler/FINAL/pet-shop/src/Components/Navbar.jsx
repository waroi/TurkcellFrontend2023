import { Routes, Route, Link, NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import "../Scss/main.scss";

import Logo from "../img/logo.png";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="navigation">
        <Container>
          <Navbar.Brand>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="navigationItems me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <NavLink className="navItem" to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#action2">
                <NavLink className="navItem" to="/product">
                  Category
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#action2">
                <NavLink className="navItem" to="/about">
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#action2">
                <NavLink className="navItem" to="/contact">
                  Contact
                </NavLink>
              </Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search something else"
                className="me-2 search-input"
                aria-label="Search"
              />
            </Form>
            <NavLink className="signin" to="/signin">
              Join the community
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
