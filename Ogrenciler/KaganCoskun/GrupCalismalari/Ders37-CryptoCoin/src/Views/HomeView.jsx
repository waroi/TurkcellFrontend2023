import CoinListItem from "../components/Home/CoinListItem";
import { useCoinList } from "../context/CoinContext";
import { Table, TableHeader } from "./Styled";
import { useCurrency } from "../context/CurrencyContext";
import { useEffect, useState } from "react";
import { getTrendings } from "../service/requests";
import Trending from "../components/Trendings/Trending";
import { TrendCoins } from "../components/Trendings/trendingStyled";

const HomeView = () => {
  const { coinList } = useCoinList();
  const { currency } = useCurrency();

  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrendings().then((data) => setTrendings(data));
  }, []);

  return (
    <div>
      <div>
        <h1>Trend Coins 🔥</h1>
        <TrendCoins>
          {trendings?.map((trending, index) => (
            <Trending key={index} trending={trending.item} />
          ))}
        </TrendCoins>
      </div>

      <Table>
        <thead>
          <tr>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Price in {currency.toUpperCase()}</TableHeader>
            <TableHeader>24h %</TableHeader>
            <TableHeader>Market Cap</TableHeader>
            <TableHeader>Volume(24h)</TableHeader>
          </tr>
        </thead>
        <tbody>
          {coinList?.length > 0 &&
            coinList?.map((item) => <CoinListItem key={item.id} coin={item} />)}
        </tbody>
      </Table>
    </div>
  );
};

export default HomeView;
