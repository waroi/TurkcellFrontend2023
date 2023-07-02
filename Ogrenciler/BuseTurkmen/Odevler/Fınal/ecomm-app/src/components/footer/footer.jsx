import React from 'react';
import { Container, Col,   Form } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FooterNav, Col1, Col2, SocialIcon, Context, Col3, LinkList, Section1, P1, ListFooter, FormInput, FormControl, ButtonForm } from "./footerstyled";
import logo from "../../assets/logo.png";


const Footer = () => {
  return (
    <FooterNav className="d-flex flex-column" >
      <Container>
        <Col>
        <Section1>
          <Col1 className='d-flex'>
            <P1>Register Now So You Don't Miss Our Programs</P1>
            <FormInput className='d-flex'>
              <Form.Group className='input'>
                <FormControl type="text" placeholder="Email" />
              </Form.Group>
              <ButtonForm variant="primary">Abone Ol</ButtonForm>
            </FormInput>
          </Col1>
          <Col2 className='d-flex col-lg-4'>
            <ListFooter className="list-unstyled d-flex col-sm-1">
              <li>
                <LinkList href="#link1">Home</LinkList>
              </li>
              <li>
                <LinkList href="#link2">Category</LinkList>
              </li>
              <li>
                <LinkList href="#link3">About</LinkList>
              </li>
              <li>
                <LinkList href="#link4">Contact</LinkList>
              </li>
            </ListFooter>
            <SocialIcon className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </SocialIcon>
          </Col2>
        </Section1>
            <Col3 className="text-center d-flex space-between">
              <Context>© 2022 Monito. All rights reserved.</Context>
              <img src={logo} alt="Logo" />
              <Context>Terms of Service   Privacy Policy</Context>
            </Col3>
        </Col>
      </Container>
    </FooterNav>
  );
};

export default Footer;
