import { useState } from 'react'
import styled from 'styled-components'
import './App.css';

function App() {

  const Button = styled.button`
    background-color: red;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: blue;
    }
  `
  const PrimaryButton = styled(Button)`
  background-color: blue;
  font-size: ${(props) => props.size}px;
  &:hover {
    background-color: red;
  }
`

  return (
    <>
      <h2>Styled Component</h2>
      <button>Deneme 0</button>
      <Button>Deneme 1</Button>
      <PrimaryButton size="30" onClick={()=> console.log("Deneme")}>Deneme 2</PrimaryButton>
    </>
  )
}

export default App
