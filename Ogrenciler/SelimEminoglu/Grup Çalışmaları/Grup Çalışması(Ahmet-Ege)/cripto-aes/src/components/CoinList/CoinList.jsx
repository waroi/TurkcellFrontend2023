import { useCoin } from "../../context/CoinContext"
import CoinListItem from "./CoinListItem";
import { CoinListTable } from './CoinListStyle'
import { useTheme } from '../../context/ThemeContext'

const CoinList = () => {
  const { theme } = useTheme()
  const coins = useCoin();
  return (
    <CoinListTable theme={theme}>
      <table>
        <thead>
          <tr>
            <th>İsim</th>
            <th>Fiyat</th>
            <th>1 Gün En Yüksek</th>
            <th>1 Gün En Düşük</th>
            <th>1 Gün Değişim%</th>
            <th>Dolaşan Az</th>
            <th>Toplam Hacim</th>
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
