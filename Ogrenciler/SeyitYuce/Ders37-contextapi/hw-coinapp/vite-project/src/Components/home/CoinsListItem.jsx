import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Help from "../../helpers/Help"

const CoinsListItem = ({ coin }) => {
 
  return (
    <tr >
      <td><img src={`${coin.icon}`} alt="" className="coin-img " /></td>
      <td><span className="coin-symbol ">{coin.symbol}</span></td>
      <td><div className="coin-name fw-bold ">{coin.name}</div></td>
      <td>
        <div className="coin-price ">
          ${Help(coin.price)}
        </div>
      </td>
      <td>
        <div className="coin-1h col-4"> {coin.priceChange1h}</div>
      </td>
      <td>
        <div className="coin-1d col-4">{coin.priceChange1d}</div>
      </td>
      <td>
        <div className="coin-1w col-4">{coin.priceChange1w}</div>
      </td>
      <td>
        <div className="coin-marketCap ">
          ${Help(coin.marketCap)}
        </div>
      </td>
      <td className="info">
        <Link to={`/detail/${coin.id}`} className="text-decoration-none ">
          <i className="bi bi-info-circle-fill"></i>
        </Link >
      </td>
    </tr>
  );
};

export default CoinsListItem;
