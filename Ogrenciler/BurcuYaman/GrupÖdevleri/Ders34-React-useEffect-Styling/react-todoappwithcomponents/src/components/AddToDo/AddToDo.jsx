import {useState} from 'react'
import PropTypes from 'prop-types'

const AddToDo = ({allTasks, setAllTasks}) => {
  const [newItem, setNewItem] = useState('');

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
    <form style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginTop: '1.8rem', marginBottom: '1.5rem'}}>
      <label htmlFor="inputTask">Görev Giriniz</label>
      <input type="text" id='inputTask' name='inputTask' onChange={getInputValue} style={{
        borderRadius: '15px',
        padding: '10px 15px 7px',
        width: '45%'
      }}
      placeholder='Add new task...'/>
      <button className='addTaskButton' onClick={addNewItem2JsonServer} type='button'>Görev Ekle</button>
    </form>
  )
}

AddToDo.propTypes = {
  allTasks: PropTypes.array,
  setAllTasks: PropTypes.func
}

export default AddToDo
