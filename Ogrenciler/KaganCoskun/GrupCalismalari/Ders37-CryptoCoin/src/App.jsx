import './App.css'
import { Main } from './Styled'
import Header from './components/header/Header'
import { CoinListProvider } from './context/CoinContext'
import { CurrencyProvider } from './context/CurrencyContext'
import Router from './routes/Router'
import { useTheme } from './context/ThemeContext'

function App() {

  const {theme} = useTheme()



  return (
    <Main theme={theme}>
      <CurrencyProvider>
        <CoinListProvider>
        <Header/>
            <main>
              <Router></Router>
            </main>
        </CoinListProvider>
      </CurrencyProvider>
    </Main>
  )
}

export default App
