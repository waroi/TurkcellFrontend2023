import { useState } from 'react'
import './App.css'
import Deneme from './components/Deneme'
import ListItem from './components/ListItem';

function App() {
  const [name, setName] = useState("Varol");
  const students = ["Burak", "Ahmet", "Mehmet"];
  
  return (
    <>
     <Deneme isim={name} />
     <button onClick={() => setName("Burak")}>Change Name</button>
     <hr />
     <ul>
      {students.map((student, index) => (
      <ListItem key={index} student={student} index={index} />
      ))}
     </ul>
    </>
    );
};

export default App
