import { NavBarArea } from "./NavbarStyle";
import "../../App.css";
import { useTheme } from "../../context/ThemeContext";

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div className="container">
      <NavBarArea>
        <p>
          Cryptos: 25,636Exchanges: 641Market Cap: $1,055,322,945,85824h Vol:
          $51,909,288,482Dominance: BTC: 47.7% ETH: 20.0% ETH Gas: 17 Gwei
        </p>
        <p>English USD</p>
      </NavBarArea>
      <hr />
      <nav
        data-bs-theme={theme}
        className={`app navbar navbar-expand-lg  ${theme}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${theme}`}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Cryptocurrencies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Exchanges
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Learn
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
