import './App.css';
import Deneme from './components/Deneme'; 
import ListItem from './components/ListItem';

function App() {
  let name ="Gizem";
  let surname ="Aktürk";
  let age = 25;
  const students = ["Gizem","Tuna","Mehmet","Ayşe"]
  return (
    <div className="App">
      <header className="App-header">
        <Deneme isim={name} surname={surname} age={age}/>
        <ul>
          {students.map((student ,index) => <ListItem key={index} student={student}/>)
          }
        </ul>
       
      </header>
    </div>
  );
}

export default App;
