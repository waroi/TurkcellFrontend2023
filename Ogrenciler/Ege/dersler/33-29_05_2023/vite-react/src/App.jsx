import { useState } from "react";
import "./App.css";
import Deneme from "./components/Deneme";
import ListItem from "./components/ListItem";

function App() {
  const [name, setName] = useState("Ege");
  const students = ["Ege", "Varol", "Gizem", "Fatma", "Furkan"];
  const data = [
    {
      id: 1,
      name: "Galatasaray",
      color1: "red",
      color2: "yellow",
      w: "300px",
    },
    {
      id: 1,
      name: "Fenerbahçe",
      color1: "yellow",
      color2: "navy",
      w: "250px",
    },
    {
      id: 1,
      name: "Beşiktaş",
      color1: "black",
      color2: "white",
      w: "200px",
    },
  ];
  return (
    <>
      <Deneme isim={name} />
      <button onClick={() => setName("Varol")}>Change Name</button>

      <br />
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} index={index} />
        ))}
      </ul>

      {data.map((item) => {
        return (
          <li
            key={item.id}
            style={{
              background: item.color1,
              color: item.color2,
              width: item.w,
              listStyle: "none",
            }}
          >
            {item.name}
          </li>
        );
      })}
    </>
  );
}

export default App;
