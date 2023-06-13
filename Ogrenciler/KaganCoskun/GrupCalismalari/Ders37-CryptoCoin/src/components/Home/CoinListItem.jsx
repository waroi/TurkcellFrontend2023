/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { CoinSymbol, CoinTitle, PriceChange, TableCell, TableRow } from './styled'
import { useTheme } from '../../context/ThemeContext'

const CoinListItem = ({coin}) => {

  const { theme } = useTheme()

  return (
    <TableRow theme={theme}>
        <TableCell>#{coin?.market_cap_rank}</TableCell>
        <TableCell><CoinTitle><img src={coin?.image} alt="" /><Link to={`/coin/${coin?.id}`}>{coin?.name}</Link> <CoinSymbol theme={theme}>{coin?.symbol}</CoinSymbol></CoinTitle></TableCell>
        <TableCell>{coin?.current_price}</TableCell>
        <TableCell><PriceChange price={coin?.price_change_percentage_24h}>{coin?.price_change_percentage_24h>0?<i className="fa-solid fa-caret-up"></i>:<i className="fa-solid fa-caret-down"></i>} {coin?.price_change_percentage_24h.toFixed(2)}</PriceChange></TableCell>
        <TableCell>{coin?.market_cap.toLocaleString()}</TableCell>
        <TableCell>{coin?.market_cap_change_24h.toLocaleString()}</TableCell>
    </TableRow>
  )
}

export default CoinListItem 