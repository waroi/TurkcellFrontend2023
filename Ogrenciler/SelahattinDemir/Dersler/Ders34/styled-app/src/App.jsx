/* eslint-disable react/prop-types */
import './App.css'
import styled from 'styled-components'

function App() {
  const Button = styled.button`
    background-color: red;
    color: white;
    font-size: 1.5rem;
    `
  const Button2 = styled(Button)`
    background-color: blue;
    font-size: ${props => props.size}rem;
  `

  return (
    <>
      <button>Deneme1</button>
      <Button>Deneme2</Button>
      <Button2 size={5}>Deneme3</Button2>
    </>
  )
}

export default App
