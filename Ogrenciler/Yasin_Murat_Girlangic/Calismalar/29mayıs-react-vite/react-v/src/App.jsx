import { useState } from 'react'
import Deneme from './components/Deneme';
import ListItem from './components/ListItem';
import './App.css';


function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("Yasin");
  const students = ["Yasin", "Murat", "Gırlangıç"];
  const data=[
    {
      id:1,
      name:"Galatasaray",
      color1:"red",
      color2:"yellow",
    },
    {
      id:2,
      name:"Fenerbahçe",
      color1:"yellow",
      color2:"blue",
    },
    {
      id:3,
      name:"Beşiktaş",
      color1:"black",
      color2:"white",
    },
  ]
  return (
    <>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Deneme isim={name} />
      <button onClick={() => setName("Murat")}>İsim değiştir</button>
      <hr />
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} index={index}/>
        ))}
      </ul>
      <hr />
      {data.map((item) => {
        return (
          <li 
          key={item.id}
          style={{
            backgroundColor:item.color1,
            color:item.color2,
            width:"300px",
            listStyle:"none",
          }}
          >
            {item.name}
          </li>  
        )
        })}
        
    </>
  );
}

export default App;
