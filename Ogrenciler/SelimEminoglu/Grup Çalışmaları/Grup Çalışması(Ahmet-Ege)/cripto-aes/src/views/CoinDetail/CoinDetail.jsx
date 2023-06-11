import BarChart from '../../components/BarChart/BarChart'
import { useCoin } from '../../context/CoinContext'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CoinPage } from './CoinDetailStyle.js'
import AllNews from '../../components/News/AllNews'
const CoinDetail = () => {
  const [coinData, setCoinData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams()
  const coins = useCoin()

  const coin = coins.find(coin => coin.id == id)

  //https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=try&days=7&interval=daily`)
      .then(res => res.json())
      .then(dataCoin => setCoinData(
        {
          labels: dataCoin.prices.map(priceTime => new Date(priceTime[0]).toLocaleDateString()),
          datasets: [{
            label: "Coin Değeri",
            data: dataCoin.prices.map(priceTime => priceTime[1])
          }]
        }
      ))
      .then(() => setLoaded(true))
  }, [coin.id])


  // https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=try&days=7&interval=daily


  return (
    <CoinPage>
      <div className='coinDetails'>
        <div className='coinInfo'>
          <div className='coinBasics'>
            <img src={coin.image} alt="" />
            <h2>{coin.name}</h2>
            <h4>{coin.symbol.toUpperCase()}</h4>
          </div>
          <div className="coinPrice">
            <h1>{coin.current_price} TRY</h1>
          </div>
          <div className="coin24HourData">
            <span> <h6>24 Saatte Değişim</h6><p> {coin.price_change_percentage_24h} %</p></span>
            <span> <h6>24 Saatte En Yüksek</h6><p> {coin.high_24h} TRY</p></span>
            <span> <h6>24 Saatte En Düşük</h6><p> {coin.low_24h} TRY</p></span>
          </div>
          <div className="coinSupplyData">
            <span> <h6>Dolaşımdaki Arz</h6><p> {coin.circulating_supply} </p></span>
            <span> <h6>Maks. Arz</h6> <p> {coin.total_supply} </p></span>
            <span> <h6>Dolaşım Arzı / Maks. Arz Yüzde</h6> <p>{(coin.circulating_supply / coin.total_supply * 100).toFixed(2) + "%"}</p> </span>
            <span> <h6>Tam seyreltilmiş Piyasa Değeri</h6> <p>{coin.fully_diluted_valuation}</p> </span>
          </div>
          <div className="highestLowest">
            <span> <h6>En Yüksek Değer</h6> <p> {coin.ath} TRY</p> </span>
            <span> <h6>En Yüksek Olduğu Tarih</h6> <p> {coin.ath_date.slice(0, 10).split("-").reverse().join(".")} </p> </span>
            <span> <h6>En Düşük Değer</h6> <p> {coin.atl} TRY</p> </span>
            <span> <h6>En Düşük Olduğu Tarih</h6> <p> {coin.atl_date.slice(0, 10).split("-").reverse().join(".")} </p> </span>
          </div>
        </div>

        <div className='barChartWrapper'>
          {
            loaded ? <BarChart chartData={coinData} /> : <h1>Loading...</h1>
          }
        </div>
      </div>

      <div>
        <AllNews coinName={id} />
      </div>

    </CoinPage>
  )
}

export default CoinDetail
