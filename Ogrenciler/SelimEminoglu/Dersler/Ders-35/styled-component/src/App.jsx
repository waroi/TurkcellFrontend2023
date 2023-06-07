import React, { useRef } from "react";
import "./App.css";
import styled from "styled-components";
import Deneme from "./components/Deneme";

function App() {
  const Button = styled.button`
    border: 3px solid black;
  `;

  const PrimaryButton = styled(Button)`
    background-color: red;
    font-size: ${(props) => props.size}px;
  `;

  const divRef = useRef(null);

  return (
    <>
      {/* {divRef.current.textContent ile erişim yapılıyor} */}
      <div ref={divRef}>deneme yazısı</div>
      <Deneme text="Selim" target={document.body} />
      <Button>sonraki</Button>
      <PrimaryButton size="30">ikinci</PrimaryButton>
      <button>deneme</button>
    </>
  );
}

export default App;
