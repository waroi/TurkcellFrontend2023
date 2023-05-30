import { useState } from "react";
import Deneme from "./components/Deneme";
import ListItem from "./components/ListItem";
import "./App.css";

function App() {
  const [name, setName] = useState("Burak");
  const students = ["Burak", "Varol", "Mehmet", "Ahmet"];
  const teamData = [
    {
      id: 1,
      name: "Beşiktaş",
      color1: "black",
      color2: "white",
    },
    {
      id: 2,
      name: "Fenerbahçe",
      color1: "yellow",
      color2: "blue",
    },
    {
      id: 3,
      name: "Galatasaray",
      color1: "red",
      color2: "yellow",
    },
  ];
  return (
    <>
      <Deneme isim={name} />
      <button onClick={() => setName("Varol")}>Change Name</button>
      <hr />

      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} index={index} />
        ))}
      </ul>

      <ul>
        {teamData.map((team) => {
          return (
            <li
              key={team.id}
              style={{
                listStyle: "none",
                backgroundColor: team.color1,
                color: team.color2,
                width: "300px",
              }}
            >
              {team.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
