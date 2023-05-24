import "./App.css";
// import Greeting from "./components/Greeting";
import ListItem from "./components/ListItem";

function App() {
  // let name = "Burak";
  // let surname = "Coşkun";
  // let age = 23;
  const students = ["Burak", "Tarık", "Sefa", "Mehmet", "Ahmet"];
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting name={name} surname={surname} age={age} /> */}
        <ul>
          {students.map((student, idx) => (
            <ListItem key={idx} student={student} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
