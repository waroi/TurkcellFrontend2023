import { useEffect, useState } from "react";
import { getAllCryptoCurrencies } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Td, Th } from "./CurrencyListStyle";

const CurrencyList = () => {
  const navigate = useNavigate();
  const [allCurrencies, setAllCurrencies] = useState();
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const getCurrencies = async () => {
    const list = await getAllCryptoCurrencies();
    setAllCurrencies(list.coins);
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedCurrencies = allCurrencies?.sort((a, b) => {
    if (sortColumn === "#") {
      return sortOrder === "asc" ? a.rank - b.rank : b.rank - a.rank;
    } else if (sortColumn === "Name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      return 0;
    }
  });

  return (
    <div className="container">
      <table className="w-100 h-100" cellPadding={10}>
        <thead>
          <tr>
            <Th onClick={() => handleSort("#")}></Th>
            <Th onClick={() => handleSort("#")}>#</Th>
            <Th className="text-start" onClick={() => handleSort("Name")}>
              Name
            </Th>
            <Th>Price</Th>
            <Th>1h%</Th>
            <Th>24h%</Th>
            <Th>7d%</Th>
            <Th>Market Cap</Th>
            <Th>Volume 24h</Th>
            <Th>Total Supply</Th>
            <Th>Last 7 days</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {sortedCurrencies?.map((currency) => (
            <tr
              key={currency.id}
              onClick={() => navigate(`/coins/${currency.id}`)}
            >
              <Td>
                <i className="bi bi-star"></i>
              </Td>
              <Td>{currency.rank}</Td>
              <Td className="text-start ">
                <img
                  src={currency.icon}
                  width={30}
                  height={30}
                  className="me-3"
                />
                {currency.name}
              </Td>
              <Td>{currency.price.toFixed(2)}</Td>
              <Td>{currency.priceChange1h}</Td>
              <Td>{currency.priceChange1d}</Td>
              <Td>{currency.priceChange1w}</Td>
              <Td>{currency.marketCap}</Td>
              <Td>{currency.volume}</Td>
              <Td>{currency.totalSupply}</Td>
              <Td></Td>
              <Td>
                <i className="bi bi-three-dots-vertical"></i>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyList;
