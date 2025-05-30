/* eslint-disable react/prop-types */
import { useRef } from "react";
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

  const divRef = useRef();

  return (
    <>
      <h1>Styled Components</h1>
      <button onClick={() => console.log(divRef.current.textContent)}>
        Deneme 1
      </button>
      <div ref={divRef}>ref deneme yazısı</div>
      <Button>Deneme 2 Styled</Button>
      <PrimaryButton size="30" onClick={() => console.log("Deneme")}>
        Deneme 3 Primary
      </PrimaryButton>
      <Portal text="Body" target={document.body} />
      {/* portal compenentine tıklandığında yeri div elementinin içi olarak değişsin
      https://legacy.reactjs.org/docs/portals.html
      https://tsafaelmali.medium.com/react-react-portal-nedir-46cb5fa9c0cc

      https://collectapi.com/tr/api/weather/hava-durumu-api
      https://openweathermap.org/api/one-call-3
      bu aplerden biri ile hava durumu uygulaması yapacağız, hava durumu bilgilerini
      alıp ekranda göstereceğiz. styled components kullanacağız.
      */}
    </>
  );
}

export default App;
