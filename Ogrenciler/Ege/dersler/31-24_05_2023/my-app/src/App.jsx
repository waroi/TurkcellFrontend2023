import "./App.css";
import Deneme from "./components/Deneme";
import ListItem from "./components/ListItem";
import Task from "./components/Task";

function App() {
  let name = "Ege";
  let surname = "Kara";
  let age = 25;
  const students = ["Varol", "Oğulcan", "Ege", "Aleyna", "Osman"];
  return (
    <div className="App">
      <header className="App-header">
        {/* <Deneme isim={name} /> */}
        {/* <Task /> */}
        {/* <Task fName={name} lName={surname} age={age} /> */}
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
