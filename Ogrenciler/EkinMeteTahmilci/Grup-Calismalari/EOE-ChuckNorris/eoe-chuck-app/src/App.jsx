import Header from './components/header/header'
import Router from './routes/Router'
import { Container } from './ContainerStyle'
import Footer from './components/Footer/Footer'
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

export default App
