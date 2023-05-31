import { useState } from 'react';
import Deneme from '../components/deneme';
import ListItem from '../components/ListItem';
import './App.css';



function App() {
  // const [count, setCount] = useState(0)
const [isim, setIsim] = useState("Burcu");
const students = ["Burcu", "Yaman", "Mehmet", "Ali", "Ayşe", "Fatma"];
const data = [
  {
    id: 1,
    name: "Beşiktaş",
    color1: "black",
    color2: "white",
    w:"300px"

  },
  {
    id: 2,
    name: "Galatasaray",
    color1: "red",
    color2: "yellow",
    w:"200px"
  },
  {
    id: 3,
    name: "Fenerbahçe",
    color1: "blue",
    color2: "yellow",
    w:"100px",
     }
]
  return (
    <>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Deneme isim = {isim}/>
      <button onClick={() => setIsim("Burcu Yaman")}>İsim değiştir</button>
      <hr />
      <ul>
        {students.map((student, index) => (
<ListItem key={index} student={student} index={index} />
        ))}
      </ul>
      <hr />
      {data.map((item) => {
       return (
        <li key={item.id} style={{backgroundColor: item.color1, color: item.color2, width: item.w}}>
          {item.name} 
        </li>
       )
      })}
    </>
  )
}

export default App
