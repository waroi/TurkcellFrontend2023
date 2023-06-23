import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-body-tertiary">
      <div className="container">
        <div className="row">
          <span className="col-6">
            Register now so you don't miss our programs
          </span>
          <div className="col-6">
            <input
              type="email"
              id="emailSubscribe"
              placeholder="Enter your email"
            />
            <button>Subscribe Now</button>
          </div>
        </div>
        <div className="row">
          <ul className="col-6 d-flex justify-content-evenly">
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className="col-6 d-flex justify-content-evenly">
            <li>
              <Link>
                <BiLogoFacebookCircle />
              </Link>
            </li>
            <li>
              <Link>
                <BiLogoTwitter />
              </Link>
            </li>
            <li>
              <Link>
                <AiOutlineInstagram />
              </Link>
            </li>
            <li>
              <Link>
                <BiLogoYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-between">
          <span>© 2022 Monito. All rights reserved.</span>
          <img src="https://picsum.photos/100" alt="" />
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
