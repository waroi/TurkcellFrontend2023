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
  const { top100 } = useStore();

  document.body.style.backgroundColor = theme == "light" ? "#fff" : "#000";

  const goTo = (id) => {
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
        const { rank, icon, name, symbol, price, priceChange1h, priceChange1d, priceChange1w, marketCap, volume } = coin;
        return (
          <Grid onClick={() => goTo(coin.id)} key={coin.rank} theme={theme}>
            <div>{rank}</div>
            <div>
              {" "}
              <span className="icon">
                <img src={icon} />
              </span>{" "}
              {name} <span className="symbol">{symbol}</span>
            </div>
            <div>{price.toFixed(6)}</div>
            <CalculateColor number={priceChange1h}>
              {priceChange1h}
            </CalculateColor>
            <CalculateColor number={priceChange1d}>
              {priceChange1d}
            </CalculateColor>
            <CalculateColor number={priceChange1w}>
              {priceChange1w}
            </CalculateColor>
            <div>{marketCap.toFixed(2)}</div>
            <div>{volume.toFixed(2)}</div>
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
