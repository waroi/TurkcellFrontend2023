import { useEffect, useState } from 'react'
import './App.css'
import Deneme from './components/Deneme'

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Mount useEffect çalıştı")
  }, []) //[] sadece mount olduğunda çalışır 

  useEffect(() => {
    console.log(" didUpdate useEffect çalıştı")
  }) //didupdate :herhangi bir state değiştiğinde çalışır

  useEffect(() => {
    console.log("stateUpdate useEffect çalıştı")
  }, [count]) // didupdate :count  değiştiğinde çalışır

  useEffect(() => {
    return () => {
      console.log("Unmount useEffect çalıştı")
    }
  }, []) //[] sadece unmount olduğunda çalışır

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>UseEffect</h1>
      <Deneme />
    </>
  )
}

export default App
