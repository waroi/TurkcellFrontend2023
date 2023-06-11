import { useStore } from "../context/store";
import { useThemeStore } from "../context/themeStore";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  MainContainer,
  Grid,
  Loading,
  CalculateColor,
} from "../styles/MainStyles";

const MainPage = () => {
  document.title = "Crypto Currency";
  const navigate = useNavigate();
  const { theme } = useThemeStore();
  const { top100, setSearch } = useStore();

  document.body.style.backgroundColor = theme == "light" ? "#fff" : "#000";

  const goTo = (id) => {
    setSearch(id);
    navigate(`/${id}`);
  };

  return (
    <MainContainer>
      <Grid theme={theme}>
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>1h</div>
        <div>24h</div>
        <div>7d</div>
        <div>Market Cap</div>
        <div>Volume(24h)</div>
      </Grid>
      {top100.length == 0 && <Loading theme={theme}>Loading...</Loading>}
      {top100.map((coin) => {
        return (
          <Grid onClick={() => goTo(coin.id)} key={coin.rank} theme={theme}>
            <div>{coin.rank}</div>
            <div>
              {" "}
              <span className="icon">
                <img src={coin.icon} />
              </span>{" "}
              {coin.name} <span className="symbol">{coin.symbol}</span>
            </div>
            <div>{coin.price.toFixed(6)}</div>
            <CalculateColor number={coin.priceChange1h}>
              {coin.priceChange1h}
            </CalculateColor>
            <CalculateColor number={coin.priceChange1d}>
              {coin.priceChange1d}
            </CalculateColor>
            <CalculateColor number={coin.priceChange1w}>
              {coin.priceChange1w}
            </CalculateColor>
            <div>{coin.marketCap.toFixed(2)}</div>
            <div>{coin.volume.toFixed(2)}</div>
          </Grid>
        );
      })}
    </MainContainer>
  );
};

MainPage.propTypes = {
  theme: PropTypes.string,
  number: PropTypes.number,
  top100: PropTypes.array,
};

export default MainPage;
