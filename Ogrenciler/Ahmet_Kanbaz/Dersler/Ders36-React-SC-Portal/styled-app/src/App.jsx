import './App.css'
import styled from 'styled-components'
import {useRef} from 'react'
import UsingUseRef from './components/UsingUseRef'
import MoveToPortal from './components/MoveToPortal/MoveToPortal'

function App() {
  const defaultRef = useRef(null)
  const RedButton = styled.button`
    background-color: red;
    color: white;
    padding: 7px 12px;
    border-radius: 12px;
    transition: all .3s ease-in-out;
    font-size: 1.1rem;
    &:hover {
      color: #000000;
      background-color: #fdb2b2;
    }
  `;

  const PrimaryButton = styled(RedButton)`
    background-color: #1e90ff;
    &:hover {
      background-color: #b2dffb;
    }
  `;
  return (
    <>
      <h1>Vite + React Styled Components</h1>
      <button>Default Button</button>
      <RedButton onClick={() => console.log(defaultRef.current.textContent)}>Red Button Styled Components</RedButton>
      <PrimaryButton>Primary Button Styled Components</PrimaryButton>
      <UsingUseRef defaultRef = {defaultRef}/>
      <MoveToPortal />
    </>
  )
}

export default App
