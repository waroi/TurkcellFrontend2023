import { useState } from 'react'
import Deneme from './Deneme'
import "./App.css"
import ListItem from './listItem'
import ListData from './listData'


function App() {
  const [name, setName] = useState("");
const student = ["ayşe","ali","ahmet","cevdet"];
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
    <button onClick={() => setName("Ömer")}>Change</button>
      <ul>
         {
          student.map((item,i) => (
            <ListItem key={i} student={item}/>
          ))}
      </ul>
      {/* <ul>
         {
          data.map((item) => (
            <ListData>
          ))
         }
      </ul> */}
    </>
  )
}

export default App
