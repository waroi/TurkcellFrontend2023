import {useState, useEffect} from 'react'
import './App.css'
import AddToDo from './components/AddToDo/AddToDo';
import ListTasks from './components/ListTasks/ListTasks';
import Search from './components/Search/Search';

function App() {
  const [alltasks, setAllTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/tasks');
      const data = await response.json();
      setAllTasks(data);
    }
    fetchData();
  }, [])
  
  return (
    <>
    <h1>React ToDo App - JSON Server</h1>
      <AddToDo allTasks={alltasks} setAllTasks={setAllTasks}/>
      {
        alltasks.length > 0 ? <Search /> : ''
      }
      {
        alltasks.map((task) => {
          return <ListTasks key={task.id} singleTask={task}/>
        })
      }
    </>
  )
}

export default App
