import PropTypes from "prop-types";

const DetailInfo = ({ coin }) => {
  return (
    coin && (
      <div>
        <div className="card py-4 px-3">
          <div className="card-body">
            <div>
              <h5>Basic Info</h5>
              <span className="badge bg-primary me-3">Rank: {coin.rank} </span>
              <span className="badge bg-info">Symbol: {coin.symbol} </span>
              <h5 className="mt-3">Website</h5>
              <a
                href={coin.websiteUrl}
                className="card-text text-decoration-none text-muted mt-2"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link me-2"></i>
                {coin.websiteUrl}
              </a>

              <h5 className="mt-3">Twitter Url</h5>
              {coin.twitterUrl ? (
                <a
                  href={coin.twitterUrl}
                  className="card-text text-decoration-none text-muted mt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link me-2"></i>
                  {coin.twitterUrl.split("://")[1]}
                </a>
              ) : (
                "No Twitter Url"
              )}
            </div>
            <div className="mt-5">
              <h5>Explorers</h5>
              {coin.exp.slice(0, 3).map((exp, index) => (
                <a
                  key={index}
                  href={exp}
                  className="card-text text-decoration-none text-muted mt-2 d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link me-2"></i>
                  {exp.split("://")[1]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

DetailInfo.propTypes = {
  coin: PropTypes.object,
};

export default DetailInfo;
