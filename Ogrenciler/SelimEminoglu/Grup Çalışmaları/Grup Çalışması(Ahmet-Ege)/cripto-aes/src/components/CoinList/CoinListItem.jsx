import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { TableRow } from './CoinListStyle'
const CoinListItem = ({ coin }) => {
  const navigate = useNavigate()





  return (
    <TableRow onClick={() => navigate(`/coins/${coin.id}`)}>
      <td className='nameArea'><span><img src={coin.image} alt="" /></span> <span>{coin.name}</span></td>
      <td>{coin.current_price}  <span className='symbol'>₺</span></td>
      <td>{coin.high_24h}  <span className='symbol'>₺</span></td>
      <td>{coin.low_24h} <span className='symbol'>₺</span></td>
      <td>{coin.price_change_percentage_24h} <span className='symbol'> %</span> </td>
      <td>{coin.circulating_supply} <span className='symbol'>{coin.symbol.toUpperCase()}</span> </td>
      <td>{coin.total_volume} <span className='symbol'>₺</span></td>
    </TableRow>
  )
}

CoinListItem.propTypes = {
  coin: PropTypes.object.isRequired
}

export default CoinListItem
