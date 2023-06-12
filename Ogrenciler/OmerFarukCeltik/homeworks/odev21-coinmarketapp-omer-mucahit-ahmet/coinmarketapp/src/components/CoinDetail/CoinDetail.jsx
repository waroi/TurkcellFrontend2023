import { useParams } from "react-router-dom";
import { useFetch } from "../../context/FetchContext";
import NotFound from "../views/404/NotFound";
import { AiOutlineStar, AiOutlineUpload } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import {
  CoinDetailContainer,
  CustomCoins,
  CoinCard,
  CustomBreadCrumb,
  GraphContainer,
} from "./styled";
import Graph from "../Graph/Graph";

const CoinDetail = () => {
  const { datas } = useFetch();
  const { id } = useParams();
  const currentCoin = datas.find((item) => item.id == id);
  if (!currentCoin) {
    return <NotFound />;
  }
  return (
    <>
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
          <div>
            <img src={currentCoin?.icon} alt="" />{" "}
            <h3>{currentCoin?.name.split(" ")[0]}</h3>
            <span>{currentCoin?.name.split(" ")[0].toUpperCase()}</span>
            <a>
              <AiOutlineStar />
            </a>
            <a>
              <AiOutlineUpload />
            </a>
            <button>+Follow</button>
          </div>
          <div>
            <span>#{currentCoin?.rank}</span>
            <span>Coin</span>
          </div>

          <div>
            <span>
              <BiLinkAlt />
              <a href={currentCoin?.twitterUrl}>{currentCoin?.twitterUrl}</a>
              <BsBoxArrowUpRight />
            </span>
            <span>
              Explorers
              <IoIosArrowDown />
            </span>
            <span>
              Community
              <IoIosArrowDown />
            </span>
            <span>Chat</span>
            <span>Source Code</span>
            <span>Whitepaper</span>
          </div>
        </CoinCard>
      </CustomCoins>
      <div className="container p-5">
        <div className="headContent d-flex align-items-center">
          <div>
            <img src={currentCoin?.icon} alt="" />
          </div>
          <div className="h2 ms-4">{currentCoin?.name}</div>
        </div>
        <div className="d-flex align-items-center">
          <div className="me-3">
            <div className="fs-5 my-3">
              Twitter URL:{" "}
              <a href={currentCoin?.twitterUrl}>{currentCoin?.twitterUrl}</a>
            </div>
            <div className="fs-5 my-3">
              Available Supply: {currentCoin?.availableSupply.toLocaleString()}{" "}
              {currentCoin?.symbol}
            </div>
            <div className="fs-5 my-3">
              Total Supply: {currentCoin?.totalSupply.toLocaleString()}{" "}
              {currentCoin?.symbol}
            </div>
          </div>
          <div className="ms-5">
            <div className="fs-5 my-3">
              1 Hour Price Change:{" "}
              <span
                className={
                  Number(currentCoin?.priceChange1h) > 0
                    ? "text-success"
                    : "text-danger"
                }
              >
                {currentCoin?.priceChange1h} %{" "}
              </span>
            </div>
            <div className="fs-5 my-3">
              1 Day Price Change:{" "}
              <span
                className={
                  Number(currentCoin?.priceChange1d) > 0
                    ? "text-success"
                    : "text-danger"
                }
              >
                {currentCoin?.priceChange1d} %{" "}
              </span>
            </div>
            <div className="fs-5 my-3">
              1 Week Price Change:{" "}
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
          </div>
        </div>
        <div className="fs-5 text-secondary">
          Volume: {currentCoin?.volume.toLocaleString().slice(0, 10)} K
        </div>
        <div className="fs-5">
          Price:{" "}
          <span className="text-success">
            {currentCoin?.price.toString().slice(0, 7)} ${" "}
          </span>
        </div>
      </div>
    </CoinDetailContainer>
    <GraphContainer>
            <Graph />
    </GraphContainer>
   </>
  );
};

export default CoinDetail;
