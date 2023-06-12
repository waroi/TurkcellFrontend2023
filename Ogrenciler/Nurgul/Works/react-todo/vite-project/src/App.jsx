import React ,{useState} from 'react';
import './App.css';

function App() {

  const [newItem,setNewItem]=useState("");
  const [items,setItems] = useState([]);


  function addItem(){

    if(!newItem){
      alert("enter an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random()*1000),
      value : newItem
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
    console.log(items)

  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
   <div className="App">
      <h1>Todo List App</h1>
      <form onSubmit={(e)=> {
        e.preventDefault();
        addItem();
      }}>
      <input 
      type="text"
      placeholder='Add an Item...'
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />
      </form>
      <button onClick={(e) => addItem()}>Add</button>

      <ul>
       {items.map(item => {
        return <li key={item.id}> {item.value} <button onClick={e => deleteItem(item.id)}>X</button>  </li>
       })}
      </ul>
    </div>
  );
}

export default App;