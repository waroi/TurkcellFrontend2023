/* eslint-disable react/prop-types */
import './App.css'
import styled from 'styled-components'
import {Input} from './styledComps'

function App() {

  const Button = styled.button`
    background-color: red;
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: blue;
    }
  `

  const PrimaryBtn = styled(Button)`
    background-color: green;
    &:hover {
      background-color: yellow;
    }
    font-size: ${(props) => props.size}px;
  `

  return (
    <>
      <h1>Kagan Coskun Styled Components</h1>
      <button>Deneme 1</button>
      <Button>Deneme 2</Button>
      <PrimaryBtn size="50" onClick={()=>console.log("Denem")}>Deneme 3</PrimaryBtn >
      <Input type='text'/>
    </>
  )
}

export default App
