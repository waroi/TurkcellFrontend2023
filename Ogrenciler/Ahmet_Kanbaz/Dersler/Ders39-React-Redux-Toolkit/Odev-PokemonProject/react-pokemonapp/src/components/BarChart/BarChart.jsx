import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { BarChartContainer } from './BarChartStyle'
import PropTypes from "prop-types";

const BarChart = ({ chartData }) => {

  return (
    <BarChartContainer>
      <Bar data={chartData} />
    </BarChartContainer>
  )
};

BarChart.propTypes = {
  chartData: PropTypes.object,
};

export default BarChart;