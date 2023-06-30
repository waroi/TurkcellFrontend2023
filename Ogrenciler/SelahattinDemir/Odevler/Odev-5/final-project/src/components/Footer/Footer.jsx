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

        <FooterLinkContainer className="d-flex justify-content-between my-4">
          <div className="d-flex gap-5">
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
          <div className="d-flex gap-4">
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

        <div className="d-flex justify-content-between">
          <FooterText>© 2022 Monito. All rights reserved.</FooterText>
          <FooterLogo src="src/assets/Frame.svg" alt="logo" />
          <FooterText>
            Terms of Service <span className="ms-4">Privacy Policy</span>
          </FooterText>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
