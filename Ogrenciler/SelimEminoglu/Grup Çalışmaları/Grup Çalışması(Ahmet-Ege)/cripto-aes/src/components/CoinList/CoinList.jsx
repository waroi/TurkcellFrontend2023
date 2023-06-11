import { useCoin } from "../../context/CoinContext"
import CoinListItem from "./CoinListItem";
import { CoinListTable } from './CoinListStyle'
import {useTheme} from '../../context/ThemeContext'

const CoinList = () => {
  const {theme} = useTheme()
  const coins = useCoin();
  return (
    <CoinListTable theme={theme}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>24High</th>
            <th>24Low</th>
            <th>24Change%</th>
            <th>Circul</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {
            coins.map((coin) => {
              return <CoinListItem key={coin.id} coin={coin} />
            })
          }
        </tbody>
      </table>
    </CoinListTable>
  )
}

export default CoinList
