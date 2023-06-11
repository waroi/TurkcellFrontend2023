import { useEffect } from "react"
import { useCoinList } from "../context/CoinContext";

const HomeView = () => {
  const {coinList} =useCoinList();
  console.log(coinList);

    useEffect(() => {}, [])
  return (
    <div>HomeView</div>
  )
} // image name, last_updated 

export default HomeView