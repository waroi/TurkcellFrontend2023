import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import styled from "styled-components";
import Portal from "./components/Portal";

function App() {
  const Button = styled.button`
    background-color: #123456;
    color: red;
    border: 1px solid red;
    border-radius: 10px;
  `;
  const PrimaryButton = styled(Button)`
    background-color: #${(props) => props.bgColor};
    color: black;
    font-size: ${(props) => props.size}px;
  `;
  const divRef = useRef(null);
  const [portalTarget, setPortalTarget] = useState(document.body);

  const handlePortalClick = () => {
    setPortalTarget((prevTarget) =>
      prevTarget === divRef.current ? document.body : divRef.current
    );
  };

  return (
    <>
      <h1>Styled Components</h1>
      <button>Deneme 1</button>
      <div id="div" ref={divRef}>
        ref deneme yazısı
      </div>
      <Button>Deneme 2 styled</Button>
      <PrimaryButton
        size="10"
        bgColor="ff00ff"
        onClick={() => console.log("gfd")}
      >
        Deneme 3 styled
      </PrimaryButton>
      <div onClick={handlePortalClick}>
        <Portal text="buradayım" target={portalTarget} />
      </div>
    </>
  );
}

export default App;
