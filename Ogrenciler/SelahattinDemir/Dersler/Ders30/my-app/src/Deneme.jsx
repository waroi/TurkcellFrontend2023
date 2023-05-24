import React from 'react'

const Deneme = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <div>{ count }</div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <button onClick={() => setCount(count - 1)} >Azalt</button>
    </div>
    
  )
}

export default Deneme