import { useState } from 'react'
import './App.css'

function App() {
  const [deger, setDeger] = useState(0);
  // function Arttır(){setDeger(deger+1)}
  // function Azalt(){setDeger(deger-1)}
  const Arttır = () => setDeger(deger + 1)
  const Azalt = () => setDeger(deger - 1)
  return (
    <div className='App'>
      <button onClick={Arttır}>Arttır</button>
      <p>{deger}</p>
      <button onClick={Azalt}>Azalt</button>
    </div>
  )
}

export default App




