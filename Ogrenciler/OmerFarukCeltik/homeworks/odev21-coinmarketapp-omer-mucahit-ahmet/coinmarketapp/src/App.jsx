import Navbar from './components/Navbar'
import './App.css'
import Router from './router/Router'
import { useFetch } from './context/FetchContext'
import { useTheme } from './context/ThemeContext'
function App() {
  const { datas } = useFetch();
  const { theme } = useTheme();
  console.log(theme);
  console.log(datas);
  return (
    <>
      <Navbar />
      {datas.coins}
      <h1>conimarketapp</h1>
      <Router />
    </>
  )
}

export default App
