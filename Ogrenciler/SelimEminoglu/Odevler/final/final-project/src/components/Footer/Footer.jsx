import { Container } from "../../assets/css/style";
import {
  FooterDiv,
  FooterFlexDiv,
  FooterRegisterDiv,
  FooterSocialDiv,
  FooterTextDiv,
  FooterİnputDiv,
  Footerİnput,
  FooterSubmitButton,
  FooterNavList,
  FooterH3,
  FooterİconList,
  Footerİcon,
  FooterAltTagDiv,
  FooterH4,
  FooterMainİcon,
} from "./styleFooter";

function Footer() {
  return (
    <FooterDiv>
      <Container>
        <FooterFlexDiv>
          <FooterRegisterDiv>
            <FooterTextDiv>
              Register now so you don't miss our programs
            </FooterTextDiv>
            <FooterİnputDiv>
              <Footerİnput type="text" placeholder="Enter Your Email" />
              <FooterSubmitButton>Subcribe Now</FooterSubmitButton>
            </FooterİnputDiv>
          </FooterRegisterDiv>
          <FooterSocialDiv>
            <FooterNavList>
              <FooterH3>Home</FooterH3>
              <FooterH3>Category</FooterH3>
              <FooterH3>About</FooterH3>
              <FooterH3>Contact</FooterH3>
            </FooterNavList>
            <FooterİconList>
              <Footerİcon
                src="./src/assets/icons/Facebook - Negative.svg"
                alt="icon"
              />
              <Footerİcon
                src="./src/assets/icons/Instagram - Negative.svg"
                alt="icon"
              />
              <Footerİcon
                src="./src/assets/icons/Twitter - Negative.svg"
                alt="icon"
              />
              <Footerİcon
                src="./src/assets/icons/Youtube - Negative.svg"
                alt="icon"
              />
            </FooterİconList>
          </FooterSocialDiv>
        </FooterFlexDiv>
        <FooterAltTagDiv>
          <FooterH4>© 2022 Monito. All rights reserved.</FooterH4>
          <FooterMainİcon src="./src/assets/icons/main_icon.svg" alt="icon" />
          <FooterH4>Terms of Service Privacy Policy</FooterH4>
        </FooterAltTagDiv>
      </Container>
    </FooterDiv>
  );
}

export default Footer;
