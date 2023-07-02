import FooterStyle from "./FooterStyle";
import ButtonStyle from "../Button/Button.jsx";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footerWrapper">
        <div className="row d-flex register m-auto">
          <div className="col-lg-5 col-sm-12">
            <h2>Register Now So You Don{"'"}t Miss Our Programs</h2>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="emailArea d-flex">
              <input type="email" placeholder="Enter your Email" />
              <ButtonStyle
                className="button"
                value="Subscribe Now"
              ></ButtonStyle>
            </div>
          </div>
        </div>
        <div className="row text-center footerNavbar ">
          <div className="col-lg-4 col-sm-12">
            <div className="row footerLinks">
              <div className="col-3 footerInner">
                <a className=" text-decoration-none" href={"/"}>
                  Home
                </a>
              </div>
              <div className="col-3  footerInner">
                <a className=" text-decoration-none" href={"/"}>
                  Category
                </a>
              </div>
              <div className="col-3 footerInner">
                <a className=" text-decoration-none" href={"/"}>
                  About
                </a>
              </div>
              <div className="col-3 footerInner  ">
                <a className="text-decoration-none" href={"/"}>
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="socialicons col-lg-4 col-sm-12 ">
            <div className="row align-items-center justify-content-end socials">
              <div className="col-2">
                <img
                  src="../../../assets/Facebook - Negative.png"
                  alt=""
                  className="SocialIcons"
                />
              </div>
              <div className="col-2">
                <img
                  src="../../../assets/Twitter - Negative.png"
                  alt=""
                  className="SocialIcons"
                />
              </div>
              <div className="col-2">
                <img
                  src="../../../assets/Instagram - Negative.png"
                  alt=""
                  className="SocialIcons"
                />
              </div>
              <div className="col-2">
                <img
                  src="../../../assets/YouTube - Negative.png"
                  alt=""
                  className="SocialIcons"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 pb-5 align-items-center justify-content-between footerReserved">
          <div className="col-lg-4 col-sm-12 first">
            © 2022 Monito. All rights reserved.
          </div>
          <div className="col-lg-4 col-sm-12 second">
            <a href={"/"}>
              <img className="monito" src="../../../assets/Navbar.png" />
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex gap-4 footerTerm e-0  third">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
