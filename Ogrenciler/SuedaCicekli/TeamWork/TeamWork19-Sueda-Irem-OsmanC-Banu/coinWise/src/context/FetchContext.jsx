import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";

const fetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("https://api.coinstats.app/public/v1/coins?skip=0")
          .then((respo) => respo.json())
          .then((res) => {
            setData(res.coins);
            // gets(res.coins);
          });
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchData();
  }, []);
  const getColor = (value) => {
    return value > 0 ? "green" : value < 0 ? "red" : "black";
  };
  const values = {
    data: data.map((coin) => ({
      ...coin,
      priceChange1hColor: getColor(coin.priceChange1h),
      priceChange1dColor: getColor(coin.priceChange1d),
      priceChange1wColor: getColor(coin.priceChange1w),
    })),
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
