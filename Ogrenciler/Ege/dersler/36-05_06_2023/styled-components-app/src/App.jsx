/* eslint-disable react/prop-types */
// import { useState } from "react"
import styled from "styled-components";

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
      <Button>Deneme 2 styled</Button>
      <PrimaryButton size="30" onClick={() => console.log("clicked")}>
        Deneme 3 styled
      </PrimaryButton>
    </>
  );
}
export default App;
