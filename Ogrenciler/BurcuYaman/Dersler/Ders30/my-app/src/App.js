import './App.css';
import Deneme from './components/Deneme';

function App() {
  const isim = "Burakhan";
  const soyisim = "Katdar";
  const yas = 23
  return (
    <div className="App">
      <Deneme isim={isim} soyisim={soyisim} yas={yas} />
    </div>
  );
}

export default App;
