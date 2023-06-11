import './App.css'
import Header from './components/header/Header'
import { CoinListProvider } from './context/CoinContext'
import { CurrencyProvider } from './context/CurrencyContext'
import Router from './routes/Router'

function App() {

  return (
    <>
      <CurrencyProvider>
        <CoinListProvider>
        <Header/>
            <main>
              <Router></Router>
            </main>
        </CoinListProvider>
      </CurrencyProvider>
    </>
  )
}

export default App
