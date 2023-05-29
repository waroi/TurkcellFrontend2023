import { useState } from 'react';
import './App.css';

function App() {
  // State tanımlamaları
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  // Yeni öğe ekleme fonksiyonu
  function addItem() {
    if (!newItem) {
      alert('Please enter a value');
      return;
    }

    // Yeni öğe nesnesini oluşturma
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    // Eski öğelerin üzerine yeni öğeyi ekleyerek state'i güncelleme
    setItems(oldItems => [...oldItems, item]);
    setNewItem('');
  }

  // Öğe silme fonksiyonu
  function deleteItem(id) {
    // Filteleme yaparak silinecek öğeyi çıkarma
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>

      {/* Input alanı */}
      <input
        type="text"
        placeholder='Add an item..'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      {/* Ekleme butonu */}
      <button onClick={() => addItem()}>Add Todo</button>

      {/* Öğelerin listesi */}
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
