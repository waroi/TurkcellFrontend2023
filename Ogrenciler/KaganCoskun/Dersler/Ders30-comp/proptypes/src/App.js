import './App.css';
import Deneme from './components/Deneme';


function App() {
  let name = "Kagan";
  let surname = "Coskun";
  let age = 23;

  return (
    <div className="App">
      <header className="App-header">
        <Deneme name={name} surname={surname} age={age}  />
        <Deneme name={name}  age={age}  />
        <Deneme  surname={surname} age={age}  />
      </header>
    </div>
  );
}

export default App;
