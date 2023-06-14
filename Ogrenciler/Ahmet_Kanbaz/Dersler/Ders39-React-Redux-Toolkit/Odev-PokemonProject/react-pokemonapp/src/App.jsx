import Router from './routes/Router'
import { ContainerStyle } from './components/ContainerStyle'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <ContainerStyle>
      <Header />
      <Router />
      <Footer />
    </ContainerStyle>
  )
}

export default App
