import { useState } from "react";
import Deneme from "./components/Deneme";
import "./App.css";
import ListItem from "./components/ListItem";
function App() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("Busra");
  const [surname, setSurname] = useState("Kosnak");
  const students = ["Busra", "Burak", "Berkay", "Ayşe"];
  const data = [
    { id: 1, name: "Beşiktaş", color1: "black", color2: "white", w: "300px" },
    { id: 2, name: "Galatasaray", color1: "red", color2: "yellow", w: "250px" },
    { id: 3, name: "Feberbahçe", color1: "blue", color2: "yellow", w: "200px" },
  ];
  return (
    <>
      {/*    
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Deneme isim={name} surname={surname} />
      <button
        onClick={() => {
          setName("Burak");
          setSurname("Who");
        }}
      >
        {" "}
        change name and surname
      </button>
      <hr />
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} />
        ))}
      </ul>
      {data.map((item) => {
        return (
          <li
            key={item.id}
            style={{
              background: item.color1,
              color: item.color2,
              width: "300px",
              height: "45px",
            }}
          >
            <h5>{item.name}</h5>
          </li>
        );
      })}
    </>
  );
}

export default App;
