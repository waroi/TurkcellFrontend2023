import "./App.css";
import Deneme from "./Deneme.jsx";
import { useState } from "react";

function App() {
  let name = "T";
  const [count, setCount]=useState(0)
  return (
    <div className="App">
      <Deneme />
      <header>Merhaba {name} {count}</header>
      <button onClick={()=>setCount(count**2+1)}>art</button>
    </div>
  );
}

export default App;
