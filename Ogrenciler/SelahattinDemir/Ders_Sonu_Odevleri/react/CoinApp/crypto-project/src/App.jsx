import Router from "./routes/Router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className={` app ${theme}`}>
        <NavBar />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
