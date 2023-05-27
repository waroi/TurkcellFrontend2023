import {useState} from 'react'
import Tasks from '../components/Tasks'
function App() {
  const [input, setInput] = useState('');
  const [todo, setToDo] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const addNewInput = () => {
    if(input !== '') {
      setToDo([...todo, input]);
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
        <ul className='list-group w-75'>
          {
            todo.map((item, index) => {
              return <Tasks key={index} task={item}/>
              })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
