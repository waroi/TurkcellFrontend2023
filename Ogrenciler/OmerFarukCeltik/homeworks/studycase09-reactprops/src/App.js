import './App.css';
// import Deneme from './components/deneme';
import ListItem from './components/listItem';

function App() {
  // let name = "ömer";
  // let surname = "çeltik";
  // let age = 25;
  const students = ["Yasin","Burcu","Ömer"];
  return (
    <div className="App">
      <header className="App-header">
       {/* <Deneme isim={name} soyisim={surname} yas={age}/> */}
       <ul>{
        students.map((item,i) => (
          <ListItem key={i} student={item}/>
          ))}
         </ul>
      </header>
    </div>
  );
}

export default App;
