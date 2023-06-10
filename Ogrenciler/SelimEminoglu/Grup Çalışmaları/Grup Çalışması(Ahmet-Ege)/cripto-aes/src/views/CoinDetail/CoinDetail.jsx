import {useCoin} from '../../context/CoinContext'
import { useParams } from 'react-router-dom'
const CoinDetail = () => {
  const {id} = useParams()
  console.log(id)
  const coins = useCoin()

  const coin = coins.find(coin => coin.id == id)
  console.log(coins)

  return (
    <div>
      Name<span>{coin.name}</span>
      Price<span>{coin.current_price}</span>
      Y24high<span>{coin.high_24h}</span>
      L24Low<span>{coin.low_24h}</span>
      Price24Change<span>{coin.price_change_percentage_24h}</span>
      Circul<span>{coin.circulating_supply}</span>
      TotalVolume<span>{coin.total_volume}</span>
    </div>
  )
}

export default CoinDetail
