import Coins from "../../CoinsTable/Coins";
import { BgWrapper, CardWrapper } from "./styled";
import { useNews } from "../../../context/newsContext";
import Card from "../../Card";
const Home = () => {
  const { news } = useNews();
  return (
    <BgWrapper>
      <div className="container px-4">
        <h3 className="px-3 pt-3">Piyasa Değerine Göre , en iyi 100 Kripto Para Birimleri</h3>
        <p className="p-3 pt-0 fs-5 text-secondary">The global crypto market cap is $1.05T,  decrease over the last day...</p>
      </div>
      <CardWrapper>
        {news.map((item,i) => (<Card item={item} key={i}/>))}
      </CardWrapper>
      <Coins />
    </BgWrapper>
  );
};

export default Home;
