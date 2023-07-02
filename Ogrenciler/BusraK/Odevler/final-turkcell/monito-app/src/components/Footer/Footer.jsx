import { FooterContainer } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="register-now">
        <div className="d-flex col-md-5">
          <h1>Register now so you don't miss our programs</h1>
        </div>
        <div className="inputContainer d-flex col-md-7">
          <input type="text" placeholder="Enter your email" />
          <button type="dark-blue">Subscribe Now</button>
        </div>
      </div>
      <div>
        <div>
          <div className="d-flex justify-content-between flex-wrap all-ul ">
            <ul className="list-unstyled me-5 d-flex flex-wrap gap-5 site-ul">
              <li>Home</li>
              <li>Category</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul className="list-unstyled d-flex gap-5 social-ul  justify-content-center">
              <li className="d-flex align-items-center gap-4">
                <img
                  src="../../src/assets/Icon/Facebook.png"
                  alt="Facebook"
                  className="me-2"
                />
                <img
                  src="../../src/assets/Icon/Twitter.png"
                  alt="Twitter"
                  className="me-2"
                />
                <img
                  src="../../src/assets/Icon/Instagram.png"
                  alt="Instagram"
                  className="me-2"
                />
                <img
                  src="../../src/assets/Icon/YouTube.png"
                  alt="YouTube"
                  className="me-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex gap-5 justify-content-between border-top  footer-text">
        <p className="p-2">© 2022 Monito. All rights reserved.</p>
        <img src="../../src/assets/logo.png" alt="Logo" />
        <div className="d-flex gap-4">
          <div>Terms of Service </div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
