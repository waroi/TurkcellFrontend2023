import { HeaderComponent } from "./HeaderStyle.js";
import { Container } from "../StyledContainer.js";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext.jsx";
import { Icon } from "react-icons-kit";
import { ic_nightlight_round } from "react-icons-kit/md/ic_nightlight_round";
import { sunO } from "react-icons-kit/fa/sunO";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <HeaderComponent className={`${theme}`} theme={theme}>
      <Container>
        <div className="wrapper">
          <div className="logo">
            <Link to={`/`}>
              <h1>AES Coins</h1>
            </Link>
          </div>
          <div className="menu">
            <Link to={`*`}>Hakkımızda</Link>
            <Link to={`*`}>Bize Ulaşın</Link>
            <button
              className="themeSwapButton"
              onClick={() => setTheme(theme == "light" ? "dark" : "light")}
            >
              {theme == "light" ? (
                <span className="themeIconMoon">
                  <Icon size={22} icon={ic_nightlight_round} />
                </span>
              ) : (
                <span className="themeIconSun">
                  <Icon size={22} icon={sunO} />
                </span>
              )}
            </button>
          </div>
        </div>
      </Container>
    </HeaderComponent>
  );
};

export default Header;
