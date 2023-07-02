import SubscribeCard from "../SubscribeCard/SubscribeCard";
import FooterSocial from "../FooterSocial/FooterSocial";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

const Footer = () => {
  return (
    <footer className="footer pt-5">
      <div className="container">
        <SubscribeCard />
        <FooterSocial />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
