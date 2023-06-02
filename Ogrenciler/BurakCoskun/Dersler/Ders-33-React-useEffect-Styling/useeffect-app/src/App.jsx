import { useEffect, useState } from "react";
import "./App.css";
import Deneme from "./components/Deneme";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mount useEffect çalıştı ");
  }, []); // [] => sadece mount olduğunda çalışır
  useEffect(() => {
    console.log("didUpdate useEffect çalıştı");
  }); // her render olduğunda çalışır
  useEffect(() => {
    console.log("stateUpdate useEffect çalıştı");
  }, [count]); // count değiştiğinde çalışır

  useEffect(() => {
    return () => {
      console.log("Unmount useEffect çalıştı");
    };
  }, []); // [] => sadece unmount olduğunda çalışır

  return (
    <>
      <h1>useEffect</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Deneme />
    </>
  );
}

export default App;
