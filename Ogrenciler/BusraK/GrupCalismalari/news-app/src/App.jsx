import "./App.css";

import Router from "./routes/Router";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import fetchData from "./API/FetchData";
function App() {
  return (
    <>
      <Navbar fetchData={fetchData} />
      <Router />
      <Footer />
    </>
  );
}

export default App;
