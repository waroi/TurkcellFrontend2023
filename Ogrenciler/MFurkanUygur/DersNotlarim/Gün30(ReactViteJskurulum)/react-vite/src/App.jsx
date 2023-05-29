import { useState } from 'react'
import './App.css'

// import Deneme from './components/Deneme'
// import ListItem from './components/ListItem'


function App() {
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState("Furkan")
  // const students = ["furkan", "uygur", "ali", "veli"]
  const data = [
    {
      id: 1,
      name: "sivasspor",
      color1: "red",
      color2: "white",
      width:"200px"
    },
    {
      id: 2,
      name: "bjk",
      color1: "black",
      color2: "white",
      width:"150px"
    },
    {
      id: 3,
      name: "gs",
      color1: "red",
      color2: "yellow",
      width:"100px"
    }
  ]
  return (
    <>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      {/* 
      <Deneme isim={name}/>
      <button onClick={()=>setName("Uygur")}>Change Name</button> */}

      {/* <ul>
        {students.map((student, index) => (
          <ListItem student={student} key={index} index={index} />
        ))}
      </ul> */}

      <ul>
        {
          data.map((item) => {
            return (
              <li key={item.id} style={{ background: item.color1, color: item.color2, width: item.width,listStyle:'none' }}>
                {item.name}
              </li>
            )
          })
        }
      </ul>

    </>
  )
}

export default App
