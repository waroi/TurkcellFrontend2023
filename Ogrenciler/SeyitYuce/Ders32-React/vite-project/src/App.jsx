import { useState } from "react";
import "./App.css";
import Deneme from "./components/Deneme";
import ListItem from "./components/ListItem";

function App() {
  const [name, setName] = useState("Murtaza");
  const students = ["Murtaza", "Seyit", "Yılmaz", "M2"];
  const data = [
    {
      id: 1,
      name: "Beşiktaş",
      color1: "black",
      color2: "white",
      width: "300px",
    },
    {
      id: 2,
      name: "Fb",
      color1: "blue",
      color2: "yellow",
      width: "250px",
    },
    {
      id: 3,
      name: "Gs",
      color1: "yellow",
      color2: "red",
      width: "200px",
    },
    {
      id: 4,
      name: "Ts",
      color1: "maroon",
      color2: "blue",
      width: "150px",
    },
    {
      id: 5,
      name: "Es",
      color1: "red",
      color2: "black",
      width: "100px",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = () => {
    setCurrentIndex((CurrentIndex) => (CurrentIndex + 1) % data.length);
  };

  return (
    <>
      <Deneme isim={name} />
      <button onClick={() => setName("Kazım")}>Change Name</button>
      <hr />
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} index={index} />
        ))}
      </ul>
      <hr />
      {data.map((item) => {
        return (
          <li
            key={item.id}
            style={{
              backgroundColor: item.color1,
              color: item.color2,
              width: item.width,
              listStyle: "none",
            }}
          >
            {item.name}
          </li>
        );
      })}
      <hr />
      <button onClick={() => handleButtonClick()}>Takım değiştir</button>
      <p
        style={{
          color: data[currentIndex].color1,
          backgroundColor: data[currentIndex].color2,
        }}
      >
        {data[currentIndex].name}
      </p>
    </>
  );
}

export default App;
