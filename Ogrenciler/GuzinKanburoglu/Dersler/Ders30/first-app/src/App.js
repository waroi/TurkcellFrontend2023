
import './App.css';
import Deneme from "./components/Deneme.jsx"
function App() {
  let name;
  let surname = "Buffay";
  let age = 24;
  return (
    <div className="App">
      <header className="App-header">
       <Deneme isim = {name} soyisim = {surname} yas = {age}/>
      </header>
    </div>
  );
}

export default App;
