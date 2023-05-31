import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect çalıştı");
  }, []); // [] : sadece mount olduğunda çalışır
  useEffect(() => {
    console.log("didUpdate useEffect çalıştı");
  }); // didUpdate: herhangi bir state değiştiğinde çalışır
  useEffect(() => {
    console.log("stateUpdate useEffect çalıştı");
  }, [count]); // stateUpdate: içine girilen state değiştiğinde çalışır
  useEffect(() => {
    return () => {
      console.log("Unmount useEffect çalıştı");
    };
  }, []); // unmount : sadece unmount olduğunda çalışır
  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>useEffect</h1>
    </>
  );
}

export default App;
