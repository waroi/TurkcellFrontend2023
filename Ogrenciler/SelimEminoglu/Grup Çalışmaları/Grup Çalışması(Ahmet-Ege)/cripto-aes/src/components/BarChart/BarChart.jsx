/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2"
import {useTheme} from '../../context/ThemeContext'

const BarChart = ({ chartData }) => {
    const {theme} = useTheme()
    const options = {
        plugins: {
          legend: {
            labels: {
              color: theme == 'light' ? '#000000' : '#FFFFFF',
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: theme == 'light' ? '#000000' : '#FFFFFF',
            },
          },
          x: {
            ticks: {
              color: theme == 'light' ? '#000000' : '#FFFFFF',
            },
          },
        },
      };
    return (
        <Bar data={chartData} options={options}/>
    )
}

export default BarChart