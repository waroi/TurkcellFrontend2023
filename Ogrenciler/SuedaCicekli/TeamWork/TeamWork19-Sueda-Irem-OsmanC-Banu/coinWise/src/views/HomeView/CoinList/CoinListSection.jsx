import { useData } from "../../../context/FetchContext";
import StarIcon from "../../../assets/whiteStar.png";
import GrayStar from "../../../assets/grayStar.png";
import twitter from "../../../assets/SocialIcons/twitter.png";
import website from "../../../assets/SocialIcons/website.png";
import { Table } from "./CoinListStyle";
import { Link } from "react-router-dom";

const CoinListSection = () => {
  const data = useData();

  return (
    <div className="container my-5">
      <Table className="table">
        <thead className="">
          <tr className="">
            <th scope="col">
              <button className="btn btn-warning">
                <img src={StarIcon} alt="" />
              </button>
            </th>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">1h%</th>
            <th scope="col">24h%</th>
            <th scope="col">7d%</th>
            <th scope="col">Market Cap</th>
            <th scope="col">PriceBTC</th>
            <th scope="col">Available Supply</th>
            <th scope="col">Links</th>
          </tr>
        </thead>
        <tbody >
          {data.data.slice(0, 20).map((item) => (
            <tr key={item.rank}   >
              <th scope="row" >
                <img src={GrayStar} className="ms-3" alt="star" />
              </th>
              <td>{item.rank}</td>

              <td>
                <Link
                  to={"/coins/" + item.name}
                  className="text-decoration-none text-dark"
                >
                  <img
                    src={item.icon}
                    alt=""
                    width="21px"
                    height="21px"
                    className="me-2"
                  />
                  {item.name}
                  <span className="ms-2">{item.symbol}</span>
                </Link>
              </td>

              <td>
                ${item.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td style={{ color: item.priceChange1hColor }}>
                {item.priceChange1h}%
              </td>
              <td style={{ color: item.priceChange1dColor }}>
                {item.priceChange1d}%
              </td>
              <td style={{ color: item.priceChange1wColor }}>
                {item.priceChange1w}%
              </td>
              <td>${Math.floor(item.marketCap).toLocaleString("en-US")}</td>
              <td>
                {item.priceBtc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                BTC
              </td>
              <td>
                ${Math.floor(item.availableSupply).toLocaleString("en-US")}
              </td>
              <td>
                <div className="d-flex">
                  <a href={item.websiteUrl} className="me-2" target="_blank" rel="noreferrer" >
                    <img src={website} alt="website" />
                  </a>
                  <a href={item.twitterUrl} target="_blank" rel="noreferrer">
                    <img src={twitter} alt="twitter" />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CoinListSection;
