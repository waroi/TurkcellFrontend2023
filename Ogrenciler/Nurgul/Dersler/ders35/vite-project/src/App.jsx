/* eslint-disable react/prop-types */
// import { useState } from 'react'
import styled from "styled-components";

import "./App.css";

function App() {
  const Button = styled.button`
    background-color: #ff0000;
    color: #fff;
    border-radius: 10px;
  `;
  const PrimaryButton = styled(Button)`
    background-color: #00ff00;
    font-size: ${(props) => props.size}px;
  `;
  return (
    <>
      <h1>Styled Components</h1>
      <button>Deneme 1</button>
      <Button>Deneme 2 Styled</Button>
      <PrimaryButton size="30" onClick={() => console.log("Deneme")}>
        Deneme 3 Primary
      </PrimaryButton>
    </>
  );
}

export default App;
