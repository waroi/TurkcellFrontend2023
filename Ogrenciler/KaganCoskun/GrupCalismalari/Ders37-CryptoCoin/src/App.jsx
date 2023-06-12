import './App.css'
import { Main } from './appStyled'
import Header from './components/header/Header'
import { CoinListProvider } from './context/CoinContext'
import { CurrencyProvider } from './context/CurrencyContext'
import Router from './routes/Router'
import { useTheme } from 'styled-components'

function App() {

  // const {theme} = useTheme()



  return (
    // <Main theme={theme}>
      <CurrencyProvider>
        <CoinListProvider>
        <Header/>
            <main>
              <Router></Router>
            </main>
        </CoinListProvider>
      </CurrencyProvider>
    // </Main>
  )
}

export default App
