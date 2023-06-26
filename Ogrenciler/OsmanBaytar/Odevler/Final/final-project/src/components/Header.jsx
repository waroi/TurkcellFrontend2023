import { useState } from "react";
import {
  HeaderItem,
  HeaderLogo,
  HeaderInput,
  HeaderButton,
  HeaderComputer,
  HeaderMobile,
} from "../styles/HeaderStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileInput, setIsMobileInput] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
    setIsMobileInput(false);
  };

  const handleMobileInput = () => {
    setIsMobileInput(!isMobileInput);
    setIsMobile(false);
  };

  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/SignUp");
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToProducts = () => {
    navigate("/Products");
  };

  const goToLogIn = () => {
    navigate("/LogIn");
  };

  return (
    <div className="container py-3">
      <HeaderComputer>
        <div className="row">
          <div className="col-lg-6">
            <div className="row justify-content-center flex-row align-items-center">
              <div className="col-lg-3">
                <HeaderItem onClick={() => goToHome()}>
                  <HeaderLogo src="https://s.tmimgcdn.com/scr/800x500/126100/e-ticaret-logo-sablonu_126133-original.png" />
                </HeaderItem>
              </div>
              <div className="col-lg-2">
                <HeaderItem onClick={() => goToHome()}>Home</HeaderItem>
              </div>
              <div className="col-lg-2">
                <HeaderItem onClick={() => goToProducts()}>Category</HeaderItem>
              </div>
              <div className="col-lg-2">
                <HeaderItem>About</HeaderItem>
              </div>
              <div className="col-lg-2">
                <HeaderItem>Contact</HeaderItem>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="row justify-content-center align-items-center flex-row"
              style={{ height: 40 }}
            >
              <div className="col-lg-6">
                <div className="d-flex flex-row">
                  <i className="fa-solid fa-magnifying-glass me-2"></i>
                  <HeaderInput
                    type="text"
                    placeholder="Search something here!"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <HeaderButton onClick={goToLogIn}>Log In</HeaderButton>
              </div>
              <div className="col-lg-3">
                <HeaderButton onClick={() => goToSignUp()}>
                  Sign Up
                </HeaderButton>
              </div>
            </div>
          </div>
        </div>
      </HeaderComputer>
      <HeaderMobile>
        <div className="row justify-content-between align-items-center">
          <div className="col-4">
            <HeaderItem>
              <i className="fa-solid fa-bars fs-2" onClick={handleMobile}></i>
            </HeaderItem>
          </div>
          <div className="col-4">
            <HeaderItem onClick={() => goToHome()}>
              <HeaderLogo src="https://s.tmimgcdn.com/scr/800x500/126100/e-ticaret-logo-sablonu_126133-original.png" />
            </HeaderItem>
          </div>
          <div className="col-4">
            <HeaderItem>
              <i
                className="fa-solid fa-magnifying-glass my-auto float-end fs-2"
                onClick={handleMobileInput}
              ></i>
            </HeaderItem>
          </div>
        </div>

        {isMobile && !isMobileInput && (
          <div className="row mt-3">
            <HeaderItem onClick={() => goToHome()}>Home</HeaderItem>
            <HeaderItem onClick={() => goToProducts()}>Category</HeaderItem>
            <HeaderItem>About</HeaderItem>
            <HeaderItem>Contact</HeaderItem>
            <div className="mt-3">
              <HeaderButton>Log In</HeaderButton>
            </div>
            <div className="mt-1">
              <HeaderButton onClick={() => goToSignUp()}>Sign Up</HeaderButton>
            </div>
          </div>
        )}
      </HeaderMobile>

      {isMobileInput && !isMobile && (
        <div className="row mt-3">
          <HeaderInput type="text" placeholder="Search something here!" />
        </div>
      )}
    </div>
  );
};

export default Header;
