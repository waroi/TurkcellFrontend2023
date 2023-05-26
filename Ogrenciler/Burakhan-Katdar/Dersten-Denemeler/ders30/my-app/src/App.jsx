import './App.css';
import ListItem from './components/ListItem';

function App() {
  const students = ['Burakhan','Burcu','Mirhat'] 
  return (
    <div className="App">
      <ul>
        {
          students.map((student, index) => {
            return <ListItem key={index} student={student}/>
          })
        }
      </ul>
    </div>
  );
}

export default App;
