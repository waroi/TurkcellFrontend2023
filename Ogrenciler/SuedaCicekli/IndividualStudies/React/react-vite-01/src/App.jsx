import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [timer, setTimer] = useState(5)

  useEffect(() => {

    if (timer !== 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1)
      }, 1000)

      return () => clearInterval(interval)
    }



  }, [timer])

  return (
    <div className='App'>
      <div style={{
        height: "150px", width: "150px", backgroundColor: "blue", borderRadius: "50%",
        color: "white", fontSize: "30px", marin: "10px auto", lineHeight: "150px"
      }}>
        {timer}
      </div>
    </div>
  )
}

export default App
