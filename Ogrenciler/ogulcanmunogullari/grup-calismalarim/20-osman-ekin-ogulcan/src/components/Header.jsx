import { useRef } from "react";
import { useThemeStore } from "../context/themeStore";
import { useStore } from "../context/store";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { StyledHeader, Form } from "../styles/headerStyle";

const Header = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  const { setTheme, theme } = useThemeStore();
  const { setSearch, top100, marketCap } = useStore();
  const handleForm = (e) => {
    e.preventDefault();
    setSearch(searchRef.current.value.toLowerCase());
    navigate(`/${searchRef.current.value.toLowerCase()}`);
    searchRef.current.value = "";
  };

  const handleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
    localStorage.setItem("theme", theme == "light" ? "dark" : "light");
  };

  return (
    <StyledHeader theme={theme}>
      <div>
        <Link to="/">
          <h1>
            O<small>m</small>O
          </h1>
        </Link>
        <span>Cryptos: {top100.length}</span>
        <span>Market Cap: {marketCap.toFixed(2)}</span>
        <span>
          24H Vol:{" "}
          {top100.reduce((acc, cur) => acc + Number(cur.volume), 0).toFixed(2)}
        </span>
        <span>
          Dominance: BTC:{" "}
          {marketCap && ((top100[0].marketCap / marketCap) * 100).toFixed(2)}%
          ETH:{" "}
          {marketCap && ((top100[1].marketCap / marketCap) * 100).toFixed(2)}%
        </span>
        <span className="themeButton" onClick={handleTheme}></span>
      </div>

      <Form theme={theme} onSubmit={handleForm}>
        <input
          ref={searchRef}
          type="search"
          placeholder="Search Coin.."
          name="search"
        />
      </Form>
    </StyledHeader>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default Header;
