import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralForm />} />
      </Routes>
    </div>
    </>
  )
}

export default App
