
import './App.css';
import Deneme from './deneme';

function App() {
  let name = "Burcu";
  return (
    <div className="App">
      <header className="App-header">
        Merhaba {name}
        <Deneme/>
      </header>
    </div>
  );
}

export default App;
