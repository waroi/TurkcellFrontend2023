import { useEffect, useState } from "react";
import HomeViewBox from "../../components/HomeViewBox/HomeViewBox";

const HomeView = () => {
  const [items, setItems] = useState([]);

  const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-05-08&sortBy=publishedAt&apiKey=54fb1975177a4bc180d34123c88605c9";

  const fetchData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setItems(json.articles);
  };

  useEffect(() => {
    if (items == []) {
      return items;
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {items.map((item, index) => (
          <HomeViewBox info={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeView;
