import './App.css';
import Deneme from './Deneme';

function App() {
  let name = "osman";
  return (
    <div className="App">
      <header className="App-header">
        <Deneme />
        Merhaba {name}
      </header>
    </div>
  );
}

export default App;
