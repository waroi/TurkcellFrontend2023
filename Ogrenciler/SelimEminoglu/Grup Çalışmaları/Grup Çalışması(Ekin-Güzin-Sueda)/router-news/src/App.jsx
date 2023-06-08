import { useEffect, useState } from "react";
import { getNews } from "./utils/Request";
import "./App.css";
import BlogList from "./components/BlogList/BlogList";
import { Routes, Route } from "react-router-dom";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [newsArr, setNewsArr] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getNews()
      .then((news) => {
        setNewsArr(news);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return <>{error != "" && <h3>Veri Yok</h3>}
      <Routes>
          <Route path="/" element={<BlogList newsArr={newsArr} />} />
          <Route path="/blogs" element={<BlogList newsArr={newsArr} />} />
          <Route path= "/blogs/:id" element={<BlogDetail newsArr={newsArr} />} />
          <Route path="*" element={<NotFound />} />  
      </Routes>
  </>;
}
export default App;
