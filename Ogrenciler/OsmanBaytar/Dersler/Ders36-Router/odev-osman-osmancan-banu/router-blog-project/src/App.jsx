import Router from "./routes/Router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-05-08&sortBy=publishedAt&apiKey=54fb1975177a4bc180d34123c88605c9";

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
      <a href="">asdasd</a>
      <Header />
      <Router data={items} />
      <Footer />
    </>
  );
}

export default App;
