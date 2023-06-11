/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
import {useTheme} from '../../context/ThemeContext'

const BarChart = ({ chartData }) => {
    const {theme} = useTheme()
    const options = {
        plugins: {
          legend: {
            labels: {
              color: theme == 'light' ? '#000000' : '#FFFFFF', // Yazı rengini burada belirleyebilirsiniz
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: theme == 'light' ? '#000000' : '#FFFFFF', // Y ekseni yazı rengini burada belirleyebilirsiniz
            },
          },
          x: {
            ticks: {
              color: theme == 'light' ? '#000000' : '#FFFFFF', // X ekseni yazı rengini burada belirleyebilirsiniz
            },
          },
        },
      };
    return (
        <Bar data={chartData} options={options}/>
    )
}

export default BarChart