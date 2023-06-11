/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const CoinChart = ({data}) => {

    console.log("CoinChart",data)

    const chartRef = useRef(null);

    useEffect(() => {
      const ctx = chartRef.current.getContext("2d");
  
      const timestamps = data?.prices?.map((price) => price[0]);
      const prices = data?.prices?.map((price) => price[1]);
  
      new Chart(ctx, {
        type: "line",
        data: {
          labels: timestamps,
          datasets: [
            {
              label: "Price",
              data: prices,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
              },
            },
          },
        },
      });
    }, [data]);
  
    return <canvas ref={chartRef} />;
  };


export default CoinChart;