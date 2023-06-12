/* eslint-disable react/prop-types */
// import { useCoinList } from "../../context/CoinContext";
import { TrendCoinImage, TrendCoinsItem } from "./trendingStyled";

const Trending = ({ trending }) => {
  console.log(trending);
  // const { coinList } = useCoinList();

  // const newTrending = coinList?.find((element) => element.id === trendingId);
  // console.log(newTrending);
  //image name price percentage
  return (
    <>
      {
        <TrendCoinsItem>
          <TrendCoinImage src={trending?.small} alt="small" />
          {trending?.symbol}
        </TrendCoinsItem>
      }
    </>
  );
};
export default Trending;
