/* eslint-disable react/prop-types */
import { CoinItem, CoinItemTh } from './styled'
import { useCurrency } from '../../context/CurrencyContext'

const CoinListItem = ({coin}) => {
    const {currency} = useCurrency()
  return (
    <CoinItem>
        <CoinItemTh>{coin?.name}</CoinItemTh>
        <CoinItemTh>{coin?.symbol}</CoinItemTh>
        <CoinItemTh>{currency + coin?.current_price}</CoinItemTh>
    </CoinItem>
  )
}

export default CoinListItem