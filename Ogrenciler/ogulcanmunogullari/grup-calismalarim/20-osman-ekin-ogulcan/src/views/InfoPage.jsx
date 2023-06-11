import { Link, useParams } from "react-router-dom";
import { useStore } from "../context/store";
import styled from "styled-components";
import { useThemeStore } from "../context/themeStore";
import { useEffect, useState } from "react";
import Fetch from "../models/Fetch";
import { useNavigate } from "react-router-dom";

const InfoPage = () => {
  const { theme } = useThemeStore();
  const { id } = useParams();
  const { coin, history, search } = useStore();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       if (coin.id != id || coin == "404") {
  //         navigate(`/`);
  //       }
  //     }, 200);
  //   }, [coin, search]);

  console.log(history);
  console.log(coin);

  if (coin.id) {
    const regex = "/([^/]+).";
    const match = coin.exp[0].match(regex);
    console.log(match);
  }

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

  //   const config = {
  //     type: "line",
  //     data: data,
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         legend: {
  //           position: "top",
  //         },
  //         title: {
  //           display: true,
  //           text: "Chart.js Line Chart",
  //         },
  //       },
  //     },
  //   };

  //   const test = [
  //     [1685807280, 27213.4883, 1, 14.3078],
  //     [1685810880, 27290.4228, 1, 14.3473],
  //     [1685814480, 27151.0487, 1, 14.3555],
  //     [1685818080, 27172.4792, 1, 14.3457],
  //     [1685821680, 27160.2895, 1, 14.3637],
  //     [1685825280, 27093.474, 1, 14.3475],
  //     [1685828880, 26985.5411, 1, 14.285],
  //   ];
  //   const labels = ["", "", "", "", "", "", ""];
  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         data: test,
  //         borderColor:
  //           test.first - test.last > 0
  //             ? Utils.CHART_COLORS.red
  //             : Utils.CHART_COLORS.green,
  //       },
  //     ],
  //   };

  return (
    <InfoContainer>
      <InfoGrid>
        {coin.id ? (
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
              {coin.exp.map((url, index) => (
                <Link target="_blank" key={index} to={url}>
                  {url}
                </Link>
              ))}
            </div>
          </Part>
        ) : (
          <div>Loading</div>
        )}
        <Part theme={theme}></Part>
      </InfoGrid>
    </InfoContainer>
  );
};

export default InfoPage;
