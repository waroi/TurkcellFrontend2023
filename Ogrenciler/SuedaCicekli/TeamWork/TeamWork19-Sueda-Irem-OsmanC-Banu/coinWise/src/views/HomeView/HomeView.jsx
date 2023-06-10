import PopularCoinsSection from "./PopularCoin/PopularCoinsSection";
import CoinListSection from "./CoinList/CoinListSection";
import MainSection from "./Main/MainSection";

const HomeView = () => {
  return (
    <div>
      <MainSection />
      <CoinListSection />
      <PopularCoinsSection />
    </div>
  );
};

export default HomeView;
