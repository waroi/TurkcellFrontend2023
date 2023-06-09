// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsDetail from "./components/NewsDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
   
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
