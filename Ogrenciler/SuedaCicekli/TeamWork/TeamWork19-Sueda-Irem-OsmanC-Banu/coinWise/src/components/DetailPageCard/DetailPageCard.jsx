import { useParams } from "react-router-dom";
import { DetailCard, DetailCardVh } from "./DetailPageCardStyle";
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const DetailPageCard = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const params = useParams();
  const curData = data.find((item) => item.name === params.name);


  const veri = {
    labels: ['Circulating Supply', 'Reserved Supply'],
    datasets: [{
      label: 'Supply',
      data: [curData.circulatingSupply, curData.availableSupply],
      backgroundColor: ['#C389F7', '#C0FAA0'],
      hoverBackgroundColor: ['#c489f79e', '#bffaa094'],
      borderColor: ['#252525', '#252525'],
      borderWidth: 1,
    }],
  };

  return (
    <div>
      <div className="container">
        <DetailCardVh className="row mt-4">
          <div className="col-md-8 col-sm-12">
            <div
              style={{ marginTop: "3em" }}
              className="d-flex align-items-center gap-4 bg-white p-3 rounded-4 w-50 cursor-pointer"
            >
              <img src={curData.icon} alt="icon" />
              <h2 className="fw-bold ">{curData.name}</h2>
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
          <div className="col-md-4 col-sm-12 d-flex align-items-center">
            <Doughnut data={veri} />
          </div>
        </DetailCardVh>
      </div>
    </div>
  );
};

export default DetailPageCard;
