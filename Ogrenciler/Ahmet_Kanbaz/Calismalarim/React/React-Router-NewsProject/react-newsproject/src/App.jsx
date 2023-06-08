import Router from "./routes/Router"
import { useNavigate } from "react-router-dom"
function App() {
const navigate = useNavigate()
  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={() => navigate('news')}>News</button>
      <Router />
    </>
  )
}

export default App
