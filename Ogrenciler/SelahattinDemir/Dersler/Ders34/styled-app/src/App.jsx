/* eslint-disable react/prop-types */
import './App.css'
import styled from 'styled-components'
import { useRef, useState } from "react";
import Portal from "./components/Portal";

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

  const divRef = useRef();
  const [portalTarget, setPortalTarget] = useState(document.body);

  const handlePortalClick = () => {
    setPortalTarget(prevTarget =>
      prevTarget === divRef.current ? document.body : divRef.current
    );
  };

  return (
    <>
      <button onClick={handlePortalClick}>Deneme 1</button>
      <div ref={divRef}></div>
      <Button>Deneme2</Button>
      <Button2 size={5}>Deneme3</Button2>
      <Portal handlePortalClick={handlePortalClick} text="Body" target={portalTarget} />

    </>
  )
}

export default App
