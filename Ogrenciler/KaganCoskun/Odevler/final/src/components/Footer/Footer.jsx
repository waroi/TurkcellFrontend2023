/* eslint-disable react/no-unescaped-entities */
import { Formik } from "formik";
import Button from "../Shared/Button";
import InputField from "../Shared/InputField";
import { Link } from "react-router-dom";
import styles from "./footer.module.css"

import logo from "../../assets/monitoLogo.png";
import facebook from "../../assets/social/Facebook-Negative.svg";
import instagram from "../../assets/social/Instagram-Negative.svg";
import twitter from "../../assets/social/Twitter-Negative.svg";
import youtube from "../../assets/social/YouTube-Negative.svg";

const Footer = () => {
  return (
    <div className={`rounded-top-5 mt-3 ${styles.footerBg}`}>
      <div className="container pt-5 pb-4">
        <div className="d-flex flex-column border-bottom">
          <div className="row gap-3 justify-content-center justify-content-lg-between  rounded p-4 bg-primary text-white mx-1 mx-md-0">
            <p className="m-0 col-lg-4 col-sm-12 fs-4">
              Register now so you don't miss our programs
            </p>
            <div className="col-lg-8 col-sm-12 row justify-content-between align-items-center gap-3 gap-md-0 bg-body rounded p-2">   
                <div className="col-md-9 col-sm-12">
                  <Formik>
                    <InputField name="name" placeholder="Enter your Email" />
                  </Formik>
                </div>
              <div className="col-md-3 col-sm-12 d-flex justify-content-center"><Button rounded="3" size="L">Subscribe Now</Button></div>
            </div>
          </div>
          <div className="row justify-content-between mb-5 mt-4 gap-4 gap-lg-0">
            <div className="col-lg-6 d-flex justify-content-between">
              <Link to="/">Home</Link>
              <Link to="/products">Category</Link>
              <Link to="/products">About</Link>
              <Link to="/products">Contact</Link>
            </div>
            <div className="col-lg-6 d-flex gap-5 justify-content-center justify-content-lg-end">
              <Link to="/">
                <img src={facebook} />
              </Link>
              <Link to="/">
                <img src={instagram} />
              </Link>
              <Link to="/">
                <img src={twitter} />
              </Link>
              <Link to="/">
                <img src={youtube} />
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-between mt-5 gap-3 gap-lg-0">
          <p className="col-lg-4 col-sm-12 m-0 text-center text-lg-start">© 2022 Monito. All rights reserved.</p>
          <div className="col-lg-4 col-sm-6 text-center"><img className=" img-fluid" src={logo} alt="logo" /></div>
          <div className="col-lg-4 col-sm-12 d-flex gap-3 justify-content-center justify-content-lg-end">
            <Link to="/products">Terms of Service</Link>
            <Link to="/products">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
