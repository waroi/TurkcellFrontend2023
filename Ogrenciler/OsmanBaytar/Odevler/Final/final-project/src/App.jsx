import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./routes/Router";
import { useEffect, useState } from "react";
import { productRequest } from "./utils/Request";

function App() {
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    productRequest.get().then((data) => {
      console.log(data);
      setSearchProducts(data);
    });
  }, []);

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
