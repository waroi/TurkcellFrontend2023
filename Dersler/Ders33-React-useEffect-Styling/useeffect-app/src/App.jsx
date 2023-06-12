import { useState, useEffect } from "react";
import "./App.css";
import Deneme from "./components/Deneme";

function App() {
  const [sayac, setSayac] = useState(0);
  useEffect(() => {
    console.log("Mount useEffect çalıştı");
  }, []); // []: sadece mount olduğunda çalışır
  useEffect(() => {
    console.log("didUpdate useEffect çalıştı");
  }); // didUpdate: herhangi bir state değiştiğinde çalışır
  useEffect(() => {
    console.log("stateUpdate useEffect çalıştı");
  }, [sayac]); // didUpdate: sayac state değiştiğinde çalışır
  useEffect(() => {
    return () => {
      console.log("Unmount useEffect çalıştı");
    };
  }, []); // []: sadece unmount olduğunda çalışır
  return (
    <>
      <h1 onClick={() => setSayac(sayac + 1)}>useEffect</h1>
      <Deneme />
    </>
  );
}

export default App;
