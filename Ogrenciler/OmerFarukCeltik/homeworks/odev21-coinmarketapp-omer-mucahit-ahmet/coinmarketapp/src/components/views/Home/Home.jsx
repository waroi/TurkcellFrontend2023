import Coins from "../../CoinsTable/Coins";
import { BgWrapper, CardWrapper } from "./styled";
import { useNews } from "../../../context/newsContext";
import Card from "../../Card";
import { useTheme } from "../../../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  const { news } = useNews();
  return (
    <BgWrapper style={theme == "light" ?  {background:"white"} : {background: "linear-gradient(rgb(34, 37, 49) 0%, rgba(34, 37, 49, 0) 413px)"}}>
      <div className="container px-4">
        <h3 className="px-3 pt-3">Check Out The Latest Cryptocurrency News</h3>
        <p className="p-3 pt-0 fs-5 text-secondary">The global crypto market cap is $1.05T,  decrease over the last day.</p>
      </div>
      <CardWrapper>
        {news.map((item,i) => (<Card item={item} key={i}/>))}
      </CardWrapper>
      <Coins />
    </BgWrapper>
  );
};

export default Home;
