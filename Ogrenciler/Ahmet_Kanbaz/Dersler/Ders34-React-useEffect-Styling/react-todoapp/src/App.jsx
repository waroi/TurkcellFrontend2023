import { useEffect, useState } from 'react'
import './App.css'
import SingleItem from './components/SingleItem/SingleItem';

function App() {
  const [newItem, setNewItem] = useState('');
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/tasks');
      const data = await response.json();
      setAllTasks(data);
    }
    fetchData();
  }, [])

  function getInputValue(e) {
    setNewItem(e.target.value);
  }

  const addNewItem2JsonServer = () => {
    if(newItem !== '') {
      const newItemObject = {
        id: Date.now(),
        task: newItem,
        status: ''
      }
      const postItem4JsonServer = () => {
        fetch('http://localhost:3000/tasks', {
          method: 'POST',
          body: JSON.stringify(newItemObject),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
      document.getElementById('inputTask').value = '';
      setNewItem('');
      postItem4JsonServer();
      setAllTasks([...allTasks, newItemObject]);
    }
  }

  return (
    <>
      <h1>React ToDo App - JSON Server</h1>
      <form style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginTop: '1.8rem'}}>
        <label htmlFor="inputTask">Görev Giriniz</label>
        <input type="text" id='inputTask' name='inputTask' onChange={getInputValue} style={{
          borderRadius: '15px',
          padding: '10px 15px 7px',
          width: '45%'
        }}
        placeholder='Add new task...'/>
        <button className='addTaskButton' onClick={addNewItem2JsonServer} type='button'>Görev Ekle</button>
      </form>
      
      <ul>
        {
          allTasks.map((task) => <SingleItem key={task.id} singleTask = {task}/>)
        }
      </ul>
    </>
  )
}

export default App
