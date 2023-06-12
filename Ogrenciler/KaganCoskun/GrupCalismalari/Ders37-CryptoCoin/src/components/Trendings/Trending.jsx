/* eslint-disable react/prop-types */
import { TrendCoinImage, TrendCoinsItem } from "./trendingStyled";

const Trending = ({ trending }) => {
  
  return (
    <>
      {
        <TrendCoinsItem to={`/coin/${trending.id}`}>
          <TrendCoinImage src={trending?.small} alt="small" />
          {trending?.symbol}
        </TrendCoinsItem>
      }
    </>
  );
};
export default Trending;
