import './App.css';
import Deneme from './components/Deneme';

function App() {

  let name = "Gizem - Seyit - Sueda";
  let grupname = "GSS";
  let eleman = 3;

  return (
    <div className="App">
      <header className="App-header">
        <Deneme name={name} grupname={grupname} eleman={eleman} />
      </header>
    </div>
  );
}

export default App;