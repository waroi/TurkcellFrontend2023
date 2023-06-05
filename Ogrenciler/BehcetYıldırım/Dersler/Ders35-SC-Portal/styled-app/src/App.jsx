// import { useState } from 'react'
import Button from "./components/Deneme"

import './App.css'
import styled from "styled-components"

function App() {
  const Button = styled.button`
  background-color: red;
  color: white;
  border-radius: 10px;
  `
  const PrimaryButton = styled(Button)`
  background-color: green;
  font-size :${props => props.size}px;`

  return (
    <>
      <h1>Styled Components</h1>
      <button>Deneme 1</button>
      <Button>Deneme 2 Styled</Button>
      <PrimaryButton size ="30">Deneme 3 Styled</PrimaryButton>
    </>
  )
}

export default App
