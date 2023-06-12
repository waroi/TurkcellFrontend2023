import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css"
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container">
        <Link className="navbar-brand logo" to={"/"}>
          C4 Coin Market<span className="logo-banner">Yatırım Tavsiyesi Değildir</span>
        </Link>
        <button className="navbar-toggler  bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
          <ul className="navbar-nav  ">
            <li className="nav-item mx-3 ">
              <Link className="nav-link text-white text-start px-0 " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3  ">
              <Link className="nav-link text-white text-start px-0 " to="/news">
                News
              </Link>
            </li>
            <li className="nav-item mx-3  ">
              <Link className="nav-link text-white text-start px-0" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item ms-3 ">
              <Link className="nav-link text-white text-start px-0 " to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
