import { createContext, useContext, useEffect, useState } from "react";
import Fetch from "../models/Fetch";
import PropTypes from "prop-types";
const StoreContext = createContext();

let coin = {};

export const StoreProvider = ({ children }) => {
 const [top100, setTop100] = useState([]);
 const [searchResult, setSearchResult] = useState({});
 const [marketCap, setMarketCap] = useState(0);
 const [search, setSearch] = useState("");

 useEffect(() => {
  if (!search) return
  Fetch.getCoin(search).then((data) => {
   if (!data) return;
   coin.info = data;
  });
  Fetch.getHistory(search).then((data) => {
   coin.history = data;
  });
  setSearchResult(coin);
 }, [search]);

 useEffect(() => {
  if (top100.length) return;
  Fetch.getTop().then((data) => {
   setTop100(data);
   setMarketCap(data.reduce((acc, cur) => acc + Number(cur.marketCap), 0))
  });
 }, [top100]);

 const store = {
  top100,
  searchResult,
  setSearch,
  marketCap
 }

 return (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
 );
}

export const useStore = () => useContext(StoreContext);

StoreProvider.propTypes = {
 children: PropTypes.node.isRequired,
}

