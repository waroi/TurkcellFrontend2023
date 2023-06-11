/* eslint-disable react/prop-types */
import { CoinSymbol, CoinTitle, PriceChange, TableCell, TableRow } from './styled'

const CoinListItem = ({coin}) => {
  return (
    <TableRow>
        <TableCell>#{coin?.market_cap_rank}</TableCell>
        <TableCell><CoinTitle><img src={coin?.image} alt="" />{coin?.name} <CoinSymbol>{coin?.symbol}</CoinSymbol></CoinTitle></TableCell>
        <TableCell>{coin?.current_price.toLocaleString()}</TableCell>
        <TableCell><PriceChange price={coin?.price_change_percentage_24h}>{coin?.price_change_percentage_24h.toFixed(2)}</PriceChange></TableCell>
        <TableCell>{coin?.market_cap.toLocaleString()}</TableCell>
        <TableCell>{coin?.market_cap_change_24h.toLocaleString()}</TableCell>
    </TableRow>
  )
}

export default CoinListItem