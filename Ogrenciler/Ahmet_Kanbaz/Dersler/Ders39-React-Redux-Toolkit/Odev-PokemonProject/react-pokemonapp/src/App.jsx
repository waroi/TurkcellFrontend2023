import Router from './routes/Router'
import { ContainerStyle } from './components/ContainerStyle'
import Header from './components/Header/Header'
function App() {

  return (
    <ContainerStyle>
      <Header />
      <Router />
    </ContainerStyle>
  )
}

export default App
