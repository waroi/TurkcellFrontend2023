import "./App.css";
import Deneme from "./Deneme.js";
import ListItem from "./ListItem.jsx";

function App() {
  let name = "Kazım";
  let surname = "Murtaza";
  let age = 23;
  // const students = ["Ali", "Veli", "Mali"];
  const employees = ["Seyit", "Gizem", "Sueda"];
  return (
    <div className="App">
      <Deneme isim={name} surname={surname} age={age} />
      {/* <ul>
        {students.map((student, index) => (
          <ListItem student={student} key={index} />
        ))}
      </ul> */}
      <div>
        {employees.map((emp, index) => (
          <ListItem key={index} emp={emp} />
        ))}
      </div>
      <ul>
        {employees.map((emp, index) => (
          <ListItem key={index} emp={emp} />
        ))}
      </ul>
     
    </div>
  );
}

export default App;
