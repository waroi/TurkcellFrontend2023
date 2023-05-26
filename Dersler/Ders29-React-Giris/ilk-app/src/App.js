import "./App.css";
import Deneme from "./Deneme";

function App() {
  let name = "Varol";
  return (
    <div className="App">
      <Deneme />
      <header className="App-header">
        Merhaba {name}
        <Deneme />
      </header>
    </div>
  );
}

export default App;
