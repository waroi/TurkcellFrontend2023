import { createContext, useContext, useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    async function fetchData() {
      fetch(`https://api.coinstats.app/public/v1/coins?skip=${page}`).then(
        (response) => {
          response.json().then((data) => {
            setCoins(data.coins);
          });
        }
      );
    }
    fetchData();
  }, [page]);

  const values = {
    theme,
    setTheme,
    coins,
    setCoins,
    page,
    setPage,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCustomContext = () => useContext(Context);
