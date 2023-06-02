// import { useState } from "react";

import { useEffect } from "react";
import Deneme from "./components/Deneme";
import "./App.css";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <h1>useEffect</h1>
      <Deneme />
    </>
  );
}

export default App;
