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
import { useFormik } from "formik";
import { footerSchema } from "../../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function Footer() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: footerSchema,
      onSubmit,
    });
  return (
    <FooterDiv>
      <Container>
        <FooterFlexDiv>
          <FooterRegisterDiv>
            <FooterTextDiv>
              Register now so you don't miss our programs
            </FooterTextDiv>
            <form onSubmit={handleSubmit}>
              <FooterİnputDiv>
                <Footerİnput
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
                <FooterSubmitButton type="submit" disabled={isSubmitting}>
                  Subcribe Now
                </FooterSubmitButton>
              </FooterİnputDiv>
            </form>
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
