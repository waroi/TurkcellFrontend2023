import Header from './components/header/header'
import Router from './routes/Router'
import { Container } from './ContainerStyle'
function App() {
  return (
    <>
      <Header />
      <Container>
        <Router />
      </Container>
    </>
  )
}

export default App
