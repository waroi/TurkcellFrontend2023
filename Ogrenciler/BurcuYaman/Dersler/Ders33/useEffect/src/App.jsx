import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect çalıştı')
  }, []) // [] boş dizi verilirse sadece ilk renderda çalışır

  useEffect(() => {
    console.log('useEffect çalıştı')
  }) // hiçbir şey verilmezse her renderda çalışır

  useEffect(() => {
    console.log('useEffect çalıştı')
  }, [count]) // count değişkeni değiştiğinde çalışır

  useEffect(() => {
    return () => {
      console.log('useEffect temizlendi')
    }
  }) // hiçbir şey verilmezse her renderda çalışır


  return (
    <>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Arttır</button>

    </>
  )
}

export default App
