import Router from "./routes/Router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-05-09&sortBy=publishedAt&apiKey=7e69fc4f5fa043869ba2fda1b0ed2fbc";

  const fetchData = async () => {
    const data = await fetch(url);
    const json = await data.json();

    setItems(json.articles);
  };
  console.log(items);

  useEffect(() => {
    if (items == []) {
      return items;
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Router data={items} />
      <Footer />
    </>
  );
}

export default App;
