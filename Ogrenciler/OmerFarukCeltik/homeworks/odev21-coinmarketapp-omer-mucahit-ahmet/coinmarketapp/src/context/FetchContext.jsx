import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      axios("https://api.coinstats.app/public/v1/coins?skip=0").then((res) => {
    
        setData(res);
      }
      );
    }
    fetchData();
  },[])
  const values = {
    data,
    setData
  }
  return (
  <DataContext.Provider value={values}>{children}</DataContext.Provider>
  );
}
export const useFetch = () => useContext(DataProvider);