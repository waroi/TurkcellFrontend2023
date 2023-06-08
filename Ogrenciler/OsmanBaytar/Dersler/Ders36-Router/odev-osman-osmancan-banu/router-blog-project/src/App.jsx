import Router from "./routes/Router";
import "./App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
