import { useState } from "react";
import SearchComponent from "../Search/SearchComponent";
import "./Header.scss";
import ButtonComponent from "../Button/ButtonComponent";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import shoppingCart from "../../assets/shopping-cart.svg";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setSignUpFormOpen] = useState(false);
  const userLogin = useSelector(state => state.userLogin);
  const navigate = useNavigate();
  
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleLoginClick = () => {
    setLoginFormOpen(true);
    document.body.classList.add("login-popup-open");
   
  };

  const handleCloseLoginForm = () => {
    setLoginFormOpen(false);
    document.body.classList.remove("login-popup-open");
  };

  const handleSignUpClick = () => {
    setSignUpFormOpen(true);
    document.body.classList.add("login-popup-open");
  };

  const handleCloseSignUpForm = () => {
    setSignUpFormOpen(false);
    document.body.classList.remove("login-popup-open");
  };

  const handleLogOutClick = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    dispatch(logout());
  };

  const handleOnProductsClick = () => {
    if (userInfo) {
      navigate("/products");
    } else {
      handleLoginClick();
    }
  };

  return (
    <>
      {isLoginFormOpen && <LoginForm onClose={handleCloseLoginForm} />}
      {isSignUpFormOpen && <SignUpForm onClose={handleCloseSignUpForm} />}
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#home">
            Gizem E-Commerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-primary" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" onClick={handleOnProductsClick}>
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <SearchComponent />
            {!userInfo && (
              <>
                <ButtonComponent
                  title="Login"
                  link="login"
                  filled={true}
                  onclick={handleLoginClick}
                />{" "}
                <ButtonComponent
                  title="Sign Up"
                  link="sign-up"
                  filled={false}
                  onclick={handleSignUpClick}
                />
              </>
            )}
            {userInfo && (
              <>
                <div className="cart-icon">
                  <a href="/cart">
                  <img src={shoppingCart} alt="Cart" width={32} height={32}/>
                  </a>
                </div>

                <ButtonComponent
                  title="Logout"
                  link="logout"
                  filled={false}
                  onclick={handleLogOutClick}
                />
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
