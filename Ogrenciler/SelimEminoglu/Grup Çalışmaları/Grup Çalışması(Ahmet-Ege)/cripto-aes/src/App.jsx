import "./App.css";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";
import { Container } from "./components/StyledContainer.js";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Router />
      </Container>
      <Footer />
    </>
  )
}

export default App;
