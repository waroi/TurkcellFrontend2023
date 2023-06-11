import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css"
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          {/* <img className="img-fluid" src="https://media.discordapp.net/attachments/1089995554941063318/1117095500810825738/Ekran_Alnts.PNG"
            alt="" /> */}
          C4 Coin Market<span className="logo-banner">Yatırım Tavsiyesi Değildir</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav  ">
            <li className="nav-item mx-3 ">
              <Link className="nav-link text-white px-0 " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3 ">
              <Link className="nav-link text-white px-0 " to="/news">
                News
              </Link>
            </li>
            <li className="nav-item mx-3  ">
              <Link className="nav-link text-white px-0" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item ms-3 ">
              <Link className="nav-link text-white px-0 " to="/contact">
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
