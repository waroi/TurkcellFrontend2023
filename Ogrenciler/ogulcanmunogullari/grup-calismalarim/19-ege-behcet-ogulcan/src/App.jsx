import { useState, useRef, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { AppComponent, Container } from './appStyle';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Fetch from './models/Fetch.js';
import MainPage from './views/MainPage';
import { Routes, Route } from "react-router-dom";
import NewsDetailPage from './views/NewsDetailPage';

function App() {
  const [lang, setLang] = useState("tr");
  const [page, setPage] = useState(0);
  const [news, setNews] = useState([]);
  const selectRef = useRef("tr");
  const selectLang = (e) => {
    e.preventDefault();
    setLang(selectRef.current.value);
  }
  useEffect(() => {
    Fetch.getNews(lang, page).then(
      (data) => {
        setNews(data);
      }
    )
  }, [lang, page])
  return (
    <AppComponent>
      <Header setPage={setPage} selectLang={selectLang} selectRef={selectRef} lang={lang} />
      <Container>

        <Routes>
          <Route path="/" element={<MainPage setPage={setPage} lang={lang} page={page} news={news} />} />
          <Route path="/page/:number" element={<MainPage lang={lang} setPage={setPage} page={page} news={news} />} />
          <Route path="/news/:id" element={<NewsDetailPage setPage={setPage} page={page} news={news} />} />
        </Routes>

        {news && <Sidebar setPage={setPage} lang={lang} />}
      </Container>
      <Footer lang={lang} />
    </AppComponent>
  );
}

export default App;
