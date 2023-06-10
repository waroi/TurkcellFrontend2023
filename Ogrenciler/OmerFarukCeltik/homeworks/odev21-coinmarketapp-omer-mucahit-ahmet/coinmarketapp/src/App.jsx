import './App.css'
import Router from './router/Router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useFetch } from './context/FetchContext'
import { useTheme } from './context/ThemeContext'
function App() {

  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App
