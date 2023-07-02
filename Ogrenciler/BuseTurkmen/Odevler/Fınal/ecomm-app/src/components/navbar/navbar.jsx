import React from 'react';
import { Link } from 'react-router-dom';
import {Button, NavButtons, Section, Content, Picture, Button1, Title1, Title2, Minip, Buttons} from './styled';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/logo.png";
import { FaShoppingCart } from 'react-icons/fa';

function NavbarComponent() {
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
              <Nav.Link className='header' href="/">Home</Nav.Link>
              <Nav.Link className='header' href="#category">Category</Nav.Link>
              <Nav.Link className='header' href="#about">About</Nav.Link>
              <Nav.Link className='header' href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search something here!"
                className=""
                aria-label="Search"
              />
            </Form>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Section className='container-lg d-flex'>
        <Content>
          <Title1>One More Friends</Title1>
          <Title2>Thousand More Fun! </Title2>
          <Minip>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eaque dolorum?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eaque dolorum
          </Minip>
          <Buttons>
            <Button1>View Intro</Button1>
            <Button>Explore Now</Button>
          </Buttons>
        </Content>
        <Picture>
          <img src="https://s3-alpha-sig.figma.com/img/035a/16de/8e1aa9a0522d0cebb4144a5ceda0344a?Expires=1688342400&Signature=HBq7jbSdSIGEoyUQB3BU9fPynx9il4ixxdC0wmLV~nE509o0Tpew54Q0wP69DlgEMK9~vvWHhJpGmqe1dR2zS0iJJo2SYJD2B0ccLAtCnut1Rr2oWs6ypQr0ZjG9rRvHd1Ujfu6BsA1soVd6Xjzl8eU9SNMZKct9sO4dQRU71-FN4nW4aejOgIEhEydVhYUfeQRRUn6CQZhgK41vAKHg81W5ctxgKJx-73WtzxaktwO~TyDlkqUDf4R6BaSbioQDHv2mKld2x81lohkHd58vnVXr0ztWqaf7qCJBY~Nmb5baM-7cqeEieh8Ye8AV9HuL1iyj7eer-wxqlmjiWekx2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width="700" height="450" />
        </Picture>
      </Section>
    </>
  );
}

export default NavbarComponent;
