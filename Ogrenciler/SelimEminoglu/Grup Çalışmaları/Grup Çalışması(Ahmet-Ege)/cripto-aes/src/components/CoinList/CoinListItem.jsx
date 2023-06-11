import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { TableRow } from './CoinListStyle'
const CoinListItem = ({ coin }) => {
  const navigate = useNavigate()

  const formatMoney = (number) => {
    const parts = number.split(".");
    const part1 = parts[0];
    const part2 = parts[1];
    console.log(part2)

    // Creating a new string with groups of three digits
    let newPart1 = "";
    for (let i = part1.length - 1, j = 1; i >= 0; i--, j++) {
      newPart1 = part1[i] + newPart1;
      if (j % 3 === 0 && i !== 0) {
        newPart1 = "," + newPart1;
      }
    }

    // Displaying the result
    const result = newPart1 + "." + part2;
    return part2 ? result : newPart1;
  }
  return (
    <TableRow onClick={() => navigate(`/coins/${coin.id}`)}>
      <td className='nameArea'><span><img src={coin.image} alt="" /></span> <span>{coin.name}</span></td>
      <td>{formatMoney(coin.current_price.toString())}  <span className='symbol'>₺</span></td>
      <td>{formatMoney(coin.high_24h.toString())}  <span className='symbol'>₺</span></td>
      <td>{formatMoney(coin.low_24h.toString())} <span className='symbol'>₺</span></td>
      <td>{coin.price_change_percentage_24h} <span className='symbol'> %</span> </td>
      <td>{formatMoney(coin.circulating_supply.toString())} <span className='symbol'>{coin.symbol.toUpperCase()}</span> </td>
      <td>{formatMoney(coin.total_volume.toString())} <span className='symbol'>₺</span></td>
    </TableRow>
  )
}

CoinListItem.propTypes = {
  coin: PropTypes.object.isRequired
}

export default CoinListItem
