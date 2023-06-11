
import CoinsListItem from "./CoinsListItem";
import TrendCoinItem from "./TrendCoinItem";
import { useCoin } from "../../context/Coincontext.jsx";
const Home = () => {
  const { allCoins } = useCoin();

  if (allCoins.length === 0) {
    return <p>Yatırım tavsiyesi değildir</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-9">
          <h4>All Coins</h4>
          <ul className="list-group">
            {allCoins.coins.length > 0 ? (
              allCoins.coins.sort((a, b) => a.name.localeCompare(b.name)).map((coin) => (
                <CoinsListItem key={coin.id} coin={coin} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
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
