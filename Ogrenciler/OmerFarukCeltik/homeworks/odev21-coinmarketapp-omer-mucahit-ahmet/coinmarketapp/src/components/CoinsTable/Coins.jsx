import React from "react";
import { useFetch } from "../../context/FetchContext";
import { Link } from "react-router-dom";
import { CoinsContainer, CustomTable, CustomThead } from "./styled";

const Coins = () => {
  const { datas } = useFetch();
  return (
    <CoinsContainer>
      <CustomTable>
        <CustomThead>
          <th>#</th>
          <th>logo</th>
          <th>Name</th>
          <th>Price</th>
          <th>1h %</th>
          <th>1d %</th>
          <th>1w %</th>
          <th>Market Cap</th>
          <th>Volume 24h</th>
          <th>Total Supply</th>
        </CustomThead>
        <tbody>
          {datas.map((item, i) => (
            <tr>
              {/* <Link key={item.id} to={`/coinpage/${item.id}`}> */}
              <td>{i}</td>
              <td>
                <img className="table-img" src={item.icon} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{item.price.toString().slice(0, 7)}$</td>
              <td>{item.priceChange1d} %</td>
              <td>{item.priceChange1h} %</td>
              <td>{item.priceChange1w} %</td>
              <td>{item.marketCap.toLocaleString().slice(0, 6)}M $</td>
              <td>
                {(item.volume / 1000000).toLocaleString()} M {item.symbol}
              </td>
              <td>
                {item.totalSupply.toLocaleString()} {item.symbol}
              </td>
              {/* </Link> */}
            </tr>
          ))}
        </tbody>
      </CustomTable>
    </CoinsContainer>
  );
};

export default Coins;
