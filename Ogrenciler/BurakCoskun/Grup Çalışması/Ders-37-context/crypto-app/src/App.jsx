import "./App.css";
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import NavbarComponent from "./Components/Navbar/Navbar";
import Router from "./routes/Router";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useCustomContext } from "./context/Context";

function App() {
  const { theme } = useCustomContext();

  useEffect(() => {
    Chart.register(CategoryScale);
    Chart.register(LinearScale);
    Chart.register(PointElement);
    Chart.register(LineElement);
  }, []);
  
  return (
    <div className={`app ${theme}`}>
      <NavbarComponent />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
