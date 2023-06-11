import PopularCoinsSection from "./PopularCoin/PopularCoinsSection";
import CoinListSection from "./CoinList/CoinListSection";
import MainSection from "./Main/MainSection";

const HomePage = () => {
  return (
    <div>
      <MainSection />
      <PopularCoinsSection />
      <CoinListSection />
    </div>
  );
};

export default HomePage;
