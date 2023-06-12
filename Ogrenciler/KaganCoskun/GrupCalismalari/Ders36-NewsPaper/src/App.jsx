import Router from './routers/Router'
import Header from './components/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <main style={{minHeight: '100vh'}}>
      <Router />
      </main>
      <Footer />
    </>
  )
}

export default App
