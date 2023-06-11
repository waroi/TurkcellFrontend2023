import { Link, useParams } from "react-router-dom";
import {
  InfoContainer,
  InfoGrid,
  Part,
  Part2,
  CalculateBackgroundColor,
} from "../styles/InfoPageStyle";
import { useThemeStore } from "../context/themeStore";
import { useEffect, useState } from "react";
import Fetch from "../models/Fetch";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

const InfoPage = () => {
  const [coin, setCoin] = useState({});
  const [history, setHistory] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [chartLoading, setChartLoading] = useState(true);
  const { theme } = useThemeStore();
  const { id } = useParams();
  const navigate = useNavigate();

  document.body.style.backgroundColor = theme == "light" ? "#fff" : "#000";

  useEffect(() => {
    Fetch.getCoin(id).then((data) => {
      if (!data) {
        navigate(`/`);
      } else {
        setCoin(data);
        document.title = data.name;
        setTimeout(() => {
          setDataLoading(false);
        }, 1000);
      }
    });
    Fetch.getHistory(id).then((data) => {
      const newData = data.map((item) => item[1]);
      setHistory(newData);
      setTimeout(() => {
        setChartLoading(false);
      }, 1000);
    });
  }, [id, navigate]);

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

  const data = {
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        label: coin.id,
        data: history,
        borderColor: history[0] - history[23] < 0 ? "green" : "red",
        backgroundColor: history[0] - history[23] < 0 ? "green" : "red",
      },
    ],
  };
  const options = {
    responsive: true,
  };
  return (
    <InfoContainer>
      <InfoGrid>
        <Part theme={theme}>
          {!dataLoading ? (
            <>
              <div className="d-flex">
                <span className="icon">
                  <img src={coin.icon} />
                </span>
                <span>
                  #{coin.rank}
                  {coin.name}
                </span>
                <span className="symbol">{coin.symbol}</span>
              </div>
              <div className="price">
                {coin.price.toFixed(4)}{" "}
                <span>
                  <CalculateBackgroundColor number={coin.priceChange1d}>
                    {coin.priceChange1d}%
                  </CalculateBackgroundColor>
                </span>
              </div>
              <div>
                <span className="infoSpan">Market Cap:</span> {coin.marketCap}
              </div>
              <div>
                <span className="infoSpan">Volume:</span> {coin.volume}
              </div>
              <div>
                <span className="infoSpan">Total Supply:</span>{" "}
                {coin.availableSupply}
              </div>
              <div>
                <span className="infoSpan">Circulating Supply:</span>{" "}
                {(coin.availableSupply / coin.totalSupply).toFixed(4) * 100}%
              </div>
              <div>
                <span className="infoSpan">Max Supply:</span> {coin.totalSupply}
              </div>
              <div className="links">
                {coin.exp.map((url, index) => (
                  <Link target="_blank" key={index} to={url}>
                    {"link " + index}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="loading">Loading Informations</div>
          )}
        </Part>
        <Part2 theme={theme}>
          {!chartLoading ? (
            <Line className="chart" data={data} options={options} />
          ) : (
            <div className="loading">Loading Graphs</div>
          )}
        </Part2>
      </InfoGrid>
    </InfoContainer>
  );
};
InfoPage.propTypes = {
  coin: PropTypes.object,
  theme: PropTypes.string,
  number: PropTypes.number,
};

export default InfoPage;
