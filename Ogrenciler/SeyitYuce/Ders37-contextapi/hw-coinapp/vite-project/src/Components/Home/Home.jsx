import CoinsListItem from "./CoinsListItem";
import TrendCoinItem from "./TrendCoinItem";
import { useCoin } from "../../context/Coincontext.jsx";
import { useRef, useState } from "react";

const Home = () => {
  const { allCoins } = useCoin();
  const coinSearch = useRef()
  const [searchResult, setSearchResults] = useState();

  if (allCoins.length === 0) {
    return <p>Yatırım tavsiyesi değildir</p>;
  }


  const searchCoin = () => {
    const filteredCoin = allCoins.coins.filter(item => item.name.toLowerCase() == coinSearch.current.value.toLowerCase())
    setSearchResults(filteredCoin);
  }


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-9">
          <div className="d-flex justify-content-between">
            <h4>All Coins</h4>
            <input className="search" type="text" placeholder="Search Coin..." ref={coinSearch} onChange={() => { searchCoin() }} />
          </div>
          <table className="table">
            <thead>
              <tr>
                {/* <th scope="col">Logo</th> */}
                <th scope="col">Symbol</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">1h%</th>
                <th scope="col">1d%</th>
                <th scope="col">1w%</th>
                <th scope="col">MarketCap</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr className=" "> */}
                {
                  searchResult?.length > 0 ?
                    <CoinsListItem key={searchResult.id} coin={searchResult[0]} />
                    :
                    allCoins.coins.length > 0 ? (
                      allCoins.coins.sort((a, b) => a.name.localeCompare(b.name)).map((coin) => (
                        <CoinsListItem key={coin.id} coin={coin} searchResult={searchResult} />
                      ))
                    ) : (
                      <p>Loading...</p>
                    )
                }
              {/* </tr> */}
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