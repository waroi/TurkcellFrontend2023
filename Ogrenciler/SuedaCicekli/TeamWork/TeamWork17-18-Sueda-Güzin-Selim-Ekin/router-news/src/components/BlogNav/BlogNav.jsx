import "./style.css";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav
      className="navbar fixed-top justify-content-center bg-white"
      id="navbar"
    >
      <a
        className="navbar-brand justify-content-center align-items-center d-flex"
        href="./"
      >
        <img src={Logo} className="logoImg " alt="images" />
      </a>
    </nav>
  );
}

export default Navbar;
