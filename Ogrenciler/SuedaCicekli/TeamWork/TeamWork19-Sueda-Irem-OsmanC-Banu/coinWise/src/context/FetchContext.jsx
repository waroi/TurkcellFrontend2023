import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";

const fetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      fetch("https://api.coinstats.app/public/v1/coins?skip=0")
        .then((respo) => respo.json())
        .then((res) => {
          const data = res.coins.map((coin) => ({
            ...coin,
            priceChange1hColor: getColor(coin.priceChange1h),
            priceChange1dColor: getColor(coin.priceChange1d),
            priceChange1wColor: getColor(coin.priceChange1w),
            circulatingSupply: coin.totalSupply - coin.availableSupply,
          }));
          setData(data);
        });
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      localStorage.removeItem("data");
    }
    fetchData();
  }, [data]);
  const getColor = (value) => {
    return value > 0 ? "green" : value < 0 ? "red" : "black";
  };
  const values = {
    data,
    setData,
  };

  return (
    <fetchContext.Provider value={values}> {children}</fetchContext.Provider>
  );
};
FetchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => useContext(fetchContext);
