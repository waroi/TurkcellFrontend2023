import { useParams } from "react-router-dom";
import { useFetch } from "../../context/FetchContext";
import NotFound from "../views/404/NotFound";
import {
  AiOutlineStar,
  AiOutlineUpload,
  AiOutlineSearch,
} from "react-icons/ai";
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
} from "./styled";

const CoinDetail = () => {
  const { datas } = useFetch();
  const { id } = useParams();
  const currentCoin = datas.find((item) => item.id == id);
  if (!currentCoin) {
    return <NotFound />;
  }
  return (
    <CoinDetailContainer>
      <CustomCoins>
        <CustomBreadCrumb>
          <span>
            <a href="">Cryptocurrencies</a>
          </span>
          <span>
            <a href="">Coins</a>
          </span>
          <span>{currentCoin?.name.split(" ")[0]}</span>
        </CustomBreadCrumb>
        <CoinCard>
          <CoinCardContainer>
            <CurrentCoinDetail>
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
              <span className="coin-rank">Rank #{currentCoin?.rank}</span>
              <span>Coin</span>
            </CustomRank>

            <CurrentCoinLLink>
              <span>
                <BiLinkAlt />
                <a href={currentCoin?.twitterUrl}>{currentCoin?.twitterUrl}</a>
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
                  {currentCoin?.name.split(" ")[0]} Price ({currentCoin?.symbol}
                  )
                </p>
                <div>
                  <h2>${currentCoin?.price.toString().slice(0, 7)} </h2>
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
                <h4>
                  Available Supply:
                  {currentCoin?.availableSupply.toLocaleString()}{" "}
                  {currentCoin?.symbol}
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
              </div>
              <div className="fs-5 text-secondary">
                Volume: {currentCoin?.volume.toLocaleString().slice(0, 10)} K
              </div>
              <div className="fs-5 my-3">
                Total Supply: {currentCoin?.totalSupply.toLocaleString()}{" "}
                {currentCoin?.symbol}
              </div>
              <div className="fs-5 my-3">
                Total Supply: {currentCoin?.totalSupply.toLocaleString()}{" "}
                {currentCoin?.symbol}
              </div>
            </CustomPriceBottom>
          </CustomPrice>
        </CoinCard>
      </CustomCoins>
    </CoinDetailContainer>
  );
};

export default CoinDetail;
