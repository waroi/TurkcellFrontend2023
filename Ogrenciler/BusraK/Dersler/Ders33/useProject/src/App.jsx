import { useEffect, useState } from "react";

import "./App.css";
import Deneme from "./components/Deneme";

function App() {
  const [sayac, setSayac] = useState(0);

  //ilk paramatre arrow function ikinci paramtre ise array (didUpdate)
  useEffect(() => {
    console.log("mount useEffect çalıştı");
  }, []);

  useEffect(() => {
    console.log("didUpdate useEffect çalıştı");
  }); //herhangibir state değiştiğinde çalışır

  useEffect(() => {
    console.log("stateUpdate useEffect çalıştı");
  }, [sayac]); //sadece bu state veya state'ler değiştiğinde çalışır

  useEffect(() => {
    return () => {
      console.log("stateUpdate useEffect çalıştı");
    };
  }); //sadece return attığımız için return oldu

  return (
    <>
      <h1 onClick={() => setSayac(sayac + 1)}>useEffects</h1>
      <Deneme />
    </>
  );
}

export default App;
