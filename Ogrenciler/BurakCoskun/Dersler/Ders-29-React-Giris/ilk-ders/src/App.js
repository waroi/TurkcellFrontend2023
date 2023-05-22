import "./App.css";
import Deneme from "./Deneme";

function App() {
  let name = "Burak";

  return (
    <div className="App">
      <header className="App-header">
        Merhaba {name}
        <Deneme />
      </header>
    </div>
  );
}

export default App;
