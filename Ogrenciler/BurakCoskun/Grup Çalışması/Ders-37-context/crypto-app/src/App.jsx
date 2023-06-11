import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavbarComponent from "./Components/Navbar/Navbar";
import Router from "./routes/Router";
import CarouselComponent from "./Components/Carouselcomponent/CarouselComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <CarouselComponent/>
      <Router />
      <Footer />
    </>
  );
}

export default App;
