import './App.css';
// import Deneme from './components/Deneme';
import ListItem from './components/ListItem';

function App() {

  // let name = " Sueda";
  // let surname = "Cicekli";
  // let age = 25;
  const students = ["Sueda", "Varol", "Seyit", "Gizem"]

  return (
    <div className="App">
      <header className="App-header">
        {/* <Deneme name={name} surname={surname} age={age} /> */}
        <ul>
          {students.map((student, index) => (
            <ListItem key={index} students={student} />
          )
          )}
        </ul>

      </header>
    </div>
  );
}

export default App;