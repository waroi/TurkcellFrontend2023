import FooterListLeft from "./FooterListLeft";
// import FooterListMid from "./FooterListMid";
// import FooterListRight from "./FooterListRight";
import { FooterBackground, FooterUl } from "./styleFooter";

function Footer() {
  return (
    <FooterBackground>
      <div className="container">
        <FooterUl>
          <li>
            <FooterListLeft />
          </li>
          <li></li>
          <li></li>
        </FooterUl>
      </div>
    </FooterBackground>
  );
}

export default Footer;
