import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("useEffect çalıştı 1");
  }, []); //sadece mount edildiğinde çalışır
  useEffect(() => {
    console.log("didUpdate useEffect çalıştı 2");
  }); //herhangi bir state değişikliği olduğunda çalışır

  useEffect(() => {
    console.log("stateUpdate useEffect çalıştı 3");
  }, [count, count2]); // count state değişikliği olduğunda çalışır

  useEffect(() => {
    return () => {
      console.log("unMount useEffect çalıştı");
    };
  });

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>useEffect</h1>
      <h2 onClick={() => setCount2(count2 + 1)}>{count2}</h2>
    

    </>
  )
}

export default App
