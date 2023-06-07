import { useEffect,useState } from 'react'
import './App.css'
import Deneme from './components/Deneme'

function App() {
  const [count, setCount] = useState(0);
useEffect(() => {
  console.log(' Mount useEffect çalıştı')
}, []);
useEffect(() => {
  console.log('didUpdate useEffect çalıştı')
}, );

useEffect(() => {
  console.log('stateUpdate useEffect çalıştı')
}, [count]);

useEffect(() => {
  return () => {
  console.log(' Mount useEffect çalıştı')
  }
}, []);

  return (
    <>
     <h1 onClick=
        {() => setCount(count + 1)}> useEffect
        
     </h1>
     <Deneme />
    </>
  )
}

export default App
