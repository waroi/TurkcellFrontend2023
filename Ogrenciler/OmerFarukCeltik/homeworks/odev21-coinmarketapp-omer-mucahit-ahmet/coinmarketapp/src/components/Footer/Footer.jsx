import { FooterBottom, FooterBottomImg, FooterBottomLink, FooterContainer, FooterH, FooterImg, FooterImgContainer, FooterLi, FooterLink, FooterSpan, FooterTop, FooterTopRight, FooterUl, StyledFooter } from './styled';
import { useTheme } from '../../context/ThemeContext';
const Footer = () => {
  const {theme} = useTheme();
  return (
    <StyledFooter style={theme == "light" ?  {backgroundColor:"white"} :  {backgroundColor: "#1a1a1d"}}>
      <FooterContainer>
        <FooterTop >
          <FooterImgContainer style={theme == "light" ?  {backgroundColor:"white"} :  {backgroundColor: "#1a1a1d"}}>
            <FooterImg
              src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg?_=7934c0e"
              alt="Footer-img"
            ></FooterImg>
          </FooterImgContainer>
          <FooterTopRight>
            <FooterUl>
              <FooterH>Products</FooterH>
              <FooterLi>
                <FooterLink href="">Blockchain Explorer</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Crypto API</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Crypto indices</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Doodles</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Jobs Board</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Sitemap </FooterLink>
              </FooterLi>
            </FooterUl>
            <FooterUl>
              <FooterH>Company</FooterH>
              <FooterLi>
                <FooterLink href="">About us</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Terms of use</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Privacy PoFooterLicy</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Cookie preferences</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Community Rules</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Disclaimer</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Methodology</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Careers</FooterLink>{" "}
                <FooterSpan>We are Hiring!</FooterSpan>
              </FooterLi>
            </FooterUl>
            <FooterUl>
              <FooterH>Support</FooterH>
              <FooterLi>
                <FooterLink href="">Request Form</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Contact Support</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">FAQ</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Glossary</FooterLink>
              </FooterLi>
            </FooterUl>
            <FooterUl>
              <FooterH>Socials</FooterH>
              <FooterLi>
                <FooterLink href="">Facebook</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Twitter</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Telegram</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Instagram</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="">Interactive Chat</FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterTopRight>
        </FooterTop>
        <FooterBottom>
          <p>@ 2023 CoinMarketCap. All rights reserved</p>
          <FooterBottomImg>
            <a href="">
              <FooterBottomLink
                src="	https://s2.coinmarketcap.com/static/cloud/img/app_store_badge_white_1.svg?_=7934c0e"
                alt="Footer-img"
              ></FooterBottomLink>
            </a>
            <a href="">
              <FooterBottomLink
                src="	https://s2.coinmarketcap.com/static/cloud/img/google_play_badge_1.png?_=7934c0e"
                alt="Footer-img"
              ></FooterBottomLink>
            </a>
            <a href="">
              <FooterBottomLink
                src="https://s2.coinmarketcap.com/static/cloud/img/qr-code-button.svg?_=7934c0e"
                alt="Footer-img"
              ></FooterBottomLink>
            </a>
          </FooterBottomImg>
        </FooterBottom>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer