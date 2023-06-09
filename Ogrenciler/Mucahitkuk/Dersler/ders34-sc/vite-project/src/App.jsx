/* eslint-disable react/prop-types */
import './App.css'
import styled from "styled-components"

function App() {
 const Button = styled.button`
  background-color: red;
    border: none;
    border-radius: 5px;`

    const PrimaryButton = styled(Button)`
    background-color: blue;
    color: white;
    font-size: ${props => props.size}px;`

  return (
    <>
    <button>test</button>
    <Button>test</Button>
    <PrimaryButton size={20} onClick={() => console.log("clicked")}>test</PrimaryButton>
    </>
  )
}

export default App
