import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useThemeStore } from "../context/themeStore";
import { useEffect, useState } from "react";
import Fetch from "../models/Fetch";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

const InfoPage = () => {
  const [coin, setCoin] = useState({});
  const [history, setHistory] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [chartLoading, setChartLoading] = useState(true);
  const { theme } = useThemeStore();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Fetch.getCoin(id).then((data) => {
      if (!data) {
        navigate(`/`);
      } else {
        setCoin(data);

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

  const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2em;
  `;

  const Part = styled.div`
    border-radius: 15px;
    padding: 1rem;
    background-color: ${(props) =>
      props.theme == "light" ? "#eae7e775" : "#2a292978"};
    div {
      padding: 1em 0;
    }
    .icon {
      width: 1.5em;
      height: 1.5em;
      overflow: hidden;
      display: inline-block;

      img {
        width: 100%;
      }
    }
    .d-flex {
      display: flex;
      align-items: center;
      gap: 0.5em;
      font-size: 1.5em;
      .symbol {
        color: ${(props) =>
      props.theme == "light" ? "#00000075" : "#ffffff78"};
      }
    }
    a {
      color: ${(props) => (props.theme == "light" ? "black" : "white")};
      border: 1px solid;
      border-color: ${(props) =>
      props.theme == "light" ? "#00000075" : "#ffffff78"};
      background-color: ${(props) =>
      props.theme == "light" ? "#817e7e75" : "#8c8a8a78"};
      padding: 1em;
      border-radius: 10px;
    }
    .links {
      display: flex;
      gap: 1em;
      flex-wrap: wrap;
    }
    .price {
      display: flex;
      gap: 16px;
      font-weight: bold;
      font-size: 1.6rem;
      align-items: center;
      span {
        font-size: 1rem;
      }
    }
    .infoSpan {
      font-size: 0.9rem;
      color: ${(props) => (props.theme == "light" ? "#00000075" : "#ffffff78")};
    }
  `;

  const CalculateBackgroundColor = styled.span`
    color: white;
    background-color: ${(props) => (props.number > 0 ? "#16c784" : "#ea3943")};
    padding: 0.5em;
    border-radius: 10px;
  `;

  const Part2 = styled.div`
   border-radius: 15px;
    padding: 1rem;
    background-color: ${(props) =>
      props.theme == "light" ? "#eae7e775" : "#2a292978"};
      display: flex;
      align-items: center;  
  .chart{
    width: 100%;
    height: 100%;
  }
  `


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
  );

  const data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: coin.id,
        data: history,
        borderColor: history[0] - history[23] < 0 ? "green" : "red",
        backgroundColor: history[0] - history[23] < 0 ? "green" : "red"
      }
    ]
  };
  const options = {
    responsive: true,
  };
  return (
    <InfoContainer>
      <InfoGrid>
        {!dataLoading ? (
          <Part theme={theme}>
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
              {coin.exp.slice(0, -1).map((url, index) => (
                <Link target="_blank" key={index} to={url}>
                  {"link " + index}
                </Link>
              ))}
            </div>
          </Part>
        ) : (
          <div>Bilgiler Yükleniyor</div>
        )}
        <Part2 theme={theme}>
          {!chartLoading ? (<Line className="chart"
            data={data} options={options}
          />) : (<div>Grafik Yükleniyor</div>)}
        </Part2>
      </InfoGrid>
    </InfoContainer>
  );
};
InfoPage.propTypes = {
  coin: PropTypes.object,
  theme: PropTypes.string,
  number: PropTypes.number,
}


export default InfoPage;
