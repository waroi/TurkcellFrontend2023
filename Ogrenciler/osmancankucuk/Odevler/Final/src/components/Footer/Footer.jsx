import {
  FooterWrap,
  FormTitle,
  FooterFormWrap,
  FormInputSection,
  FormButton,
} from "./FooterStyle";
import { Link } from "react-router-dom";
import Frame from "../../img/Frame.svg";

const Footer = () => {
  return (
    <div className="mt-5">
      <FooterWrap>
        <div className="container py-5">
          <FooterFormWrap>
            <div className="row justify-content-between ">
              <FormTitle className="col-md-4 text-white fw-bold pe-4">
                Register Now So You Dont Miss Our program
              </FormTitle>
              <FormInputSection className="col-12 col-md-8 mt-2 border">
                <div className="d-flex">
                  <input type="text" className="form-control me-3 " />
                  <FormButton>Subscribe Now</FormButton>
                </div>
              </FormInputSection>
            </div>
          </FooterFormWrap>
          <div className="d-md-flex justify-content-between my-5 ">
            <div className="d-flex gap-5 justify-content-center   pt-3">
              <Link>Home</Link>
              <Link>Category</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </div>
            <div className="d-flex gap-5 justify-content-center  pt-3">
              <Link>
                <i className="fa-brands fa-facebook fa-lg"></i>
              </Link>
              <Link>
                {" "}
                <i className="fa-brands fa-twitter fa-lg"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-instagram fa-lg"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-youtube fa-lg"></i>
              </Link>
            </div>
          </div>
          <hr />
          <div className="pt-5 footerBottom">
            <div className="item-1">© 2022 Monito. All rights reserved.</div>
            <div className="item-2 text-center">
              <img src={Frame} alt="Logo" />
            </div>
            <div className="d-flex gap-3 item-3 justify-content-end">
              <div>Terms of Service</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </FooterWrap>
    </div>
  );
};

export default Footer;
