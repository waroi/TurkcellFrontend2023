import React, { useState } from "react";
import { useFetch } from "../../context/FetchContext";
import { Link } from "react-router-dom";
import { CoinsContainer, CustomIcon, CustomTable, CustomThead, CustomTr, StyledTd } from "./styled";
import { AiOutlineStar } from "react-icons/ai";

const Coins = () => {

  const { datas } = useFetch();
  return (
    <CoinsContainer>
      <CustomTable>
        <CustomThead>
          <th></th>
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
            <CustomTr>
              {/* <Link key={item.id} to={`/coinpage/${item.id}`}> */}
              <td><AiOutlineStar /></td>
              <td>{item.rank}</td>
              <td>
                <CustomIcon className="table-img" src={item.icon} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{(item.price).toFixed(2)}$</td>
              <StyledTd value={item.priceChange1d}>{item.priceChange1d} %</StyledTd>
              <StyledTd value={item.priceChange1h}>{item.priceChange1h} %</StyledTd>
              <StyledTd value={item.priceChange1w}>{item.priceChange1w} %</StyledTd>
              <td>{item.marketCap.toLocaleString().slice(0, 6)}M $</td>
              <td>
                {(item.volume / 1000000).toLocaleString()} M {item.symbol}
              </td>
              <td>
                {item.totalSupply.toLocaleString()} {item.symbol}
              </td>
              {/* </Link> */}
            </CustomTr>
          ))}
        </tbody>
      </CustomTable>
    </CoinsContainer>
  );
};

export default Coins;
