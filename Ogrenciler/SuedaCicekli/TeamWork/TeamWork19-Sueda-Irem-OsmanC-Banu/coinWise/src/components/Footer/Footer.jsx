
import FooterLogo from "../../assets/logo/coinWiseLight.png";
import { CoinWiseGreen } from './FooterStyle'

const Footer = () => {
  return (
    <div className="footer py-4 ">
      <div className="container bg-dark text-center rounded-5 p-3" id="footerTheme">
        <div className="col-12 d-flex justify-content-center">
          <img src={FooterLogo} alt="Footer Logo" id="footerThemeLogo" />
        </div>
        <p className="text-light fs-6 fw-light mt-3" id="footerThemeText">
          Designed and developed with ❤️ by <CoinWiseGreen className="text-danger">coinWise</CoinWiseGreen> team | dotminds App, 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
