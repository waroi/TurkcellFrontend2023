import { useState } from 'react'
import Header from './components/header/header'
import RandomJoke from './components/RandomJoke/RandomJoke'
import Router from './routes/router'

function App() {
  return (
    <>
      <Header/>
      <Router/>
    </>
  )
}

export default App
