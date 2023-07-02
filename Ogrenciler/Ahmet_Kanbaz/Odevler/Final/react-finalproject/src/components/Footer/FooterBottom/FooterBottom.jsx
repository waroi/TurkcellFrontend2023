import logoMonito from "../../../assets/logoMonito.svg";
const FooterBottom = () => {
  return (
    <div className="footerBottom d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center align-items-center">
      <span className="order-3 order-lg-0">© 2022 Monito. All rights reserved.</span>
      <img src={logoMonito} alt="footerLogo" />
      <div className="d-flex align-items-center justify-content-center gap-4">
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default FooterBottom;
