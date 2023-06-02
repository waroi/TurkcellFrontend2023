import { useState } from 'react' //react'den npmden gelene importlar en üstte
import Deneme from './components/Deneme' // kendi componentlerim 
import ListItem from './components/ListItem'
import './App.css' //style dosyalarım en altta

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("İsim Gelicek")
  const students = ["Sueda", "Mehmet", "Ayşe", "Fatma", "Ali"]
  const data =[
    {
      id:1,
      name:"Galatasaray",
      color:"red",
      color2:"yellow",
      w:"300px",
    },
    {
      id:2,
      name:"Beşiktaş",
      color:"black",
      color2:"white",
      w:"350px",
    },{
      id:3,
      name:"Fenerbahçe",
      color:"yellow",
      color2:"blue",
      w:"400px",
    }
  ]

  return (
    <>
      <Deneme isim={name} />
      <button onClick={() => setName("Sueda")}>Changes Name</button>
      <hr />
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} index={index}/>
        )
        )}
      </ul>
      {data.map((item) => {
        return (
          <li key={item.id} 
          style={{
            background:item.color, 
            color:item.color2, 
            width:item.w,
            listStyle:"none",
            }}>
            {item.name}
          </li>
        )
      
      })}
    </>
  );
}

export default App
