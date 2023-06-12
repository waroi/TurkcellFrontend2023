import "./App.css";
import Router from "./routes/Router.jsx";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router style={{ flex: "1" }} />
      <Footer style={{ flexShrink: "0" }} />
    </>
  );
}

export default App;
