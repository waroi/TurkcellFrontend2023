import './App.css';
import Deneme from './components/deneme'
import ListItem from './components/listItem'
function App() {
  let name = "Furkan";
  let surname = "Uygur";
  let age = 25;
  let students = ["Buse", "Güzin", "Furkan"]
  return (
    <div className="App">
      <header className="App-header">
        {/* Props ile sadece isim,soyisim ve yas değişkenlerine 
        atanan bilgileri gönderdik */}
        <Deneme isim={name} soyisim={surname} yas={age} />
        <ul>
          {students.map((student,index) => (
            <ListItem ogr={student}  key={index} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
