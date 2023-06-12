import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";


const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      fetch("https://api.coinstats.app/public/v1/coins?skip=0").then((res) => res.json()).then((res) => setDatas(res.coins));
    }
    fetchData();
  },[])
  const values = {
    datas,
    setDatas
  }
  return (
  <DataContext.Provider value={values}>{children}</DataContext.Provider>
  );
}
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useFetch = () => useContext(DataContext);