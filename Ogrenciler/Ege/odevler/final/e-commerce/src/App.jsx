import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Router from "./routes/Router"

import "./App.css"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

function App() {


  return (
    <div className="appContainer">
      <ScrollToTop />
      <Navbar />
      <div className="routerContainer">
        <Router />
      </div>
      <Footer />
    </div>
  )
}

export default App
