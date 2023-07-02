import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import twitter from "../../assets/Twitter.svg";
import youtube from "../../assets/Youtube.svg";

export function SocialLinks() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ul className="footerlinks">
            <li className="nav-item">
              <a className="nav-link " href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/category">
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="social-icons">
            <li className="nav-item">
              <a className="nav-link " href="/contact">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/contact">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/contact">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/contact">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
