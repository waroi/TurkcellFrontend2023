/* eslint-disable react/prop-types */
// import { useCoinList } from "../../context/CoinContext";

const Trending = ({ trending }) => {
  console.log(trending)
  // const { coinList } = useCoinList();

  // const newTrending = coinList?.find((element) => element.id === trendingId);
  // console.log(newTrending);
//image name price percentage
  return <>{<div>{trending?.name}</div>}</>;
};
export default Trending;
