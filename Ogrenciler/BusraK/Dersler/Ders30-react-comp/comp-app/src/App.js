import "./App.css";

import Deneme from "./components/Deneme";
import { ListItem } from "./components/ListItem";
function App() {
  let isim = "Busra";
  let surname = "Kosnak";
  let age = 22;
  const students = ["Büşbüş", "ali", "veli", "kemal", "ayşe"];

  return (
    <div className="App">
      <header className="App-header">
        <Deneme isim={isim} surname={surname} age={age} />
        <ul>
          {students.map((student, index) => (
            <ListItem key={index} student={student} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
