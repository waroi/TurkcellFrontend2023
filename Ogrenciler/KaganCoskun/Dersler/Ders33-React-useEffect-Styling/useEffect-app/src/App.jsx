import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    console.log('useEffect çalıştı')
  }, [])

  return (
    <>
      <h1>useEffect</h1>
    </>
  )
}

export default App
