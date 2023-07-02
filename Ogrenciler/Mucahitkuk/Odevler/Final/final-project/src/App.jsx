import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RouteConfig from './routes/Route';
function App() {

  return (
    <>
    <Header />
    <RouteConfig/>
    <Footer />
    </>
  )
}

export default App
