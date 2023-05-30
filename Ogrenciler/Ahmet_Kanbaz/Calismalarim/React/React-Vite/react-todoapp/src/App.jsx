import {useState, useEffect} from 'react'
import Tasks from './components/Tasks'
function App() {
  const [input, setInput] = useState('');
  const [todo, setToDo] = useState([]);

  //Sayfa ilk yüklendiğinde localstorage içerisinde bulunan veriler alınacaktır.
  useEffect (() => {
    const toDoList = JSON.parse(localStorage.getItem('tasks'));
    if (toDoList) {
      setToDo(toDoList);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todo))
  }, [todo])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const addNewInput = () => {
    if(input !== '') {
      const newToDo = {
        id: Date.now(),
        text: input,
        isCompleted: false
      }
      setToDo([...todo, newToDo]);
      setInput('');
    }
  }

  
  return (
    <div className='container pt-4'>
      <h3 className='text-center py-3'>ToDo App</h3>
      <div className="d-flex gap-3 justify-content-center">
        <input type="text" className='form-control w-50' name='taskInput' value={input} onChange={handleChange} placeholder='Yeni bir görev giriniz...'/>
        <button onClick={addNewInput} className='btn btn-info px-4 py-1'>Ekle</button>
      </div>
      <div className='d-flex justify-content-center pt-3'>
        <ul className='w-75'>
          {
            todo.map((item) => {
              return <Tasks key={item.id} task={item.text}/>
              })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
