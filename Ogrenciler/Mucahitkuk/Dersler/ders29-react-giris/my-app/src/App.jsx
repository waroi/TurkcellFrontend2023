import './App.css';
import Deneme from "./components/Deneme"
import ListItem from "./components/ListItem"



function App() {
  const car = {
    type: "Fiat",
    model: 500,
    color: "white"
  }
  const students  = ["Mert", "Ahmet", "Ali", "Veli"]
  
  return (
    <div className="App">
      <header className="App-header">
        <Deneme car={car} />
        <ul>
          {students.map((student, index) => 
          <ListItem key={index} student={student} />
          )}
        </ul>
      </header>
    </div>
  );
}


export default App;

