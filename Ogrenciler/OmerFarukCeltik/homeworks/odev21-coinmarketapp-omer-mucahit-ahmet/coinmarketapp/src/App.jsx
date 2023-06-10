import Navbar from './components/Navbar'
import './App.css'
// import Router from './router/Router'
// import { DataProvider, useFetch } from './context/FetchContext'
import  { ThemeProvider, useTheme }  from './context/ThemeContext'
function App() {
// const { data } = useFetch();
const { theme } = useTheme();
// console.log(theme);
// console.log(data);
  return (
    <>
    {/* <DataProvider> */}
   
    <Navbar/>
    {
      <div>{theme}</div>
    }
      <h1>conimarketapp</h1>
      {/* <Router/> */}

      {/* </DataProvider> */}
    </>
  )
}

export default App
