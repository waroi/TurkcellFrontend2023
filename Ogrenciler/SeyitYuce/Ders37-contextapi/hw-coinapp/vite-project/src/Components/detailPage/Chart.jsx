import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

const Chart = ({ chartDatas }) => {
  const chartContainerRef = useRef();
  let chart = null;

  useEffect(() => {
    chart = createChart(chartContainerRef.current, {
      layout: {
        background: {
          color: "transparent",
        }
      }
    });

    const getDataTime = chartDatas.map((data) => {
      return {
        time: data[0],
        value: data[1],
      };
    });

    const areaSeries = chart.addAreaSeries({
      lineColor: "#ff29fb",
      topColor: "#ff29fb",
      bottomColor: "rgba(195, 99, 242, 0.48)",


    });
    areaSeries.setData(getDataTime);
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [chartDatas]);

 
  return (
    <div className="chartContainer">
      <h5 className="ms-2">Graphs</h5>
      <div
        ref={chartContainerRef}
        className="chart"
      ></div>
    </div>
  );
};

export default Chart;
