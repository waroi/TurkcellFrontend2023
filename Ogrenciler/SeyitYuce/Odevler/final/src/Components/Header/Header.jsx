import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                <Link className="nav-link" to="/category">
                  Category
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
              <Link className="btn " type="button" to={"/login"}>
                Login
              </Link>
              <Link className="btn " type="button" to={"/signup"}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
