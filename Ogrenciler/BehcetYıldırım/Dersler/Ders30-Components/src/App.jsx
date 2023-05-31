import "./App.css";
// import Deneme from "./components/Deneme";
import ListItem from "./components/ListItem";

function App() {
  // let name = "Varol";
  // let surname = "Maksutoğlu";
  // let age = "37";
  const students = ["Varol", "Oğulcan", "Ege", "Aleyna", "Osman"];
  return (
    <div className="App">
      <header className="App-header">
        {/* <Deneme isim={name} surname={surname} age={age} /> */}
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
