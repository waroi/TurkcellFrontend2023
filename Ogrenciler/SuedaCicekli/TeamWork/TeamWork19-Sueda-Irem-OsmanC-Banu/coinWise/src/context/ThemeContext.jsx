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
          .then((res) => setData(res.coins));
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };
    fetchData();
  }, []);
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
