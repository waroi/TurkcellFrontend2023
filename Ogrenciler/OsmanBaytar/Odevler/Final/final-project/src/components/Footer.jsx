import React from "react";
import {
  FooterContainer,
  FooterTop,
  FooterH4,
  FooterInputArea,
  FooterInput,
  FooterButton,
  FooterMiddle,
  FooterMiddleItem,
  FooterMiddleIcon,
} from "../styles/FooterStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          <FooterTop>
            <div className="col-lg-4">
              <FooterH4>Register Now So You Don't Miss Our Programs</FooterH4>
            </div>
            <div className="col-lg-8">
              <FooterInputArea>
                <div className="col-lg-8">
                  <FooterInput placeholder="Enter your Email" />
                </div>
                <div className="col-lg-4">
                  <FooterButton>Subscribe Now</FooterButton>
                </div>
              </FooterInputArea>
            </div>
          </FooterTop>
          <FooterMiddle className="row justify-content-between align-items-center text-center">
            <div className="col-lg-4">
              <div className="row flex-row">
                <div className="col-3">
                  <FooterMiddleItem>Home</FooterMiddleItem>
                </div>
                <div className="col-3">
                  <FooterMiddleItem>Category</FooterMiddleItem>
                </div>
                <div className="col-3">
                  <FooterMiddleItem>About</FooterMiddleItem>
                </div>
                <div className="col-3">
                  <FooterMiddleItem>Contact</FooterMiddleItem>
                </div>
              </div>
            </div>
            <div className="col-lg-4 float-end">
              <div className="row">
                <div className="col-3">
                  <FooterMiddleIcon className="fa-brands fa-facebook"></FooterMiddleIcon>
                </div>
                <div className="col-3">
                  <FooterMiddleIcon className="fa-brands fa-twitter"></FooterMiddleIcon>
                </div>
                <div className="col-3">
                  <FooterMiddleIcon className="fa-brands fa-instagram"></FooterMiddleIcon>
                </div>
                <div className="col-3">
                  <FooterMiddleIcon className="fa-brands fa-youtube"></FooterMiddleIcon>
                </div>
              </div>
            </div>
          </FooterMiddle>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
