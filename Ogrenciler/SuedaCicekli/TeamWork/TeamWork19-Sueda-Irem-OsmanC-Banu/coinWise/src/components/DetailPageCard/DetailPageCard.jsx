import { useParams } from "react-router-dom";
import { DetailCard } from "./DetailPageCardStyle";
const DetailPageCard = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const params = useParams();
  const curData = data.find((item) => item.name === params.name);

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-8">
            <div
              style={{ marginTop: "3em" }}
              className="d-flex align-items-center gap-4"
            >
              <img src={curData.icon} alt="icon" />
              <h2 className="fw-bold">{curData.name}</h2>
              <h2 className="text-secondary">{curData.symbol} </h2>
            </div>
            <DetailCard className="d-flex gap-3 align-items-center">
              <h1>
                $
                {curData.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h1>
              <h3 style={{ color: curData.priceChange1hColor }}>
                {curData.priceChange1h}
              </h3>
            </DetailCard>
            <div className="d-flex gap-5">
              <DetailCard>
                <h5>Circulating Supply</h5>
                <h5>
                  $
                  {Math.floor(curData.circulatingSupply).toLocaleString(
                    "en-US"
                  )}
                </h5>
              </DetailCard>
              <DetailCard>
                <h5>Market Cap</h5>
                <h5>
                  ${Math.floor(curData.marketCap).toLocaleString("en-US")}
                </h5>
              </DetailCard>
              <DetailCard>
                <h5>Price BTC</h5>
                <h5>
                  {curData.priceBtc
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  BTC
                </h5>
              </DetailCard>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageCard;
