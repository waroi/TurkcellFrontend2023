import PropTypes from "prop-types";

const DetailPrice = ({ coin }) => {
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
    coin && (
      <div className="card py-5 px-3">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="d-flex align-items-center">
                <img src={coin.icon} alt={coin.name} className="me-3" />
                <div>
                  <h5 className="card-title me-3">Price</h5>
                  <p className="card-text">{"$ " + formatNumber(coin.price)}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="card-title">Price Change</h6>
                  <span
                    className={`badge ${
                      coin.priceChange1h < 0 ? "bg-danger" : "bg-success"
                    } me-2`}
                  >
                    1h: {coin.priceChange1h}
                  </span>
                  <span
                    className={`badge ${
                      coin.priceChange1d < 0 ? "bg-danger" : "bg-success"
                    } me-2`}
                  >
                    24h: {coin.priceChange1d}
                  </span>
                  <span
                    className={`badge ${
                      coin.priceChange1w < 0 ? "bg-danger" : "bg-success"
                    } me-2`}
                  >
                    7d: {coin.priceChange1w}
                  </span>
                </div>

                <div>
                  <h6 className="card-title">Market Cap</h6>
                  <p className="card-text">
                    {"$ " + formatNumber(coin.marketCap)}
                  </p>
                </div>
                <div>
                  <h6 className="card-title">Volume</h6>
                  <p className="card-text">
                    {"$ " + formatNumber(coin.volume)}
                  </p>
                </div>
                <div>
                  <h6 className="card-title">Circulating Supply</h6>
                  <p className="card-text">
                    {formatNumber(coin.availableSupply) + " " + coin.symbol}
                  </p>
                </div>
                <div>
                  <h6 className="card-title">Total Supply</h6>
                  <p className="card-text">
                    {formatNumber(coin.totalSupply) + " " + coin.symbol}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

DetailPrice.propTypes = {
  coin: PropTypes.object.isRequired,
};

export default DetailPrice;
