import './App.css';
import UserInfo from './components/UserInfo';

function App() {
  let students = ["Ahmet", "Burak", "Ege", "Selim"];
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            students.map((student, index) => <UserInfo key={index} student = {student}/>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
