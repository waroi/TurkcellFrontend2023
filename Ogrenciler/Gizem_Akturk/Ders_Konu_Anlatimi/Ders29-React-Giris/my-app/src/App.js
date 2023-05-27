import logo from "./logo.svg";
import Deneme from "./Deneme";
import "./App.css";

function App() {
  let name = "Gizem";
  return (
    <div className="App">
      <Deneme />
      <header className="App-header">
        Hello {name}
        <Deneme />
      </header>
    </div>
  );
}

export default App;
