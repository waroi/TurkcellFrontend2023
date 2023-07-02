import "./App.css";
import Header from "./components/Header/HomeHeader";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <header>
          <Header />
        </header>
      )}
      <div className="mainContainer">
        <main>
          <Router />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
