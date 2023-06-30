import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterTop,
  FooterH4,
  FooterInputArea,
  FooterInput,
  FooterButton,
  FooterMiddle,
  FooterMiddleItem,
  FooterMiddleIcon,
  FooterBottom,
  FooterBottomItem,
} from "../styles/FooterStyle";
import { HeaderLogo } from "../styles/HeaderStyle";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Footer = () => {
  const currentUser = useSelector((state) => state.login.login);
  function warningToast() {
    toast.warning("Log in required", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goToProducts = () => {
    if (currentUser != "") {
      navigate("/Products");
    } else if (currentUser.length == 0) {
      warningToast();
    }
  };
  return (
    <FooterContainer className="mt-5">
      <FooterWrapper className="container">
        <FooterTop className="row mx-auto">
          <div className="col-lg-4">
            <FooterH4>Register Now So You Don't Miss Our Programs</FooterH4>
          </div>
          <div className="col-lg-8">
            <FooterInputArea>
              <FooterInput placeholder="Enter your Email" />

              <FooterButton>Subscribe Now</FooterButton>
            </FooterInputArea>
          </div>
        </FooterTop>
        <FooterMiddle className="row justify-content-between align-items-center text-center pb-5">
          <div className="col-lg-4">
            <div className="row flex-row justify-content-between">
              <div className="col-3">
                <FooterMiddleItem onClick={() => goToHome()}>
                  Home
                </FooterMiddleItem>
              </div>
              <div className="col-3">
                <FooterMiddleItem onClick={() => goToProducts()}>
                  Category
                </FooterMiddleItem>
              </div>
              <div className="col-3">
                <FooterMiddleItem>About</FooterMiddleItem>
              </div>
              <div className="col-3">
                <FooterMiddleItem>Contact</FooterMiddleItem>
              </div>
            </div>
          </div>
          <div className="col-lg-3 float-end ">
            <div className="row justify-content-center">
              <div className="col-2">
                <FooterMiddleIcon className="fa-brands fa-facebook"></FooterMiddleIcon>
              </div>
              <div className="col-2">
                <FooterMiddleIcon className="fa-brands fa-twitter"></FooterMiddleIcon>
              </div>
              <div className="col-2">
                <FooterMiddleIcon className="fa-brands fa-instagram"></FooterMiddleIcon>
              </div>
              <div className="col-2">
                <FooterMiddleIcon className="fa-brands fa-youtube"></FooterMiddleIcon>
              </div>
            </div>
          </div>
        </FooterMiddle>
        <FooterBottom className="row align-items-center mt-3 pb-5 ">
          <FooterBottomItem className="col-lg-4">
            2022 Monito, All rights reserved
          </FooterBottomItem>
          <FooterBottomItem onClick={() => goToHome()} className="col-lg-4">
            <HeaderLogo
              src="../../public/Frame.png"
              onClick={goToHome}
            ></HeaderLogo>
          </FooterBottomItem>
          <FooterBottomItem className="col-lg-4">
            <span className="mx-3">Terms of Service</span>
            <span className="mx-3">Privacy Policy</span>
          </FooterBottomItem>
        </FooterBottom>
      </FooterWrapper>
      <ToastContainer />
    </FooterContainer>
  );
};

export default Footer;
