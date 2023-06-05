/* eslint-disable react/prop-types */
import { useRef } from "react";
import styled from "styled-components";
import "App.css";
import { Portal } from "./assets/components/Portal";

function App() {
  const Button = styled.button`
    background-color: red;
    color: #fff;
    border-radius: 10px;
  `;

  const PrimaryButton = styled(Button)`
    background-color: green;
    font-size: ${(props) => props.size}px;
  `;
  
  const divRef = useRef(null);
  return (
    <>
      <h1>Styled Components</h1>
      <button onClick={() => console.log(divRef.current.textContent)}>
        {/*document.querySelector yazmak yerine kullanıyoruz*/}
        Deneme 1
      </button>
      <div ref={divRef}>Ref Deneme Yazısı</div>
      <Button>Deneme 2</Button>
      <PrimaryButton size="30" onClick={() => console.log}>
        Deneme 3 Primary
      </PrimaryButton>
      <Portal text="Body" target={document.body}></Portal>

      {/*Portal Komponentine tıklandığında yeri div eleminin içi olarak değişsin -id ile belirt-*/}
    </>
  );
}

export default App;
