import React from "react";
import {
  Container,
  //   FooterWrapper,
  FooterTop,
  Title,
  InputArea,
  Input,
  Button,
  FooterRegister,
  FooterRegisterItem,
  FooterRegisterIcon,
  FooterBottom,
  FooterBottomItem,
  Logo,
} from "../Style/styled-footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <Container className="mt-5">
      <div className="container pt-10">
        <FooterTop className="row mx-auto">
          <div className="col-lg-4">
            <Title>Register Now So You Don't Miss Our Programs</Title>
          </div>
          <div className="col-lg-8">
            <InputArea>
              <Input placeholder="Enter your Email" />

              <Button>Subscribe Now</Button>
            </InputArea>
          </div>
        </FooterTop>
        <FooterRegister className="row justify-content-between align-items-center text-center pb-5">
          <div className="col-lg-4">
            <div className="row flex-row justify-content-between">
              <div className="col-3">
                <FooterRegisterItem onClick={() => goToHome()}>
                  Home
                </FooterRegisterItem>
              </div>
              <div className="col-3">
                <FooterRegisterItem>Products</FooterRegisterItem>
              </div>
              <div className="col-3">
                <FooterRegisterItem>About</FooterRegisterItem>
              </div>
              <div className="col-3">
                <FooterRegisterItem>Contact</FooterRegisterItem>
              </div>
            </div>
          </div>
          <div className="col-lg-3 float-end ">
            <div className="row justify-content-center">
              <div className="col-2">
                <FooterRegisterIcon className="fa-brands fa-facebook"></FooterRegisterIcon>
              </div>
              <div className="col-2">
                <FooterRegisterIcon className="fa-brands fa-twitter"></FooterRegisterIcon>
              </div>
              <div className="col-2">
                <FooterRegisterIcon className="fa-brands fa-instagram"></FooterRegisterIcon>
              </div>
              <div className="col-2">
                <FooterRegisterIcon className="fa-brands fa-youtube"></FooterRegisterIcon>
              </div>
            </div>
          </div>
        </FooterRegister>
        <FooterBottom className="row align-items-center mt-3 pb-5 ">
          <FooterBottomItem className="col-lg-4">
            2022 Monito, All rights reserved
          </FooterBottomItem>
          <FooterBottomItem onClick={() => goToHome()} className="col-lg-4">
            <Logo
              className="img-fluid"
              src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_DIKEY_ERKEK_LOGO.png"
            ></Logo>
          </FooterBottomItem>
          <FooterBottomItem className="col-lg-4">
            <span className="mx-3">Terms of Service</span>
            <span className="mx-3">Privacy Policy</span>
          </FooterBottomItem>
        </FooterBottom>
      </div>
    </Container>
  );
};

export default Footer;
