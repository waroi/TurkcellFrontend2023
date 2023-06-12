import { createContext, useState, useContext } from "react";
import { PropTypes } from "prop-types";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("usd");
  
  const values = {
    currency,
    setCurrency,
  };
  return (
    <CurrencyContext.Provider value={values}>{children}</CurrencyContext.Provider>
  );
};

CurrencyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrency = () => useContext(CurrencyContext);
