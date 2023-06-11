import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const CoinsListItem = ({ coin }) => {
  return (
    <Link to={`/detail/${coin.id}`} className="text-decoration-none text-black">
      <li className="d-flex  align-items-center border coinList row">
        <img src={`${coin.icon}`} alt="" className="coin-img col-1" />
        <span className="coin-symbol col-2">{coin.symbol}</span>
        <div className="coin-name fw-bold col-2">{coin.name}</div>
        <div className="coin-price col-1">
          ${Math.round(coin.price * 1000) / 1000}
        </div>
        <div className="coin-changes col-2 d-flex">
          <div className="coin-1h col-4"> 1h:{coin.priceChange1h}</div>
          <div className="coin-1d col-4">1d:{coin.priceChange1d}</div>
          <div className="coin-1w col-4">1w:{coin.priceChange1w}</div>
        </div>
        <div className="coin-marketCap col-2">
          ${Math.round(coin.marketCap * 1000) / 1000}
        </div>
        {/*  <div className='coin-volume'>${Math.round(coin.volume * 1000) / 1000}</div>
                <div className='coin-availableSupply'>${Math.round(coin.availableSupply * 100) / 100000}</div> */}
      </li>
    </Link>
  );
};

export default CoinsListItem;
