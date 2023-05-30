import { useState } from "react";
import "./App.css";
import Deneme from "./components/Deneme";
import Listİtem from "./components/Listİtem";

function App() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("Selim");
  const students = ["ayşe", "gülçin", "selim", "yavuz"];
  const data = [
    {
      id: 1,
      name: "Trabzonspor",
      color1: "red",
      color2: "blue",
    },
    {
      id: 2,
      name: "Rizespor",
      color1: "green",
      color2: "white",
    },
    {
      id: 3,
      name: "İstanbulspor",
      color1: "black",
      color2: "yellow",
    },
  ];
  return (
    <>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Deneme isim={name} />
      <button
        onClick={() => {
          setName("yavuz");
        }}
      >
        change name
      </button>
      <hr />
      <ul>
        {students.map((student, i) => (
          <Listİtem key={i} student={student} />
        ))}
      </ul>
      {data.map((team) => {
        return (
          <li
            key={team.id}
            style={{
              background: team.color1,
              color: team.color2,
              width: "300px",
            }}
          >
            {team.name}
          </li>
        );
      })}
    </>
  );
}

export default App;
