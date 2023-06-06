import { useRef } from 'react'
import './App.css'
import styled from "styled-components"
import  Portal  from "./components/Portal"

function App() {
  const Button = styled.button`
  background-color:#123456;
  color:red;
  border:1px solid red;
  border-radius:10px;
  `
  const PrimaryButton = styled(Button)`
  background-color:#${props => props.bgColor};
  color:black;
  font-size:${props => props.size}px;
  `
const divRef = useRef(null)
  return (
    <>
      <h1>Styled Components</h1>
      <button onClick={()=>console.log(divRef.current.textContent)}>Deneme 1</button>
      <div id='div' ref={divRef}>ref deneme yazısı</div>
      <Button>Deneme 2 styled</Button>
      <PrimaryButton size="10" bgColor="ff00ff" onClick={() => console.log("gfd")}>Deneme 3 styled</PrimaryButton>
      {/* <Portal text="dünyayı ele geçirmek" target="#div" /> */}
    </>
  )
}

export default App
