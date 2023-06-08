import { useEffect, useState } from "react";
import { getNews } from "./utils/Request";
import "./App.css";

function App() {
  const [newsArr, setNewsArr] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getNews()
      .then((news) => {
        console.log("veri geldi");
        console.log(news.articles);
        setNewsArr(news.articles);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return <>{error != "" && <h3>Veri Yok</h3>}</>;
}

export default App;
