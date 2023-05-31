import { useState } from "react";
import Deneme from "./components/Deneme";
import ListItem from "./components/ListItem";
import "./App.css";

function App() {
  const [name, setName] = useState("Varol");
  const students = ["Burak", "Ahmet", "Mehmet", "Ayşe", "Fatma"];
  const data = [
    {
      id: 1,
      name: "Beşiktaş",
      color1: "black",
      color2: "white",
      w: "300px",
    },
    {
      id: 2,
      name: "Galatasaray",
      color1: "red",
      color2: "yellow",
      w: "250px",
    },
    {
      id: 3,
      name: "Feberbahçe",
      color1: "blue",
      color2: "yellow",
      w: "200px",
    },
  ];
  return (
    <>
      <Deneme isim={name} />
      <button onClick={() => setName("Burak")}>Change Name</button>
      <hr />
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
