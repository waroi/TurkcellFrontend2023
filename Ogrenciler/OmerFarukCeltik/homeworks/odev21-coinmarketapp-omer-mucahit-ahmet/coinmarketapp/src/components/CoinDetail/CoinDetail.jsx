import { useParams } from "react-router-dom";
import { useFetch } from "../../context/FetchContext";
import NotFound from "../views/404/NotFound";
import {
  AiOutlineStar,
  AiOutlineUpload,
  AiOutlineSearch,
} from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { BiLinkAlt } from "react-icons/bi";
import {
  BsBoxArrowUpRight,
  BsFillPersonFill,
  BsFillChatFill,
  BsCodeSlash,
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { GrDocument } from "react-icons/gr";
import {
  CoinDetailContainer,
  CustomCoins,
  CoinCard,
  CustomBreadCrumb,
  CoinCardContainer,
  CustomPrice,
  CustomRank,
  CurrentCoinDetail,
  CurrentCoinLLink,
  CurrentCoinPos,
  CustomPriceTop,
  CustomCoinValue,
  PriceButton,
  CustomPriceBottom,
  ContainerStyles,
} from "./styled";
import { useTheme } from "../../context/ThemeContext";
import Graph from "../Graph/Graph";

const CoinDetail = () => {
  const { datas } = useFetch();
  const { id } = useParams();
  const { theme } = useTheme();
  const currentCoin = datas.find((item) => item.id == id);
  if (!currentCoin) {
    return <NotFound />;
  }
  return (
    <>
      <CoinDetailContainer style={{ backgroundColor: theme.bg }}>
        <CustomCoins>
          <CustomBreadCrumb>
            <span >
              <a  href="">Cryptocurrencies</a>
            </span>
            <span>
              <a href="">Coins</a>
            </span>
            <span style={theme == "light" ?  {color:"black"} :  {color: "white"}}>{currentCoin?.name.split(" ")[0]}</span>
          </CustomBreadCrumb>
          <CoinCard style={theme == "light" ?  {color:"black"} :  {color: "white"}}>
            <CoinCardContainer style={theme == "light" ?  {color:"black"} :  {color: "white"}}>
              <CurrentCoinDetail style={theme == "light" ?  {color:"black"} :  {color: "white"}}>
                <img src={currentCoin?.icon} alt="" />{" "}
                <h3>{currentCoin?.name.split(" ")[0]}</h3>
                <span>{currentCoin?.symbol}</span>
                <a>
                  <AiOutlineStar />
                </a>
                <a>
                  <AiOutlineUpload />
                </a>
                <button>+Follow</button>
              </CurrentCoinDetail>
              <CustomRank>
                <span  className="coin-rank">Rank #{currentCoin?.rank}</span>
                <span>Coin</span>
              </CustomRank>

              <CurrentCoinLLink>
                <span>
                  <BiLinkAlt />
                  <a href={currentCoin?.twitterUrl}>
                    {currentCoin?.twitterUrl}
                  </a>
                  <BsBoxArrowUpRight />
                </span>
                <span>
                  <AiOutlineSearch />
                  Explorers
                  <IoIosArrowDown />
                </span>
                <span>
                  <BsFillPersonFill />
                  Community
                  <IoIosArrowDown />
                </span>
                <span>
                  <BsFillChatFill />
                  Chat <IoIosArrowDown />
                </span>
                <span>
                  <BsCodeSlash />
                  Source Code
                  <BsBoxArrowUpRight />
                </span>
                <span>
                  <GrDocument />
                  Whitepaper
                  <BsBoxArrowUpRight />
                </span>
              </CurrentCoinLLink>
              <p>Tags:</p>
              <CurrentCoinPos>
                <span>PoS</span>
                <span>PoW</span>
                <span>Stakings</span>
                <span>SHA-256</span>
                <button type="">View all</button>
              </CurrentCoinPos>
            </CoinCardContainer>
            <CustomPrice>
              <CustomPriceTop>
                <CustomCoinValue>
                  <p>
                    {currentCoin?.name.split(" ")[0]} Price (
                    {currentCoin?.symbol})
                  </p>
                  <div>
                    <h2 style={theme == "light" ?  {color:"black"} :  {color: "white"}}>${currentCoin?.price.toString().slice(0, 7)} </h2>
                    <span
                      className={
                        Number(currentCoin?.priceChange1h) > 0
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {currentCoin.priceChange1h} %
                    </span>
                  </div>
                  <h4 style={theme == "light" ?  {color:"black"} :  {color: "white"}}>
                    Available Supply:
                    <span style={theme == "light" ?  {color:"black"} :  {color: "white"}}>
                      {" "}
                      {currentCoin?.availableSupply.toLocaleString()}{" "}
                      {currentCoin?.symbol}
                    </span>
                  </h4>
                </CustomCoinValue>
                <PriceButton>
                  <button type="">Buy</button>
                  <button type="">Exchange</button>
                  <button type="">Gaming</button>
                  <button type="">Earn crypto</button>
                </PriceButton>
              </CustomPriceTop>
              <CustomPriceBottom>
                <div>
                  <p>
                    <span>Hourly:</span>
                    <span>Daily:</span>
                    <span>Weekly:</span>
                  </p>
                  <p>
                    <span
                      className={
                        Number(currentCoin?.priceChange1h) > 0
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {currentCoin?.priceChange1h} %{" "}
                    </span>
                    <span
                      className={
                        Number(currentCoin?.priceChange1d) > 0
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {currentCoin?.priceChange1d} %{" "}
                    </span>
                    <span
                      className={
                        Number(currentCoin?.priceChange1w) > 0
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {currentCoin?.priceChange1w} %{" "}
                    </span>
                  </p>
                  <p>Market Cap: ${currentCoin?.marketCap.toFixed(2)}</p>
                </div>
                <div className="fs-5 text-secondary">
                  Volume: {currentCoin?.volume.toLocaleString().slice(0, 10)};
                  <p>
                    Dex Vol
                    <CgDanger />: <a href="">24h</a>
                    <span>--</span>
                  </p>
                  <p>
                    Cex Vol
                    <CgDanger />: <a href="">24h</a>
                    <span>--</span>
                  </p>
                </div>
                <div>
                  Total Supply: {currentCoin?.totalSupply.toLocaleString()}{" "}
                  {currentCoin?.symbol}
                  <ContainerStyles>
                    <div>
                      <span></span>
                    </div>
                  </ContainerStyles>
                </div>
              </CustomPriceBottom>
            </CustomPrice>
          </CoinCard>
        </CustomCoins>
      </CoinDetailContainer>
      <div style={{marginBottom: "100px"}}>
        <Graph item={id} />
      </div>
    </>
  );
};

export default CoinDetail;
