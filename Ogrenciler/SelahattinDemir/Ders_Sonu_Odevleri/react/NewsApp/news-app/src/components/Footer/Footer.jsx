import "./Footer.css";
import styled from "styled-components";

const Footer = () => {
  const FooterStart = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  `;
  const FooterStartUl = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
  `;
  const FlexImg = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    align-items: center;
  `;

  const FooterMid = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  `;
  const FooterMidUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  `;

  const FooterEnd = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  `;

  const FooterEndUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  `;

  return (
    <footer>
      <div className="container footerContainer">
        <FooterStart>
          <FlexImg>
            <img
              src="https://cdn.discordapp.com/attachments/1089995966817517618/1116464696967565322/Sasnews.png"
              alt=""
              width="200px"
            />
            <h1>SAS NewsWire</h1>
          </FlexImg>

          <p> ŞebinKarahisar, Turkey</p>
          <a href="">+905388752355</a>
          <div className="contributors">
            <h3>Contibutors</h3>
            <FooterStartUl>
              <li className="footerStart-li">
                <a href="https://github.com/seyityuce">Seyit Yüce</a>
              </li>
              <li className="footerStart-li">
                <a href="https://github.com/Ecthelionn">Ahmet Mert Tutal</a>
              </li>
              <li className="footerStart-li">
                <a href="https://github.com/Selahaddin64">Selahattin Demir</a>
              </li>
            </FooterStartUl>
          </div>
        </FooterStart>
        <FooterMid>
          <h2>About Sas NewsWire</h2>
          <FooterMidUl>
            <li className="text-hover">
              <a href="">About Us</a>
            </li>
            <li className="text-hover">
              <a href="">Careers</a>
            </li>
            <li className="text-hover">
              <a href="">Sas News Agency</a>
            </li>
            <li className="text-hover">
              <a href="">Brand Attribution Guidelines</a>
            </li>
            <li className="text-hover">
              <a href="">Newsletters</a>
            </li>
          </FooterMidUl>
        </FooterMid>
        <FooterEnd>
          <div className="social-media">
            <h2>Social Media</h2>
            <FooterEndUl>
              <li className="">
                <a href="">Facebook</a>
              </li>
              <li className="">
                <a href="">Linkedin</a>
              </li>
              <li className="">
                <a href="">Instagram</a>
              </li>
              <li className="">
                <a href="">Twitter</a>
              </li>
            </FooterEndUl>
          </div>
          <div>
            <h2>Media</h2>
            <ul>
              <li className="text-hover">
                <a href=""></a>Videos
              </li>
              <li className="text-hover">
                <a href=""></a>Pictures
              </li>
              <li className="text-hover">
                <a href=""></a>Graphics
              </li>
            </ul>
          </div>
        </FooterEnd>
      </div>
    </footer>
  );
};

export default Footer;
