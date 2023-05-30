import './App.css';
import ListItem from './components/ListItem';
// import Deneme from './Deneme';

function App() {
  // let name = "Selahattin";
  // let surname = "Demir";
  // let age = 25;

  const users = [{id:1, name:"Selahattin", surname:"Demir", age:25}, {id:2, name:"Ahmet", surname:"Demir", age:25}, {id:3, name:"Mehmet", surname:"Demir", age:25 }]

  return (
    <div className="App">
      <header className="App-header">
       {/* <Deneme name={name} surname={surname} age={age}/> */}
       <ul>
          {users.map((user) => <ListItem key={user.id} user={user}/> )}
       </ul>
      </header>
    </div>
  );
}

export default App;
