import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsDetail from "./components/NewsDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/" element={<NewsList />} />
      </Routes>
    </Router>
  );
}

export default App;
