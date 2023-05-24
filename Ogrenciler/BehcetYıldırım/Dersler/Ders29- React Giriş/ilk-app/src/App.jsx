import "./App.css";
import Deneme from './deneme'

function App() {
  let name = "Behcet"
  return (
    <div className="App">
      <Deneme/>
      <header className="App-header">Merhaba {name}
        <Deneme/>
        <Deneme/>
      </header>
    </div>
  );
}

export default App;
