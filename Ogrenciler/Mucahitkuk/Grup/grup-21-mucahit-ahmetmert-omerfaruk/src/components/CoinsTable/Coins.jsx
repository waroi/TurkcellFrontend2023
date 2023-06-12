import { useFetch } from "../../context/FetchContext";
import { Link } from "react-router-dom";
import {
  CoinsContainer,
  CustomIcon,
  CustomTable,
  CustomThead,
  CustomTr,
  StyledTd,
  CoinsMain,
  ReadMore,
  CoinsSection,
  CoinsSectionContainer,
  CustomSectionDiv,
} from "./styled";
import { AiOutlineStar } from "react-icons/ai";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

const Coins = () => {
  const { datas } = useFetch();
  const {theme} = useTheme();
  const [sortOrder, setSortOrder] = useState("asc"); 

  const handleMarketCapClick = () => {
    if (sortOrder === "asc") {
      datas.sort((a, b) => b.marketCap - a.marketCap); 
      setSortOrder("desc");
    } else {
      datas.sort((a, b) => a.marketCap - b.marketCap);
      setSortOrder("asc");
    }
  };

  const handleNameClick = () => {
    if (sortOrder === "asc") {
      datas.sort((a, b) => a.name.localeCompare(b.name));
      setSortOrder("desc");
    } else {
      datas.sort((a, b) => b.name.localeCompare(a.name)); 
      setSortOrder("asc");
    }
  };

  const handlePriceClick = () => {
    if (sortOrder === "asc") {
      datas.sort((a, b) => a.price - b.price); // Sort in ascending order
      setSortOrder("desc");
    } else {
      datas.sort((a, b) => b.price - a.price); // Sort in descending order
      setSortOrder("asc");
    }
  };

  return (
    <CoinsMain  style={theme == "light" ?  {backgroundColor:"white"} :  {backgroundColor: "#1a1a1d"}} >
      <CoinsContainer >
        <CustomTable style={theme == "light" ?  {color:"black"} :  {color: "white"}}>
          <CustomThead style={theme == "light" ?  {backgroundColor:"white"} :  {backgroundColor: "#1a1a1d"}}>
            <tr>
            <th></th>
            <th>#</th>
            <th>Logo</th>
            <th onClick={handleNameClick}>Name</th>
            <th onClick={handlePriceClick}>Price</th>
            <th>1h %</th>
            <th>1d %</th>
            <th>1w %</th>
            <th onClick={handleMarketCapClick}>Market Cap</th>
            <th>Volume 24h</th>
            <th>Total Supply</th>
            </tr>
          </CustomThead>
          <tbody>
            {datas.map((item, i) => (
              <CustomTr key={i}>
                <td>
                  <AiOutlineStar />
                </td>
                <td>{item.rank}</td>
                <td>
                  <CustomIcon className="table-img" src={item.icon} alt="" />
                </td>
                <td>
                <Link  style={theme == "light" ?  {color:"black"} :  {color: "white"}} to={`/${item.id}`}>
                  {item.name}
                </Link>
                </td>
                <td>{item.price.toFixed(2)}$</td>
                <StyledTd value={item.priceChange1d}>
                  {item.priceChange1d} %
                </StyledTd>
                <StyledTd value={item.priceChange1h}>
                  {item.priceChange1h} %
                </StyledTd>
                <StyledTd value={item.priceChange1w}>
                  {item.priceChange1w} %
                </StyledTd>
                <td>{item.marketCap.toLocaleString().slice(0, 6)}M $</td>
                <td>
                  {(item.volume / 1000000).toLocaleString()} M {item.symbol}
                </td>
                <td>
                  {item.totalSupply.toLocaleString()} {item.symbol}
                </td>
              </CustomTr>
            ))}
          </tbody>
        </CustomTable>
        <ReadMore>
          Find out how we work by clicking here.<span>Read More</span>
        </ReadMore>
      </CoinsContainer>
      <CoinsSection style={theme == "light" ?  {backgroundColor:"white"} :  {backgroundColor: "#1a1a1d"}}>
        <CoinsSectionContainer>
          <CustomSectionDiv>
            <h2>
              Be the first to know about <span>crypto news every day</span>
            </h2>
            <p>
              Get crypto analysis, news and updates right to your inbox! Sign up
              here so you dont miss a single newsletter.
            </p>
            <button type="submit">Subscribe now</button>
          </CustomSectionDiv>
          <img src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_dark.svg?_=7934c0e"></img>
        </CoinsSectionContainer>
      </CoinsSection>
    </CoinsMain>
  );
};

export default Coins;
