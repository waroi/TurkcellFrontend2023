import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

const ChartComponent = ({ coin }) => {
  return (
    coin && (
      <Line
        className="py-4"
        data={{
          labels: ["1h", "1d", "1w"],
          datasets: [
            {
              label: "Price Change",
              data: [
                coin.priceChange1h,
                coin.priceChange1d,
                coin.priceChange1w,
              ],
              fill: false,
              borderColor: "rgba(75,192,192,1)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              type: "category",
              display: true,
            },
            y: {
              display: true,
              beginAtZero: true,
            },
          },
        }}
      />
    )
  );
};

export default ChartComponent;

ChartComponent.propTypes = {
  coin: PropTypes.object,
};
