import Icon from "../../Icon/Icon";
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
import { ErrorDiv, ErrorText } from "../Forms/RegisterForm/styleRegisterForm";
import { useFormik } from "formik";
import { footerSchema } from "../../schemas";
import PropTypes from "prop-types";

function successPost(email) {
  toast.success(`Başarılı şekilde alındı: ${email}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
  });
}

const onSubmit = async (values, actions) => {
  successPost(values.email);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function Footer({ isBottomLine }) {
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
                {errors.email && (
                  <ErrorDiv>
                    <img src={Icon.Error} alt="icon" />
                    <ErrorText>{errors.email}</ErrorText>
                  </ErrorDiv>
                )}
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
              <Footerİcon src={Icon.Facebook} alt="icon" />
              <Footerİcon src={Icon.Instagram} alt="icon" />
              <Footerİcon src={Icon.Twitter} alt="icon" />
              <Footerİcon src={Icon.Youtube} alt="icon" />
            </FooterİconList>
          </FooterSocialDiv>
        </FooterFlexDiv>
        {isBottomLine && (
          <FooterAltTagDiv>
            <FooterH4>© 2022 Monito. All rights reserved.</FooterH4>
            <FooterMainİcon src={Icon.Main} alt="icon" />
            <FooterH4>Terms of Service Privacy Policy</FooterH4>
          </FooterAltTagDiv>
        )}
      </Container>
    </FooterDiv>
  );
}

Footer.propTypes = {
  isBottomLine: PropTypes.bool,
};

Footer.defaultProps = {
  isBottomLine: true,
};

export default Footer;
