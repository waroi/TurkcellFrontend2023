import "./App.css";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";
import {AppContainer, Container } from "./components/StyledContainer.js";
import Header from "./components/Header/Header";
import {useTheme} from './context/ThemeContext'

function App() {
  const {theme} = useTheme()
  return (
    <AppContainer className={`app ${theme}`}>
      <Header />
      <Container>
        <Router />
      </Container>
      <Footer />
    </AppContainer>
  )
}

export default App;
