import BarChart from '../../components/BarChart/BarChart'
import { useCoin } from '../../context/CoinContext'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
const CoinDetail = () => {
  const [coinData, setCoinData] = useState({})
  const { id } = useParams()
  console.log(id)
  const coins = useCoin()

  const coin = coins.find(coin => coin.id == id)
  console.log(coins)

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=try&days=7&interval=daily`)
      .then(res => res.json())
      .then(dataCoin => setCoinData(
        {
          labels: dataCoin.prices.map(priceTime => priceTime[0]),
          datasets: [{
            label: "Coin Değeri",
            data: dataCoin.prices.map(priceTime => priceTime[1])

          }]
        }
      ))
  }, [coin.id])


  // https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=try&days=7&interval=daily


  return (
    <>
      <div>
        Name<span>{coin.name}</span>
        Price<span>{coin.current_price}</span>
        Y24high<span>{coin.high_24h}</span>
        L24Low<span>{coin.low_24h}</span>
        Price24Change<span>{coin.price_change_percentage_24h}</span>
        Circul<span>{coin.circulating_supply}</span>
        TotalVolume<span>{coin.total_volume}</span>
      </div>

      <BarChart chartData={coinData} />
    </>
  )
}

export default CoinDetail
