import "./App.css";
import Router from "./routes/Router.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
