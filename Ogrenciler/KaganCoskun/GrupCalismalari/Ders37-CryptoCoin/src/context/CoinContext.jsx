import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";
import { getCoinList } from "../service/requests";
import { useCurrency } from "./CurrencyContext";
import { fakeDb } from "../../db";

const CoinContext = createContext();

export const CoinListProvider = ({ children }) => {

  const {currency} = useCurrency();

  const [coinList, setCoinList] = useState([]);
  useEffect(() => {
    getCoinList(currency).then((data) => setCoinList(data)).catch(()=>setCoinList(fakeDb));
  }, [currency]);

  const values = {
    coinList,
    setCoinList,
  };

  return (
    <CoinContext.Provider value={values}>{children}</CoinContext.Provider>
  );
};

CoinListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCoinList = () => useContext(CoinContext);
