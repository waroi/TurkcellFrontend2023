import { Bar } from "react-chartjs-2";
import { useTheme } from "../../context/ThemeContext";
import { Chart as ChartJS } from "chart.js/auto";
import PropTypes from "prop-types";

const BarChart = ({ chartData }) => {
  const { theme } = useTheme();
  const options = {
    plugins: {
      legend: {
        labels: {
          color: theme == "light" ? "#000000" : "#FFFFFF",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: theme == "light" ? "#000000" : "#FFFFFF",
        },
      },
      x: {
        ticks: {
          color: theme == "light" ? "#000000" : "#FFFFFF",
        },
      },
    },
  };
  return <Bar data={chartData} options={options} />;
};

BarChart.propTypes = {
  chartData: PropTypes.object,
};

export default BarChart;
