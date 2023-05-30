import './App.css';
import Deneme from './components/Deneme';
import ListItem from './components/ListItem';

function App() {
  let name = "Aleyna";
  let surname = "Şenozan";
  let age = 25;
  let students = ["Osman", "Aleyna", "Osman Can"]
  return (
    <div className="App-header">
      <Deneme name={name} surname={surname} age={age} />
      <ul>{students.map((student, index) => <ListItem key={index} student={student} />)}</ul>
    </div>
  );
}

export default App;