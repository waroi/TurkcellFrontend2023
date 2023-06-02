// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Deneme from "./Components/Deneme";

function App() {
  const [sayac, setSayac] = useState(0);
  useEffect(() => {
    console.log("Mount UseEffect Çalıştı");
  }, []); // []:sadece mount olduğunda çalışır
  useEffect(() => {
    console.log("didUpdate UseEffect Çalıştı");
  }); //didUpdate:Herhangi bir state çalıştığında çalışır.
  useEffect(() => {
    console.log("stateUpdate UseEffect Çalıştı");
  }, [sayac]); //stateUpdate: sayaç state değiştiğinde çalışır.
  useEffect(() => {
    return () => {
      console.log("Unmount UseEffect Çalıştı");
    };
  }, []); //Unmount:

  return (
    <>
      <h1 onClick={() => setSayac(sayac + 1)}>Deneme</h1>
    </>
  );
}

export default App;
