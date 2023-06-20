/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartCreator = ({ currencyName }) => {
  const { id } = useParams();

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
      )
        .then((response) => response.json())
        .then((data) => {
          if (!data.prices || data.prices.length === 0) {
            return;
          }
          const formattedData = data.prices.map((item) => ({
            date: new Date(item[0]).toLocaleString("tr-TR", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }),
            price: item[1].toFixed(1),
          }));
          setChartData(formattedData);
        })
        .catch((error) => {});
    };

    fetchData();
  }, [id]);

  const minPrice = chartData.reduce(
    (min, current) => (current.price < min ? current.price : min),
    Infinity
  );

  return (
    <div>
      <h3>{currencyName}</h3>
      <LineChart width={1200} height={500} data={chartData} className="mx-auto">
        <CartesianGrid
          stroke="#000000"
          strokeWidth={1}
          strokeDasharray="1 1"
          vertical={false}
        />
        <XAxis dataKey="date" angle={-45} tickMargin={30} height={100} />
        <YAxis type="number" domain={[minPrice, "dataMax"]} width={100} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke={
            chartData.length > 0
              ? chartData[0].price < chartData[chartData.length - 1].price
                ? "green"
                : "red"
              : "blue"
          }
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default ChartCreator;
