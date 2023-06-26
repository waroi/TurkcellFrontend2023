import React from "react";
import { BiSearch, BiUserCircle, BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { clearUser } from "../../redux/slices/userSlice";
const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const UserDiv = styled.div`
    display: flex;
  `;

  console.log(user);

  return (
    <div className="bg-body-tertiary">
      <nav className="navbar container navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
              alt=""
              width={"115"}
              height={"40"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/buttons">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex searchForm" role="search">
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
            <div>
              {user ? (
                <UserDiv>
                  <li>
                    <Link className="btn" type="button" to={"/"}>
                      <BiCartAlt />
                      <span>1</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown my-auto">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BiUserCircle />
                      {user[0].username}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                          onClick={() => {
                            dispatch(clearUser());
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </UserDiv>
              ) : (
                <div>
                  <Link className="btn" type="button" to={"/login"}>
                    Login
                  </Link>
                  <Link className="btn" type="button" to={"/signup"}>
                    Sign Up
                  </Link>
                </div>
              )}
              {user && user[0].role === "admin" && (
                <Link className="btn" type="button" to={"/admin"}>
                  Admin Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
