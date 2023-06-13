import { useState } from 'react'
import './App.css'
import Body from './components/Body/Index'
import Head from './components/Header/Head.jsx'

function App() {
  const [page, setPage] = useState(1) 
  return (
    <>
    <Head setPage={setPage} />
    <Body page={page} />
    </>
  )
}
export default App
