import { Button, Container } from "react-bootstrap";
import { FooterCard } from "./styled";
import { Link } from "react-router-dom";
import Twitter from "../../assets/Twitter - Negative.svg";
import Instagram from "../../assets/Instagram - Negative.svg";
import Facebook from "../../assets/Facebook - Negative.svg";
import Youtube from "../../assets/Youtube - Negative.svg";
import Frame from "../../assets/Frame.png";

const Footer = () => {
  return (
    <FooterCard>
      <Container>
        <div className="col">
          <div
            style={{ backgroundColor: "#003459" }}
            className="d-flex row rounded py-5 mt-sm-5"
          >
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <h4 className="text-white">
                Register Now So You Dont Miss Our Programs
              </h4>
            </div>
            <div className="col-md-7">
              <div className="bg-white d-flex py-3 px-3 rounded gap-1">
                <input
                  placeholder="Enter your email"
                  className="w-75 rounded border"
                ></input>
                <Button className="w-25" variant="primary" size="sm">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="d-flex row">
          <div className="col-md-6 d-flex justify-content-lg-start justify-content-evenly gap-sm-5 gap-2 mt-sm-3 mt-3">
            <Link className="text-black" to="/">
              Home
            </Link>
            <Link className="text-black" to="/">
              Category
            </Link>
            <Link className="text-black" to="/">
              About
            </Link>
            <Link className="text-black" to="/">
              Contact
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-sm-end justify-content-center mt-3 mt-sm-3 gap-sm-5 gap-4">
            <img src={Facebook}></img>
            <img src={Twitter}></img>
            <img src={Instagram}></img>
            <img src={Youtube}></img>
          </div>
        </div>
        <hr className="mt-4"></hr>
        <div className="d-flex row mt-3">
          <div className="d-flex justify-content-center justify-content-md-start align-items-md-start col-md-4 align-items-center">
            <p className="text-secondary">© 2022 Monito. All rights reserved.</p>
          </div>
          <div className="d-flex col-md-4 justify-content-center">
            <img style={{ width: "115px", height: "40px"}} src={Frame}></img>
          </div>
          <div className="d-flex col-md-4  justify-content-md-end justify-content-center mt-3 mt-sm-0 gap-4">
            <p className="text-secondary">Terms of Service</p>
            <p className="text-secondary">Privacy Policy</p>
          </div>
        </div>
      </Container>
    </FooterCard>
  );
};

export default Footer;
