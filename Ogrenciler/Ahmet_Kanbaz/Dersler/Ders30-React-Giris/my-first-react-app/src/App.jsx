import './App.css';
import Deneme from './Deneme';

function App() {
  let name = 'Ahmet';
  return (
    <div className="App">
      <Deneme />
      <header className="App-header">
        <div>
          React Giriş
          <Deneme />
          <span> {name}</span>
        </div>
      </header>
    </div>
  );
}

export default App;
