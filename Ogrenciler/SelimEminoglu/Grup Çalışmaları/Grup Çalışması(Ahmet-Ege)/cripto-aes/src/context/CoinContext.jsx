import { useContext, createContext, useState, useEffect } from "react";


const CoinContext = createContext();

// eslint-disable-next-line react/prop-types
export const CoinProvider = ({children}) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=tr")
    .then(res => res.json())
    .then(data => setCoins(data))
  }, [])
  return (
    <CoinContext.Provider value={coins}>
      {children}
    </CoinContext.Provider>
  )
}

export const useCoin = () => useContext(CoinContext);