import React, {useState} from 'react'
import ClassComponent from './ClassComponent'

const Deneme = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Deneme Component'i</h4>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <ClassComponent />
    </div>
  )
}

export default Deneme
