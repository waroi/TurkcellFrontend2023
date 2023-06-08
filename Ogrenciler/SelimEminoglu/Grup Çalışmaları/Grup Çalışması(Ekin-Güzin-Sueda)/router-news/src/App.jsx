import { useEffect, useState } from "react";
import { getNews } from "./utils/Request";
import "./App.css";

function App() {
  const [newsArr, setNewsArr] = useState([]);

  useEffect(() => {
    setNewsArr(getNews());
  }, []);
  return <>{console.log(newsArr)}</>;
}

export default App;
