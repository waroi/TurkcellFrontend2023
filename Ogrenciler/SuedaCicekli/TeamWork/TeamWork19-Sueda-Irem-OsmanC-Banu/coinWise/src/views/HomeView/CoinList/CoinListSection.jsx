import { useData } from "../../../context/FetchContext";
import StarIcon from "../../../assets/Icon.png";
import GrayStar from "../../../assets/starIcon.png";
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
            <th scope="col">Circuating Supply</th>
            <th scope="col">Links</th>
          </tr>
        </thead>
        <tbody>
          {data.data.slice(0, 20).map((item) => (
            <tr key={item.rank}>

              <th scope="row">
                <img src={GrayStar} alt="" />
              </th>
              <td>{item.rank}</td>
              <Link to={"/coins/" + item.name} className="text-decoration-none" > <td>
                <img
                  src={item.icon}
                  alt=""
                  width="21px"
                  height="21px"
                  className="me-2"
                />
                {item.name}
                <span className="ms-2">{item.symbol}</span>
              </td>
              </Link>
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
                  <a href="#" className="me-2">
                    <img src={website} alt="" />
                  </a>
                  <a href="#">
                    <img src={twitter} alt="" />
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
