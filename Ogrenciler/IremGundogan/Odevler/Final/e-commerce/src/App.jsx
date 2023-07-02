import Footer from "./components/Footer/Footer.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Router from "./routes/Router"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App
