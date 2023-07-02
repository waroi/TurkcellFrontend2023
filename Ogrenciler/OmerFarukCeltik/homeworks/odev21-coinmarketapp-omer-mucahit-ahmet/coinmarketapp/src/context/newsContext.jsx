import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";


const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function newsData() {
      fetch("https://api.coinstats.app/public/v1/news?skip=0&limit=3").then((res) => res.json()).then((res) => setNews(res.news));
    }
    newsData();
  },[])
  const values = {
    news,
    setNews
  }
  return (
  <NewsContext.Provider value={values}>{children}</NewsContext.Provider>
  );
}
NewsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useNews = () => useContext(NewsContext);