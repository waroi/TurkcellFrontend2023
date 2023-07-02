import React from 'react';
import { Link } from 'react-router-dom';
import {Button, NavButtons} from './styled';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/logo.png";
import { FaShoppingCart } from 'react-icons/fa';

function NavbarComponent({ loggedInUsername, showCartIcon, handleLogout }) {
  return (
    <>
      <Navbar expand="lg" className="container-lg">
        <Container fluid>
          <Navbar.Brand href="/"> 
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#category">Category</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search something here!"
                className=""
                aria-label="Search"
              />
            </Form>
            {loggedInUsername ? (
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                  {loggedInUsername}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Çıkış Yap</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <NavButtons>
                <Link to="/singup">
                  <Button>Sign Up</Button>
                </Link>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to='/cart'>
                  <Button>
                    <FaShoppingCart />
                  </Button>
                </Link>
              </NavButtons>
            )}
            {showCartIcon && <Button href="/cart">
            <FaShoppingCart />
              </Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

