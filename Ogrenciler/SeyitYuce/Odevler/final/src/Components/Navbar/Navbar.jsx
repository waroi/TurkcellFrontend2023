import { BiSearch, BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { clearUser } from "../../redux/slices/userSlice";
import CartDropdown from "../CartDropdown/CartDropdown";
import Buttons from "../Buttons/Buttons";
const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UserDiv = styled.div`
    display: flex;
  `;

  const StyledNavbarLinks = styled.li`
    color: #003459;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  `;

  return (
    <div className="navbarCon">
      <nav className="navbar container navbar-expand-lg">
        <div className="container-fluid d-flex flex-row flex-wrap-nowrap">
          <div className="navbar-brand order-2 order-lg-1">
            <Link className="navbar-brand-logo" to="/">
              <img
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                alt=""
                width={"115"}
                height={"40"}
              />
            </Link>
            <div></div>
          </div>
          <button
            className="navbar-toggler order-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse order-4 order-lg-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <StyledNavbarLinks className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </StyledNavbarLinks>
              <StyledNavbarLinks className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </StyledNavbarLinks>
              <StyledNavbarLinks className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </StyledNavbarLinks>
              <StyledNavbarLinks className="nav-item">
                <Link className="nav-link" to="/buttons">
                  Contact
                </Link>
              </StyledNavbarLinks>
            </ul>
            <form className="d-flex searchForm order-3 order-lg-3 d-none d-lg-block">
              <div className="input-group">
                <button
                  className="btn searchBtn"
                  type="button"
                  id="button-addon1"
                >
                  <BiSearch />
                </button>
                <input
                  className="form-control searchInput"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
            <div className=" order-4 order-lg-4">
              {user && user[0] ? (
                <UserDiv>
                  <CartDropdown />
                  <li className="nav-item dropdown my-auto">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BiUserCircle />
                      {user ? user[0]?.username : ""}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                          onClick={() => {
                            dispatch(clearUser());
                            navigate("/");
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </UserDiv>
              ) : (
                <div className="d-flex flex-column flex-lg-row col-3 col-lg-12">
                  <Link to={"/login"}>
                    <Buttons variation="textOnly btnLarge btn1 w-100">
                      Login
                    </Buttons>
                  </Link>
                  <Link to={"/signup"}>
                    <Buttons variation="textOnly btnLarge btn1 w-100">
                      Sign Up
                    </Buttons>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <form className="d-flex searchForm order-3 order-lg-3 d-block d-lg-none">
            <div className="input-group">
              <button
                className="btn searchBtn"
                type="button"
                id="button-addon1"
              >
                <BiSearch />
              </button>
              <input
                className="form-control searchInput"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
