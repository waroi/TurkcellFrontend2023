/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import styled from "styled-components";
import Portal from "./components/Portal";

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

  const pRef = useRef();
  const divRef = useRef();
  const [showPortal, setShowPortal] = useState(false);

  const handleDivClick = () => {
    setShowPortal(true);
  };
  const handleButtonClick = () => {
    setShowPortal(false);
  };

  return (
    <>
      <h1>Styled Components</h1>
      {showPortal ? (
        <Portal text="-Arif deli olm bu" target={pRef.current}>
          <div ref={divRef}>Saniyede Bilgi deneyim disiplin</div>
        </Portal>
      ) : (
        <div>Hoop nasıl tak diye burdayım</div>
      )}
      <PrimaryButton size="30" onClick={handleButtonClick}>
        Deneme 3 Primary
      </PrimaryButton>

      <p ref={pRef} onClick={handleDivClick}>
        Tamam da niye ordasın
      </p>
    </>
  );
}

export default App;
