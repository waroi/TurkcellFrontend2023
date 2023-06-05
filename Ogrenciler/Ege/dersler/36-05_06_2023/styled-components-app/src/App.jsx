/* eslint-disable react/prop-types */
import { useRef } from "react";
import styled from "styled-components";
import Portal from "./components/Portal";

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

  const divRef = useRef();

  return (
    <>
      <h1>Styled Components</h1>
      <button onClick={() => console.log(divRef.current.textContent)}>
        Deneme 1
      </button>
      <Button>Deneme 2 styled</Button>
      <div ref={divRef}>Ref Deneme Yazısı</div>
      <PrimaryButton size="30" onClick={() => console.log("Deneme")}>
        Deneme 3 Primary Button
      </PrimaryButton>
      <Portal text="Body" target={document.body} />
    </>
  );
}
export default App;
