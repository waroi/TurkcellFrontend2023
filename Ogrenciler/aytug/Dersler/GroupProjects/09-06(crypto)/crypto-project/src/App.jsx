import Router from "./routes/Router";
import "./App.css";
import ThemeIcon from "./components/ThemeIcon/ThemeIcon";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className={` app ${theme}`}>
        <NavBar />
        <ThemeIcon />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
