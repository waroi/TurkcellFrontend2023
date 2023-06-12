import React from "react";
import { useCoinList } from "../../context/CoinContext";

const Trending = ({ trendingId }) => {
  const { coinList } = useCoinList();
  const newTrending = coinList?.find((element) => element.id === trendingId);
  console.log(newTrending);
//image name price percentage
  return <>{newTrending && <div>{newTrending?.id}</div>}</>;
};
export default Trending;
