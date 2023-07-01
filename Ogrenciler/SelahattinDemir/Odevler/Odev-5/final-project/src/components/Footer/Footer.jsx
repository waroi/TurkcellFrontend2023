import {
  FooterContainer,
  FooterLinkContainer,
  FooterLink,
  FooterText,
  FooterLogo,
  SubscribeContainer,
  SubscribeDescription,
  SubscribeArea,
  SubscribeInput,
  SubscribeButton,
  FooterInfoContainer,
} from "./FooterStyle";

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <SubscribeContainer className="row align-items-center">
          <SubscribeDescription className="col-lg-4">
            Register now so you dont miss our programs
          </SubscribeDescription>
          <SubscribeArea className="d-flex col-lg-8">
            <SubscribeInput type="email" placeholder="Enter your Email" />
            <SubscribeButton>Subscribe Now</SubscribeButton>
          </SubscribeArea>
        </SubscribeContainer>

        <FooterLinkContainer className="row justify-content-between my-4">
          <div className="col-md-6 d-flex justify-content-start gap-5">
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
          <div
            className=" col-md-6 d-flex gap-4 mt-3 mt-lg-0 justify-content-center
          justify-content-lg-end  "
          >
            <FooterLink href="#">
              <i className="bi bi-facebook"></i>
            </FooterLink>
            <FooterLink href="#">
              <i className="bi bi-twitter"></i>
            </FooterLink>
            <FooterLink href="#">
              <i className="bi bi-instagram"></i>
            </FooterLink>
            <FooterLink href="#">
              <i className="bi bi-youtube"></i>
            </FooterLink>
          </div>
        </FooterLinkContainer>

        <FooterInfoContainer className="d-flex justify-content-between flex-wrap">
          <FooterText>© 2022 Monito. All rights reserved.</FooterText>
          <FooterLogo src="src/assets/Frame.svg" alt="logo" />
          <FooterText>
            Terms of Service <span className="ms-4">Privacy Policy</span>
          </FooterText>
        </FooterInfoContainer>
      </div>
    </FooterContainer>
  );
}

export default Footer;
