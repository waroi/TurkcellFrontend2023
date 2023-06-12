import "./DetailPageStyle.css";
import Help from "../../helpers/Help";
import Chart from "./Chart";
import { useEffect, useState } from "react";
import { getChartData } from "../../service/api";
const Detail = ({ foundCoin }) => {
  const [chartDatas, setChartDatas] = useState([]);

  useEffect(() => {
    getChartData(foundCoin.id).then((data) => setChartDatas(data.prices));
  }, []);

  return (
    //Her bir row component olabilir sonra bakarız
    <div className="container mt-5">
      <div className="row mt-4 ">
        <div className="col-lg-8 mt-4">
          <div className="d-flex coin-header">
            <div className="coin-logos">
              <img src={`${foundCoin.icon}`} />
              <h1>{foundCoin.name}</h1>
              <span>{foundCoin.symbol}</span>
            </div>
            <div className="coin-main-price">
              <h2>${Help(foundCoin.price)}</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4">
          <div className="coin-links">
            <h2>#{foundCoin.rank}</h2>
            <div>
              <a href={`${foundCoin.twitterUrl}`} target="_blank">
                <i className="bi bi-twitter fs-3"></i>
              </a>
              <a href={`${foundCoin.websiteUrl}`} target="_blank">
                <i className="bi bi-globe fs-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row  ">
        <div className="col-lg-3 mt-4">
          <div className="market-cap">
            <h6>Market Cap</h6>
            <h4>${Help(foundCoin.marketCap)}</h4>
          </div>
        </div>
        <div className="col-lg-3 mt-4">
          <div className="volume">
            <h6>Volume</h6>
            <h4>${Help(foundCoin.volume)}</h4>
          </div>
        </div>
        <div className="col-lg-3 mt-4">
          <div className="available">
            <h6>Available Supply</h6>
            <h4 className="d-flex align-items-baseline justify-content-center">
              {Help(foundCoin.availableSupply)}
              <span className="">{foundCoin.symbol}</span>
            </h4>
          </div>
        </div>
        <div className="col-lg-3 mt-4">
          <div className="total">
            <h6>Total Supply</h6>
            <h4 className="d-flex align-items-baseline justify-content-center">
              {Help(foundCoin.totalSupply)}
              <span className="">{foundCoin.symbol}</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-3 mt-4">
          <div className="one-hour">
            <h6>1h%</h6>
            <h3>{foundCoin.priceChange1h}</h3>
          </div>
        </div>
        <div className="col-lg-3 mt-4">
          <div className="one-day">
            <h6>1d%</h6>
            <h3>{foundCoin.priceChange1d}</h3>
          </div>
        </div>
        <div className="col-lg-3 mt-4">
          <div className="one-week">
            <h6>1w%</h6>
            <h3>{foundCoin.priceChange1w}</h3>
          </div>
        </div>
        <div className="col-lg-3 mt-4">
          <div className="control">
            <h6>Transaction Control</h6>
            <select className="form-select control-select ">
              {foundCoin.exp.map((item, index) => {
                return (
                  <option key={index} value={`${item}`}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      {chartDatas.length > 0 && (
        <Chart chartDatas={chartDatas} setChartDatas={setChartDatas} />
      )}
    </div>
  );
};

export default Detail;
