import { Router } from "./routes/Router";
import Header from "./components/Header";
import { useThemeStore } from "./context/themeStore";
import PropTypes from "prop-types";
import { Container, MainDIV } from "./styles/appStyle";
function App() {
  const { theme } = useThemeStore();

  return (
    <MainDIV theme={theme}>
      <Header />
      <Container>
        <Router />
      </Container>
    </MainDIV>
  );
}
App.propTypes = {
  theme: PropTypes.string,
};

export default App;
