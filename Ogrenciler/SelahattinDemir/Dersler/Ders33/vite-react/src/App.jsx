import { useState } from 'react'
import Deneme from './components/Deneme'
import ListItems from './components/ListItems'

import './App.css'

function App() {
  const [name, setName] = useState('Selahattin');
  const students = ["Selahattin", "Ahmet", "Mehmet", "Ali", "Veli"];
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
      <h1>Vite + React</h1>
      
        <Deneme isim={name} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <hr />
      <ul>
        {students.map((student, index) => (
          <ListItems key={index} student={student} index={index}/>
        ))}
      </ul>
      <hr />
      {data.map((item) => (
        <div key={item.id} style={{backgroundColor: item.color1, color: item.color2, width: item.w}}>
          {item.name}
        </div>
      ))}
      <hr />
    </>
  )
}

export default App
