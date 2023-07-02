import BarChart from '../../BarChart/BarChart'
import PropTypes from 'prop-types'

const PokemonChart = ({chartValues}) => {
  return <BarChart chartData={chartValues}/>
}

PokemonChart.propTypes = {
  chartValues: PropTypes.object
}

export default PokemonChart
