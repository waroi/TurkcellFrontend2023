import './App.css';
import Try from './components/Try';
import ListItem from './components/ListItem';

function App() {
  let name = "Gizem";
  let surname = "Aktürk";
  let age = 23;
  let job = "Computer Engineer";
  let jobs = ["chef","police","nurse","doctor"]

  return (
    <div className="App">
      <header className="App-header">
        <Try name={name} surname={surname} age={age} job={job} />
        <ul>
          {jobs.map((job,index) => <ListItem key={index} job={job}/>)}
        </ul>
      
      </header>
    </div>
  );
}

export default App;
