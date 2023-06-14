import CoinsListItem from "./CoinsListItem";
import TrendCoinItem from "./TrendCoinItem";
import { useCoin } from "../../context/Coincontext.jsx";
import { useRef, useState } from "react";

const Home = () => {
  const { allCoins } = useCoin();
  //search
  const coinSearch = useRef();
  const [searchResult, setSearchResults] = useState();
  //sort
  const [sortColumn, setSortColumn] = useState("name");
  const [sortNameOrder, setSortNameOrder] = useState(true);
  const [sortPriceOrder, setSortPriceOrder] = useState(true);

  if (allCoins.length === 0) {
    return <p className="news-height">Yatırım tavsiyesi değildir</p>;
  }

  const searchCoin = () => {
    const filteredCoin = allCoins.coins.filter(
      (item) =>
        item.name.toLowerCase() == coinSearch.current.value.toLowerCase()
    );

    setSearchResults(filteredCoin);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      if (column === "price") {
        setSortPriceOrder(!sortPriceOrder);
      } else {
        setSortNameOrder(!sortNameOrder);
      }
    } else {
      setSortColumn(column);
      // setSortNameOrder(true);
      // setSortPriceOrder(true);
    }
  };

  const sortedCoins = allCoins.coins.sort((a, b) => {
    if (sortColumn === "name") {
      return sortNameOrder
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortColumn === "price") {
      return sortPriceOrder ? a.price - b.price : b.price - a.price;
    }
    return;
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-9">
          <div className="d-flex justify-content-between">
            <h4>All Coins</h4>
            <input
              className="search"
              type="text"
              placeholder="Search Coin..."
              ref={coinSearch}
              onChange={() => {
                searchCoin();
              }}
            />
          </div>
          <table className="table my-3">
            <thead>
              <tr>
                <th>Logo</th>
                <th>Symbol</th>
                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort("name")}
                >
                  Name
                  <i className={
                      sortColumn === "name"
                        ? sortNameOrder
                          ? "bi bi-sort-alpha-down ms-2"
                          : "bi bi-sort-alpha-down-alt ms-2"
                        : ""
                    }></i>
                </th>
                <th
                  style={{ cursor: "pointer" }} onClick={() => handleSort("price")}>
                  Price
                  <i className={
                      sortColumn === "price"
                        ? sortPriceOrder
                          ? "bi bi-sort-numeric-down ms-2"
                          : "bi bi-sort-numeric-down-alt ms-2"
                        : ""
                    }></i>
                </th>
                <th>1h%</th>
                <th>1d%</th>
                <th>1w%</th>
                <th>MarketCap</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {searchResult?.length > 0 ? (
                <CoinsListItem key={searchResult.id} coin={searchResult[0]} />
              ) : (
                sortedCoins.map((coin) => (
                  <CoinsListItem
                    key={coin.id}
                    coin={coin}
                    searchResult={searchResult}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="col-lg-3 ">
          <div className="sticky-top">
            <h4>Trend</h4>
            <ul className="list-group ">
              {allCoins.coins.length > 0 ? (
                allCoins.coins
                  .sort((a, b) => a.rank - b.rank)
                  .slice(0, 6)
                  .map((coin) => <TrendCoinItem key={coin.id} coin={coin} />)
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
