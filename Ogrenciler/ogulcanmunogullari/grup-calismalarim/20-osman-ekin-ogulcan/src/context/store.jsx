import { createContext, useContext, useEffect, useState } from "react";
import Fetch from "../models/Fetch";
import PropTypes from "prop-types";
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [top100, setTop100] = useState([]);
  const [marketCap, setMarketCap] = useState(0);
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!search) return;
    Fetch.getCoin(search).then((data) => {
      if (!data) {
        setCoin("404");
        return;
      }
      setCoin(data);
    });
    Fetch.getHistory(search).then((data) => {
      setHistory(data);
    });
  }, [search]);

  useEffect(() => {
    if (top100.length) return;
    Fetch.getTop().then((data) => {
      setTop100(data);
      setMarketCap(data.reduce((acc, cur) => acc + Number(cur.marketCap), 0));
    });
  }, [top100]);

  const store = {
    top100,
    setSearch,
    marketCap,
    coin,
    history,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
