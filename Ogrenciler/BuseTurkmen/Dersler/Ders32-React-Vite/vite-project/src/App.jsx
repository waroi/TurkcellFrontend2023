import { useState } from 'react'
import Deneme from './components/Deneme'
import ListItem from './components/ListItem'
import './App.css'

function App() {
  // const [count, setCount] = useState(0),
  const[name, setName] = useState("Buse");
  const students = ["Buse" , "Burcu" , "Serpil", "İlke", "Miray"]

  return (
    <>
      <Deneme isim = {name} />
      <button onClick={() =>setName("Sevgi")}>Change Name</button>
      <hr/>
      <ul>
        {students.map ((student, index) => (
          <ListItem key={index} student={student} index={index} />
        ))}
      </ul>
    </>
  );
}

export default App
