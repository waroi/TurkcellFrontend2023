import {useState} from 'react'
import './App.css'
import SingleTask from '../components/SingleTask'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Vite + React ToDo App</h1>
      <div>
        <button type='button' onClick={() => setCount(count - 1)}>Azalt</button>
        <SingleTask newCount = {count}/>
        <button type='button' onClick={() => setCount(count + 1)}>Arttır</button>
      </div>
    </>
  )
}

export default App
