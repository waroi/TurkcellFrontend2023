// import { useState } from 'react'
import './App.css';
import styled from 'styled-components';

function App() {

  const Button = styled.button`
  background-color: yellow;
  color : red;
  border-radius: 50px;
  `
  const PrimaryButton = styled(Button)`
  background-color: blue;
  color : white;
  `

  return (
    <>
      <h1>Styled Components Çalısması</h1>
      <button>Deneme Butonu</button>
      <Button>Styled Components Butonu</Button>
      <PrimaryButton>Primary Buton</PrimaryButton>
    </>
  )
}


export default App
