import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";


const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [chartID, setChartID] = useState();
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      fetch(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${chartID}`).then((res) => res.json()).then((res) => setChartData(res.chart));
    }
    fetchData();
  },[chartID])
  const values = {
    chartID,
    setChartID,
    chartData,
    setChartData
  }
  return (
  <ChartContext.Provider value={values}>{children}</ChartContext.Provider>
  );
}
ChartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useCoinChart = () => useContext(ChartContext);