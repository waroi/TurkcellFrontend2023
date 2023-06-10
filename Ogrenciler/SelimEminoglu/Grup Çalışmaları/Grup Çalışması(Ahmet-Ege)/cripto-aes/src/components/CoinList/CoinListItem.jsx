import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'
const CoinListItem = ({coin}) => {
  const navigate = useNavigate()
  return (
    <tr onClick={() => navigate(`/coins/${coin.id}`)}>
      <td>{coin.name}</td>
      <td>{coin.current_price}</td>
      <td>{coin.high_24h}</td>
      <td>{coin.low_24h}</td>
      <td>{coin.price_change_percentage_24h}</td>
      <td>{coin.circulating_supply}</td>
      <td>{coin.total_volume}</td>
    </tr>
  )
}

CoinListItem.propTypes = {
  coin: PropTypes.object.isRequired
}

export default CoinListItem
