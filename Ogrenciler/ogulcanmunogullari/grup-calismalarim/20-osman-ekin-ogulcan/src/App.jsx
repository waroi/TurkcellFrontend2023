import { Router } from "./routes/Router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useThemeStore } from "./context/themeStore"
import styled from "styled-components"
import PropTypes from "prop-types"
function App() {
  const { theme } = useThemeStore()

  const Container = styled.div`
    width:1140px;
    margin:0 auto;
  `
  const MainDIV = styled.div`
    background-color: ${props => props.theme == "light" ? "#fff" : "#000"};
    color: ${props => props.theme == "light" ? "#000" : "#fff"};
  `

  return (
    <MainDIV theme={theme}>
      <Header />
      <Container>
        <Router />
      </Container>
      <Footer />
    </MainDIV>
  )
}
App.propTypes = {
  theme: PropTypes.string,
}


export default App
