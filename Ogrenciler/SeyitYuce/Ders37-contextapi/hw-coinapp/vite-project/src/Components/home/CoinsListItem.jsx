import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const CoinsListItem = ({ coin }) => {
  return (

    <Link to={`/detail/${coin.id}`} className="text-decoration-none text-black">
      {/* <tr className="d-flex  align-items-center border coinList row"> */}
      <td><img src={`${coin.icon}`} alt="" className="coin-img " /></td>
      <td><span className="coin-symbol ">{coin.symbol}</span></td>
      <td><div className="coin-name fw-bold ">{coin.name}</div></td>
      <td>
        <div className="coin-price ">
          ${Math.round(coin.price * 1000) / 1000}
        </div>
      </td>
      <td>
        <div className="coin-changes ">
          <div className="coin-1h col-4"> 1h:{coin.priceChange1h}</div>
          <div className="coin-1d col-4">1d:{coin.priceChange1d}</div>
          <div className="coin-1w col-4">1w:{coin.priceChange1w}</div>
        </div>
      </td>
      <td>
        <div className="coin-marketCap ">
          ${Math.round(coin.marketCap * 1000) / 1000}
        </div>
      </td>
      {/*  <div className='coin-volume'>${Math.round(coin.volume * 1000) / 1000}</div>
                <div className='coin-availableSupply'>${Math.round(coin.availableSupply * 100) / 100000}</div> */}

    </Link >

  );
};

export default CoinsListItem;
