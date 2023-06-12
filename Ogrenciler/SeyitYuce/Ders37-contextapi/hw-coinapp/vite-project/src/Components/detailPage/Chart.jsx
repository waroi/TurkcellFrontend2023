import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

const Chart = ({ chartDatas }) => {
  const chartContainerRef = useRef();
  let chart = null;

  useEffect(() => {
    chart = createChart(chartContainerRef.current);

    // if ( chartDatas?.length > 0) {
    const getDataTime = chartDatas.map((data) => {
      return {
        time: data[0],
        value: data[1],
      };
    });

    console.log(getDataTime);

    const areaSeries = chart.addAreaSeries({
      lineColor: "#ff29fb",
      topColor: "#ff29fb",
      bottomColor: "rgba(195, 99, 242, 0.48)",
    });
    areaSeries.setData(getDataTime);

    chart.timeScale().fitContent();
    // }

    return () => {
      chart.remove();
    };
  }, [chartDatas]);

  //   if (!chartDatas || chartDatas.length === 0) {
  //     return null;
  //   }
  return (
    <div>
      <div
        ref={chartContainerRef}
        style={{ width: "100%", height: "400px" }}
      ></div>
    </div>
  );
};

export default Chart;
