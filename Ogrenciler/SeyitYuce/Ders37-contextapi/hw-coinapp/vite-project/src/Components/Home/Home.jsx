import CoinsListItem from "./CoinsListItem";
import TrendCoinItem from "./TrendCoinItem";
import { useCoin } from "../../context/Coincontext.jsx";
import { useRef, useState } from "react";

const Home = () => {
  const { allCoins } = useCoin();
  const coinSearch = useRef()
  const [searchResult, setSearchResults] = useState();
  // const [sortedName, setSortedName] = useState(allCoins?.coins?.sort((a, b) => a.name.localeCompare(b.name)))
  const [order, setOrder] = useState(true)
  if (allCoins.length === 0) {
    return <p className="news-height">Yatırım tavsiyesi değildir</p>;
  }

  const searchCoin = () => {
    const filteredCoin = allCoins.coins.filter(item => item.name.toLowerCase() == coinSearch.current.value.toLowerCase())
    setSearchResults(filteredCoin);
  }

  const sortName = () => {
    // const sortedAz = sortedName.reverse();
    // console.log(sortedAz)
    // setSortedName(sortedAz)
    setOrder(!order)
  }
  // const sortPrice = () => {
  //   setOrderPrice(!orderPrice)
  //   console.log(orderPrice)
  // }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-9">
          <div className="d-flex justify-content-between">
            <h4>All Coins</h4>
            <input className="search" type="text" placeholder="Search Coin..." ref={coinSearch} onChange={() => { searchCoin() }} />
          </div>
          <table className="table my-3">
            <thead>
              <tr>
                <th>Logo</th>
                <th>Symbol</th>
                <th style={{ cursor: "pointer" }} onClick={sortName}>Name<i className={order ? "bi bi-sort-alpha-down ms-2" : "bi bi-sort-alpha-down-alt ms-2"}></i></th>
                <th>Price</th>
                <th>1h%</th>
                <th>1d%</th>
                <th>1w%</th>
                <th>MarketCap</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name) */}
              {
                searchResult?.length > 0 ?
                  <CoinsListItem key={searchResult.id} coin={searchResult[0]} />
                  :
                  allCoins?.coins?.length > 0 ? (
                    allCoins.coins.sort((a, b) => {
                      if (order) {
                        return a.name.localeCompare(b.name);
                      }
                      else {
                        return b.name.localeCompare(a.name)
                      }

                    }).map((coin) => (
                      <CoinsListItem key={coin.id} coin={coin} searchResult={searchResult} />
                    ))
                  ) : (
                    <p>Loading...</p>
                  )
              }

            </tbody>
          </table>
        </div>
        <div className="col-lg-3 ">
          <div className="sticky-top">
            <h4>Trend</h4>
            <ul className="list-group ">
              {
                allCoins.coins.length > 0 ? (
                  allCoins.coins.sort((a, b) => a.rank - b.rank).slice(0, 6).map((coin) => (
                    <TrendCoinItem key={coin.id} coin={coin} />
                  ))
                ) : (
                  <p>Loading...</p>
                )}
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;