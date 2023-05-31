import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("Varol");
  const students = ["Burak", "Ahmet", "Mehmet", "Ayşe", "Fatma"];
  return (
    <>
      <Deneme isim={name} />
      <button onClick={() => setName("Burak")}>Change Name</button>
      <hr />
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} index={index} />
        ))}
      </ul>🐱‍👤
    </>
  );
}

export default App;
