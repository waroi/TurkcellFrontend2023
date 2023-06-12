import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useCustomContext } from "../../context/Context";

const Table = ({ coins }) => {
  const { theme } = useCustomContext();
  const navigate = useNavigate();
  function formatNumber(number) {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(3) + " B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(3) + " M";
    } else {
      return number.toFixed(3);
    }
  }

  return (
    coins.length > 0 && (
      <table
        className={`table  mt-5 table-hover table-striped ${
          theme === "dark" ? "table-dark text-white" : "table-white "
        }`}
      >
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Volume</th>
            <th>Last 7 Day</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            return (
              <tr
                style={{ cursor: "pointer" }}
                key={coin.id}
                onClick={() => navigate(`/detail/${coin.id}`)}
              >
                <td className="d-flex ">
                  <img
                    src={
                      coin.icon
                        ? coin.icon
                        : "https://upload.wikimedia.org/wikipedia/commons/9/97/Cryptocurrency_Gold.png?20180408003024"
                    }
                    alt={coin.symbol}
                    className="img-fluid me-2"
                    width="30"
                  />
                  <h5>{coin.name}</h5>
                </td>
                <td>${formatNumber(coin.price)}</td>
                <td>${formatNumber(coin.marketCap)}</td>
                <td>${formatNumber(coin.volume)}</td>
                <td>{coin.priceChange1w} % </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
};

export default Table;

Table.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      marketCap: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
      priceChange1w: PropTypes.number.isRequired,
    })
  ).isRequired,
};
